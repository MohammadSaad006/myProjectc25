const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var myEngine,myWorld
var Paper1
var dastbinpart1,dastbinparet2,dastbinpart3
var ground
function preload()
{
   
} 

function setup() {
   createCanvas(1200,400);
   myEngine= Engine.create();// world
   myWorld= myEngine.world;
  
  ground=new Ground(600,390,1200,20)
  Paper1= new Paper(150,320,15);
  dastbinpart1=new Box(850,322,20,190)
  dastbinpart3=new Box(1018,322,20,190)
  dastbinpart2=new Box(950,370,200,20)
  
 }
 
 function draw() {
   background("white"); 
 
   Engine.update(myEngine)
   ground.display();
   Paper1.display();
   dastbinpart1.display();
   dastbinpart3.display();
   dastbinpart2.display();
   
   
   
 }
 function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    Body.applyForce(Paper1.body,Paper1.body.position,{x:55,y:-55});
  }
}




