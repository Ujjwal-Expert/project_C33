var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload(){
   bgImg = loadImage("plinko.png");
}

function setup() {
	createCanvas(400, 700);
	engine = Engine.create();
  world = engine.world;
  

  plinko1 = new Plinko(50,85,6);
  plinko2 = new Plinko(100,85,6);
  plinko3 = new Plinko(150,85,6);
  plinko4 = new Plinko(200,85,6);
  plinko5 = new Plinko(250,85,6);
  plinko6 = new Plinko(300,85,6);
  plinko7 = new Plinko(350,85,6);

  plinko8 = new Plinko(25,125,6);
  plinko9 = new Plinko(75,125,6);
  plinko10 = new Plinko(125,125,6);
  plinko11 = new Plinko(175,125,6);
  plinko12 = new Plinko(225,125,6);
  plinko13 = new Plinko(275,125,6);
  plinko14 = new Plinko(325,125,6);
  plinko15 = new Plinko(375,125,6);

  plinko16 = new Plinko(50,165,6);
  plinko17 = new Plinko(100,165,6);
  plinko18 = new Plinko(150,165,6);
  plinko19 = new Plinko(200,165,6);
  plinko20 = new Plinko(250,165,6);
  plinko21 = new Plinko(300,165,6);
  plinko22 = new Plinko(350,165,6);  

  plinko23 = new Plinko(25,205,6);
  plinko24 = new Plinko(75,205,6);
  plinko25 = new Plinko(125,205,6);
  plinko26 = new Plinko(175,205,6);
  plinko27 = new Plinko(225,205,6);
  plinko28 = new Plinko(275,205,6);
  plinko29 = new Plinko(325,205,6);
  plinko30 = new Plinko(375,205,6);

  ball = new Ball(random(0,400),0,15);

  wall1 = new Wall(0,170,10,750);
  wall2 = new Wall(200,170,10,750);
  wall3 = new Wall(100,350,width,20);
  
}

function draw() {
  background(255,195,216);
  Engine.update(engine);

  

  createPlinko();
  wall1.display();
  wall2.display();
  wall3.display();
  image(bgImg,0,0,width,height);
  
}



















function createPlinko(){
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display(); 

  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();

  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();

  ball.display();

  for(var i = 50;i<400;i = i+50){
    plinkoa = new Plinko(i,245,6);
    plinkoa.display();
  }

  for(var i = 25; i<400; i = i+50){
    plinkob = new Plinko(i,285,6);
    plinkob.display();
  }
  for(var i = 50; i<400; i = i+50){
    plinkoc = new Plinko(i,325,6);
    plinkoc.display();
  }
  for(var i = 25; i<400; i = i+50){
    plinkod = new Plinko(i,365,6);
    plinkod.display();
  }
  for(var i = 50; i<400; i = i+50){
    plinkoe = new Plinko(i,405,6);
    plinkoe.display();
  }
  for(var i = 25; i<400; i = i+50){
    plinkof = new Plinko(i,445,6);
    plinkof.display();
  }
  for(var i = 50; i<400; i = i+50){
    plinkog = new Plinko(i,485,6);
    plinkog.display();
  }
  for(var i = 25; i<400; i = i+50){
    plinkoh = new Plinko(i,525,6);
    plinkoh.display();
  }
  for(var i = 50; i<400; i = i+50){
    plinkoj = new Plinko(i,565,6);
    plinkoj.display();
  }

}





