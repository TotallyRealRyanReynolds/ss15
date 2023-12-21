// sprite.js
class Sprite {
    constructor(filepath) {
        this.filepath = filepath;
        this.image = null;
    }

    preload() {
        this.image = loadImage(this.filepath);
    }

    display(x, y, width, height, state) {
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.state=state

        if (this.image) {
            if(this.state===0){
                image(this.image, 0, 0, this.width, this.height, 0, 0, this.image.width / 2, this.image.height / 2);
                } else if(this.state===1){
                    image(this.image, 0, 0, width, height, this.image.width / 2, 0, this.image.width / 2, this.image.height / 2);
                    } else if(this.state===2){
                        image(this.image, 0, 0, width, height, 0, this.image.height / 2, this.image.width / 2, this.image.height / 2);
                        } else if(this.state===3){
                            image(this.image, 0, 0, width, height, this.image.width / 2, this.image.height / 2, this.image.width / 2, this.image.height / 2);
                            } else {
                                image(this.image,0,0)
                            }
        } else {
            // Handle error or provide a default image
            console.error("Image not loaded!");
        }
    }
}
