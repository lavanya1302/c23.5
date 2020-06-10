class Package extends BaseClass{
    constructor(x,y){

        super(x,y,50,50);
        this.image=loadImaage("sprites/Paper.png");
    }
    display(){
        this.body.position.x=mouseX;
        this.body.position.y=mouseY;
        super.display();
    }
    
};