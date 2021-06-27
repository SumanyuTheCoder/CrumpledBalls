
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var park;
function preload() {
park = loadImage("park.jpg")
}
function setup() {
	createCanvas(1600, 720);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,450,70)


	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	var render = Render.create({
		element:document.body,
		engine: engine,
		options: {
			width:1600,
			height:700,
		    wireframes:false
			
		}
	})
	Engine.run(engine);
	Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(park);
  paper.display();

  groundObject.display();
  dustbinObj.display();


}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});
	
	
		}
	}
