const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon;
var block1,block2,block3,block4;
var block5,block6,block7,block8,block9;
var stringy;

function setup() {
  var canvas = createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  stroke(255)
  
  polygon = new Polygon(100,400);
  
  block1 = new Block(390,155,30,40);
  block2 = new Block(420,195,30,40);
  block3 = new Block(390,195,30,40);
  block4 = new Block(360,195,30,40);
  block5 = new Block(450,235,30,40);
  block6 = new Block(420,235,30,40);
  block7 = new Block(390,235,30,40);
  block8 = new Block(360,235,30,40);
  block9 = new Block(330,235,30,40);
  
  stringy = new String(polygon.body,{x:200, y:50});
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  
  polygon.display();
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  
  stringy.display();
  
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  stringy.fly();
}

function keyPressed(){
  if(keyCode === 32){
      stringy.attach(polygon.body)
  }
}