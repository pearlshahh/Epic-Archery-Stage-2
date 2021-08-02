const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var plr
  //plr = player cpr = computer
var plrbase
   var cpr 
   var cprbase


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   plrbase = new playerbase(300,random(450,height - 300),180,150);
plr = new player(285,plrbase.body.position.y-153,50,180)
cprbase = new computerbase(width-300,random(450,height - 300),180,150);
cpr = new computerplayer(width-280,cprbase.body.position.y-153,50,180);
plrarcher = new parcher(340,plrbase.body.position.y-180,120,120);
cprarcher = new carcher (width-340,cprbase.body.position.y-180,120,120)
arrow= new playerArrow(plrarcher.body.position.x,plrarcher.body.position.y,100,10)


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
plrbase.display();
cprbase.display();
plr.display();
cpr.display();
plrarcher.display();
cprarcher.display();
arrow.display();
if (keyCode==32){
arrow.shoot(plrarcher.body.angle)
}
   //display Player and computerplayer


}
