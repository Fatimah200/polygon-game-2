class Box {
    constructor(x, y, width, height) {
      var options = {
          'isStatic':false,
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.box = Bodies.rectangle(x, y, width, height,options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.box);
    }
    score(){
      box1.score();
      box2.score();
      box3.score();
      box5.score();
      box6.score();
      box7.score();
      box8.score();
      box9.score();
    }
    display(){
      var pos =this.box.position;
      var angle=this.box.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  