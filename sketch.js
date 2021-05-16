//this is the const taken for the bodies of matter
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//this is the variables  for th project
var dustbin;
var engine, world;
var dustbin;

//this is the function for loading images and animation
function preload() {
  dust = loadImage("images/dust1.png");
}

//this is the function setup for adding the object in the game
function setup() {

  //this is the compatable canvas
  createCanvas(windowWidth, windowHeight);

  dustbin = createSprite(width / 1.5 + 250, height / 1.5 + 130, 1, 1);
  dustbin.addImage(dust);
  dustbin.scale = 0.30

  //we are creating the engine in our world
  engine = Engine.create();
  world = engine.world;

  //this are the objects
  ground = new Ground(width / 2, height, width, 20);
  pillar1 = new Pillar(width / 1.5 + 250, height / 1.5 + 230, 200, 20);
  pillar2 = new Pillar(width / 1.5 + 160, height / 2 + 250, 20, 200);
  pillar3 = new Pillar(width / 1.5 + 340, height / 2 + 250, 20, 200);
  wall1 = new Pillar(width, height / 2 , 20, height*2);
  wall2 = new Pillar(0, height / 2 , 20, height*2);
  wall3 = new Pillar(0, 0, width*2,20);
  gar = new Garbage(width/6,height/2,100,100);
}

//this is the function draw for drawing thinging in the game
function draw() {
  background("#87C9EB");

  //updating engine as per the situation
  Engine.update(engine);

  //displaying the object
  ground.display();
  pillar1.display();
  pillar2.display();
  pillar3.display();
  wall1.display();
  wall2.display();
  gar.display();

  //drawing up the sprite
  drawSprites();
}


//this is the function for pressing the key in the game
function keyPressed(){
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(gar.body,gar.body.position,{x:210,y:-250});
  
  }
}
