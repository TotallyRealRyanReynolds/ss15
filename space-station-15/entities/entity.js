// Entity.js
class Entity {
  constructor(x, y, type, data) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.data = data;
  }

  display() {
    fill(200);
    rect(this.x * 32, this.y * 32, 32, 32);
  }
}
  