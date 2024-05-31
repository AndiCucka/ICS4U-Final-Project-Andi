/*
* This is the Game.ts for my zombie game.
*
* @author  Andi Cucka
* @version 1.0
* @since   2024-04-18
*/

import { Scene } from 'phaser';

export class Game extends Scene {
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    sprite: Phaser.GameObjects.Sprite; // Define a variable for the sprite

    constructor() {
        super('Game');
    }

    preload() {
        // Load the drink image
        this.load.image('drink', 'path/to/drink.png'); // Ensure the correct path to your drink.png
    }

    create() {
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0x00ff00);

        this.background = this.add.image(512, 384, 'background');
        this.background.setAlpha(0.5);

        // Add the drink sprite to the scene
        this.sprite = this.add.sprite(512, 384, 'drink');
        this.sprite.setOrigin(0.5);

        this.input.once('pointerdown', () => {
            this.scene.start('GameOver');
        });
    }
}
