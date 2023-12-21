// lattice.js
class Human extends Entity {
  constructor(x, y, type, data) {
    super(x, y, 'human', data);

    this.characterController = new CharacterController(x,y,1.5,3.5)

    if("male" === data){
    this.head = new Sprite("/Users/joemama/Desktop/SS15/my-p5-electron-app/assets/textures/species/human/male/head_m.png");
    this.head.preload();    

    this.torso = new Sprite("/Users/joemama/Desktop/SS15/my-p5-electron-app/assets/textures/species/human/male/torso_m.png");
    this.torso.preload();    
    } else {
      this.head = new Sprite("/Users/joemama/Desktop/SS15/my-p5-electron-app/assets/textures/species/human/female/head_f.png");
      this.head.preload();    
  
      this.torso = new Sprite("/Users/joemama/Desktop/SS15/my-p5-electron-app/assets/textures/species/human/female/torso_f.png");
      this.torso.preload();    
    }

    this.l_arm = new Sprite("/Users/joemama/Desktop/SS15/my-p5-electron-app/assets/textures/species/human/common/l_arm.png");
    this.l_arm.preload();
    this.l_foot = new Sprite("/Users/joemama/Desktop/SS15/my-p5-electron-app/assets/textures/species/human/common/l_foot.png");
    this.l_foot.preload();
    this.l_leg = new Sprite("/Users/joemama/Desktop/SS15/my-p5-electron-app/assets/textures/species/human/common/l_leg.png");
    this.l_leg.preload();
    this.r_arm = new Sprite("/Users/joemama/Desktop/SS15/my-p5-electron-app/assets/textures/species/human/common/r_arm.png");
    this.r_arm.preload();
    this.r_foot = new Sprite("/Users/joemama/Desktop/SS15/my-p5-electron-app/assets/textures/species/human/common/r_foot.png");
    this.r_foot.preload();
    this.r_leg = new Sprite("/Users/joemama/Desktop/SS15/my-p5-electron-app/assets/textures/species/human/common/r_leg.png");
    this.r_leg.preload();
    this.r_hand = new Sprite("/Users/joemama/Desktop/SS15/my-p5-electron-app/assets/textures/species/human/common/r_hand.png");
    this.r_hand.preload();
    this.l_hand = new Sprite("/Users/joemama/Desktop/SS15/my-p5-electron-app/assets/textures/species/human/common/l_hand.png");
    this.l_hand.preload();
  }

  display() {
    let {x, y, state} = this.characterController.inputs()
    translate(windowWidth/2, windowHeight/2)
    this.head.display(0, 0, 32, 32, state);
    this.torso.display(0, 0, 32, 32, state);
    this.l_arm.display(0, 0, 32, 32, state);
    this.r_arm.display(0, 0, 32, 32, state);
    this.l_leg.display(0, 0, 32, 32, state);
    this.r_leg.display(0, 0, 32, 32, state);
    this.l_foot.display(0, 0, 32, 32, state);
    this.r_foot.display(0, 0, 32, 32, state);    
    this.l_hand.display(0, 0, 32, 32, state);
    this.r_hand.display(0, 0, 32, 32, state);    
    this.x=x
    this.y=y
  }

  getValues(){
    return {x: this.x, y: this.y};
  }
}
