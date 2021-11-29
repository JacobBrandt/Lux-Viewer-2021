import React, { useEffect, useState } from 'react';
import { ReplayController } from './ReplayController';
import "./result.css";

export interface Results {
  ranks: {
    rank: number,
    agent: number,
    units: number,
    cities: number
  }[],
  replayFile: string;
}

interface ResultProps {
  results: Results;
  onClick: () => void;
}

export const Result = ({
  results, onClick
}: ResultProps) => {
  const score = results.ranks.map(rank => 
    rank.cities
  ).join(" - ")

  const [selected, setValue] = useState(false);
  useEffect(() => {
    const subscription = ReplayController.getInstance().onChange().subscribe(replay => {
      if (replay && replay.results.replayFile !== results.replayFile) {
        setValue(false);
      }
    });
    return () => {
      subscription.unsubscribe();
    }
  })

  function resultOnClick() {
    setValue(true);
    onClick();
  }

  return (
    <div className={`result ${selected ? "selected" : ""}`} onClick={() => resultOnClick()}>
      <div>{results.replayFile.replace("replays/", "").replace(".json", "")}</div>
      <div className="score"> {score} </div>
    </div>
  );
}