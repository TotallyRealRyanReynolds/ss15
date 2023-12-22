// lattice.js
class Plating extends Tile {
  constructor(x, y, type, objects) {
    super(x, y, 'plating', objects);
    this.tileSprite = new Sprite("/Users/joemama/Desktop/SS15/space-station-15/assets/textures/tiles/plating.png");
    this.tileSprite.preload();    
  }

  display() {
    translate(this.x * 32, this.y * 32);
    this.tileSprite.display(0, 0, 32, 32, 4);
    translate(-this.x * 32 , -this.y * 32);
  }
}
