// lattice.js
class Lattice extends Tile {
  constructor(x, y, type, objects) {
    super(x, y, 'lattice', objects);
    this.tileSprite = new Sprite("/Users/joemama/Desktop/SS15/my-p5-electron-app/assets/textures/tiles/lattice.png");
    this.tileSprite.preload();    
  }

  display() {
    translate(this.x * 32, this.y * 32);
    this.tileSprite.display(0, 0, 32, 32, 4);
    translate(-this.x * 32 , -this.y * 32);
  }
}
