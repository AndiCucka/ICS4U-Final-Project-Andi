import { Scene } from 'phaser';

export class Game extends Scene {
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    sprite: Phaser.GameObjects.Sprite; // Define a variable for the sprite

    constructor() {
        super('Game');
    }

    preload() {
        // Load the sprite image
        this.load.image('sprite', 'path/to/sprite.png'); // Ensure the correct path to your sprite.png
    }

    create() {
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0x00ff00);

        this.background = this.add.image(512, 384, 'background');
        this.background.setAlpha(0.5);

        // Add the sprite to the scene
        this.sprite = this.add.sprite(512, 384, 'sprite');
        this.sprite.setOrigin(0.5);

        // Remove or comment out the text creation if not needed
        // this.msg_text = this.add.text(512, 384, 'Hello World!', {
        //     fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
        //     stroke: '#000000', strokeThickness: 8,
        //     align: 'center'
        // });
        // this.msg_text.setOrigin(0.5);

        this.input.once('pointerdown', () => {
            this.scene.start('GameOver');
        });
    }
}
