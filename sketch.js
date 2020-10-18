const  Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var ground,ground1,ground2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var polygon,rope1;

var score=0;
function preload(){
changeTime();
}
function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;

  ground=new Ground(400,390,800,20);
  ground1=new Ground(300,300,200,20);
  ground2=new Ground(500,200,200,20);

  box1=new Box(230,275,20,30);
  box2=new Box(250,275,20,30);
  box3=new Box(240,245,20,30);
  box4=new Box(300,275,20,30);
  box5=new Box(320,275,20,30);
  box6=new Box(310,245,20,30);

  box7=new Box(490,175,20,30);
  box8=new Box(512,175,20,30);
  box9=new Box(500,145,20,30);

polygon=Bodies.circle(50,200,20);
World.add(world,polygon);
rope1=new Rope(this.polygon,{x=300,y:200});



}

function draw() {
  if(backgroundImage)
  background(backgroundImage);  
noStroke();
textSize(35);
fill("white");
text("SCORE:",score,750,40);

  ground.display();
  ground1.display();
  ground2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  //box10.display();
  //box11.display();
  rope1.display();

  image(CENTER)
image(polygon_img,polygon.position.x,polygon,position.y,40,40);  

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function Released(){
  rope1.fly();
}

async function changeTime(){
  var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON= await response.json();
  var datetime=responseJSON.datetime;
  var hour=datetime.slice(11,30);
  if(hour>=06&&hour<=19){
    bg="sprites/day.jpg";
  }
  else{
bg="sprites/night time.jpg";
  }
backgroundImage=loadImage(bg);
console.log(backgroundImage);


}