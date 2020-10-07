import 'phaser';

export class GameApp extends Phaser.Game {
  public static gameConfig: Phaser.Types.Core.GameConfig = null;

  constructor(config: Phaser.Types.Core.GameConfig) {
    GameApp.gameConfig = config;

    if (GameApp.gameConfig == null) {
      GameApp.gameConfig = {
        type: Phaser.AUTO,
        parent: 'content',
        backgroundColor: '#385e78',
        width: 1024,
        height: 512,
        physics: {
          default: 'arcade',
          arcade: {
            debug: true,
          },
        },
        scene: [Boot, SplashScene, Preload, Main],
      };
    }

    super(GameApp.gameConfig);
  }
}

new GameApp(null);
