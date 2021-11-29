import React from 'react';
import { Result, Results } from './Result';
import { ReplayController } from './ReplayController';
import "./replay.css";

function importAll(r) {
  return r.keys().map(r);
}

export interface Replay {
  allCommands: any;
  mapType: string;
  results: Results;
  seed: number;
  teamDetails: {
    name: string,
    tournamentID: string
  }[];
}

const replays: Replay[] = importAll(require['context']('./list/', false, /\.(json)$/));
console.log(replays);
export const Replays = () => {


  function onClick(replay: Replay) {
    ReplayController.getInstance().setReplay(replay);
  }

  return (
    <div className="replay">
      {replays.map(replay => {
        return <Result results={replay.results} onClick={() => onClick(replay)} />
      })}
    </div>
  );
}
