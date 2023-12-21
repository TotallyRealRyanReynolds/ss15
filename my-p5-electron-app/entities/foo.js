// foo.js
class Foo {
    constructor(x,y) {
        this.x=x
        this.y=y
        this.state=5
  
      this.sprite = new Sprite("/Users/joemama/Desktop/SS15/my-p5-electron-app/assets/textures/toy_mouse.png");
  
      this.sprite.preload();    
    }
  
    display() {
      translate(this.x, this.y)
      this.sprite.display(0,0, 0,0,this.state);
      translate(-this.x, -this.y)
    }
  }
  