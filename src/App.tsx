import React, { useEffect } from 'react';
import Phaser from 'phaser';
import MainScene from './scenes/MainScene';
import'./App.css'

const App: React.FC = () => {
  useEffect(() => {
    document.title = "Sala Virtual";
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      scale: {
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
      },
      physics: {
        default: 'arcade',
        arcade: {
          debug: false
        }
      },
      scene: MainScene
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <div>
      <div className="header">
        <h1>SALA VIRTUAL</h1>
      </div>
      <div id="game-container"></div>
    </div>
  );
};

export default App;