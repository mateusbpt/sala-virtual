import Phaser from 'phaser';
import image from '../images/user.png';

export default class MainScene extends Phaser.Scene {
  private avatar!: Phaser.Physics.Arcade.Sprite;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys | null;

  constructor() {
    super('MainScene');
    this.cursors = null;
  }

  preload() {
    this.load.image('avatar', image);
  }

  create() {
    this.avatar = this.physics.add.sprite(400, 300, 'avatar');
    this.avatar.setScale(0.1); 
    this.avatar.setCollideWorldBounds(true);
    this.createControls();
  }

  update() {
    if (!this.cursors) {
      return;
    }

    if (this.cursors.left.isDown) {
      this.avatar.x -= 2;
    } else if (this.cursors.right.isDown) {
      this.avatar.x += 2;
    }

    if (this.cursors.up.isDown) {
      this.avatar.y -= 2;
    } else if (this.cursors.down.isDown) {
      this.avatar.y += 2;
    }
  }

  private createControls() {
    if (this.input?.keyboard) {
      this.cursors = this.input.keyboard.createCursorKeys();
    } else {
      console.warn('Teclado não disponível');
    }
  }
}