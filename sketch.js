const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function setup(){
	var canvas = createCanvas(1200,400);

	engine = Engine.create();
	world = engine.world;

	ball = new Ball(150,320,70);

	ground = new Ground(600,390,1200,20);

	box1 = new Box(800,310,120,150);

	 sling = new Slingshot(ball.body,{x:200,y:100});
}

function draw(){
	background("skyblue");
	Engine.update(engine);

	

	ground.display();

	box1.display();

	ball.display();
	
	sling.display();
}

function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	sling.fly();
}