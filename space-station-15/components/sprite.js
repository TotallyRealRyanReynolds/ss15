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
                            } else if(this.state===4){
                                image(this.image,0,0)
                                } else if(this.state===5){
                                    image(this.image,this.x,this.y, this.width, this.height, 0, 0, this.width, this.height)
                                    } else if(typeof this.state === "string"){ //variantTextureX/32,32,xshift
                                        this.state = this.state.split("/")
                                        this.type = this.state[0] //variantTexture

                                        this.dimensions = this.state[1].split(",") //32,32,xshift

                                        this.width = int(this.dimensions[0]) //32
                                        this.height = int(this.dimensions[1]) //32

                                        this.xshift = int(this.dimensions[2])

                                            if(this.type==="variantTextureX"){
                                                image(this.image,this.x,this.y, this.width, this.height, this.xshift, 0, this.width, this.height)
                                            }
                                        }
        } else {
            // Handle error or provide a default image
            console.error("Image not loaded!");
        }
    }
}
