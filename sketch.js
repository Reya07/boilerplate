const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;




function setup() {
  createCanvas(800,400);
  
engine = Engine.create();
world = engine.world;

var options = {
  isStatic : true

}

var option = {
  restitution : 1.0
}

ground = Bodies.rectangle(200, 390, 800, 20, options);
World.add(world, ground)

ball = Bodies.circle(400, 100, 20, option);
World.add(world, ball);

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  
  rect(ground.position.x, ground.position.y, 800, 20);
  ellipse(ball.position.x, ball.position.y, 20, 20);
}