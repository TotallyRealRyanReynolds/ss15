//CharacterController.js
class CharacterController {
    constructor(x,y,walkingSpeed,runSpeed) {
        this.x=x
        this.y=y
        this.walkingSpeed=walkingSpeed
        this.runSpeed=runSpeed
        this.state=0
    }


    inputs() {

        if (keyIsDown(16)) {
            this.speed = this.runSpeed
        } else {
            this.speed = this.walkingSpeed
        }

        if (keyIsDown(87)) {
            this.y -= this.speed
            this.state=1
        } else if(keyIsDown(83)) {
            this.y += this.speed
            this.state=0
        }

        if (keyIsDown(65)) {
            this.x -= this.speed
            this.state=3
        } else if(keyIsDown(68)) {
            this.x += this.speed
            this.state=2
        }

        return {x: this.x, y: this.y, state: this.state};
    }
}
