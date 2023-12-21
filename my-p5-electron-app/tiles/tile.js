// tile.js
class Tile {
  constructor(x, y, type, objects) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.objects = objects;
  }

  display() {
    fill(200);
    rect(this.x * 32, this.y * 32, 32, 32);
  }
}
  