
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,side1,side2,side3;
var ground1;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
  side1=new Bin(1400,510);
   paper=new Paper(200,450,70);
   ground1=new ground(800,650,1600,30)
 
 
 

  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
 
  paper.display(); 
 
  side1.display();
  ground1.display();
 // jump();
  drawSprites();
}

function keyPressed(){
  
  if(keyCode===UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-205});
  }	
 
}


