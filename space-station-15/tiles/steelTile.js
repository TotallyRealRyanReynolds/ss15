// lattice.js
class SteelTile extends Tile {
  constructor(x, y, type, objects) {
    super(x, y, 'steelTile', objects);
    this.tileSprite = new Sprite("/Users/joemama/Desktop/SS15/space-station-15/assets/textures/tiles/steel.png");
    this.tileSprite.preload();    
    this.xshift = floor(random(3))*32
  }

  display() {
    translate(this.x * 32, this.y * 32);
    this.tileSprite.display(0, 0, 32, 32, "variantTextureX/32,32,"+this.xshift);
    translate(-this.x * 32 , -this.y * 32);
  }
}
