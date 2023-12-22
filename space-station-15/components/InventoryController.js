//CharacterController.js
const itemRegistry = {
    'nothing' : '/Users/joemama/Desktop/SS15/space-station-15/assets/textures/debug/empty.png',
    'crowbarleft' : '/Users/joemama/Desktop/SS15/space-station-15/assets/textures/items/crowbar/inhand-left.png',
    'crowbarright' : '/Users/joemama/Desktop/SS15/space-station-15/assets/textures/items/crowbar/inhand-right.png'
  };
  

class InventoryController {
    constructor(x,y) {
        this.x=x
        this.y=y
        
        this.inventoryItems = ["crowbar"]
        this.heldItemName = "nothing"

        this.heldItemSprite = new Sprite('/Users/joemama/Desktop/SS15/space-station-15/assets/textures/debug/empty.png');
        this.heldItemSprite.preload();
    }

    inputs(x,y,state) {
        this.x=x
        this.y=y
        this.state=state

        this.hand = "left"

        if (keyIsDown(49)) {
            delete this.heldItemSprite

            this.heldItemName = this.inventoryItems[0]

            this.heldItemFilepath = itemRegistry[this.heldItemName+this.hand] || null;

            this.heldItemSprite = new Sprite(this.heldItemFilepath);
            this.heldItemSprite.preload();
        }

        translate(windowWidth/2, windowHeight/2)
        this.heldItemSprite.display(0,0,32,32,this.state)
        translate(-windowWidth/2, -windowHeight/2)

        return this.heldItemName
    }
}
