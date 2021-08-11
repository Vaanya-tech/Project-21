const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		restitution : 0.3,
		friction : 0,
		density : 1.2
	}

	Engine.run(engine);

	ball = Bodies.circle(100,500,20,ball_options);
	World.add(world,ball);

	ground = new Ground(600,680,1200,10);

	a = new Ground(800,625,10,100);
	b = new Ground(1000,625,10,100);
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:75, y:-85});
	}
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20,20);

  ground.show();
  a.show();
  b.show();
 
}