class Moving extends Box{
    constructor(x,y,width,height){
        super(x,y,width,height);
    }
    display(){
        this.body.position.x=mouseX;
        this.body.position.y=mouseY;
        super.display();
    }
}