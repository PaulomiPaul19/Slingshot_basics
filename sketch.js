const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stone, stoneImg, slingshot;

function preload(){
    stoneImg= loadImage("stone.png");
}

function setup(){
    var canvas = createCanvas(700,700);
    engine = Engine.create();
    world = engine.world;

    stone = Bodies.circle(50, 200, 20);
    World.add(world, stone);

    slingshot = new Slingshot(this .stone,{x:100, y:200});
}

function draw(){
    background("skyblue");
    Engine.update(engine);
    imageMode(CENTER)
    image(stoneImg ,stone.position.x,stone.position.y,90,90);
  
    slingshot.display();
    
  }
  function mouseDragged(){
    Matter.Body.setPosition(this.stone,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    slingshot.fly();
  }
  function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.stone);
    }
  }
