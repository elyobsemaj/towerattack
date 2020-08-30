const gameState = {
	
};

const config = {
	type: Phaser.AUTO,
	parent: 'content'
	width: 640,
	height: 512,
	backgroundColor: "b9eaff",
	scene: [StartScene, GameScene]
};

const game = new Phaser.Game(config);

