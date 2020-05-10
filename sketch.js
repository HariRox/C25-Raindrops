const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var r1,r2,r3,r4,r5,r6;

function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;
  r1 = new Raindrop(70,0);
  r2 = new Raindrop(120,0);
  r3 = new Raindrop(170,0);
  r4 = new Raindrop(220,0);
  r5 = new Raindrop(270,0);
  r6 = new Raindrop(320,0);
}

function draw() {
  background(245);
  Engine.update(engine);
  strokeWeight(4);
  console.log(second());
  if(second() % 2 == 0){
    r1.y = 0;
    r2.y = 0;
    r3.y = 0;
    r4.y = 0;
    r5.y = 0;
    r6.y = 0;
  }
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
  r6.display();
  drawSprites();
}