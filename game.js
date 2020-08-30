const gameState = {
	score: 0
};

const config = {
	type: Phaser.AUTO,
	width: 640,
	height: 512,
	backgroundColor: "b9eaff",
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
			enableBody: true,
		}
	scene: [StartScene, GameScene]
};

const game = new Phaser.Game(config);

