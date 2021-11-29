import React from 'react';
import { GameComponent } from './components/Game';
import { Replays } from './components/Replays/Replays';
import './styles/index.css';
export default function App() {
  return (
    <div className="all-content">
      <Replays />
      <GameComponent />
    </div>
  );
}
