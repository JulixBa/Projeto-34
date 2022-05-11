const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ball;
var ball_options;
var solo;
var predio;
var corda;
var show;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);
	  engine = Engine.create();
  	world = engine.world;

    var ball_options={
		  isStatic:false,
		  restitution:0.3,
		  friction:0,
		  density:1.2
	  }
	  ball = Bodies.circle(120, 200, 20, ball_options);
	  World.add(world, ball);

    
    


   
  

	rectMode(CENTER);
	ellipseMode(RADIUS);
  
  predio = new Pre(600,600, 1200, 70);
  solo = new Solo(250,height-10,width,20);
  corda = new Corda((4,{x:230,y:330}));

  button = createImg('botão.png');
  button.position(200,320);
  button.size(50,50);

  button.mouseClicked(Soltar);
}


function draw() {
  rectMode(CENTER);
  background(51);
  image("cidade.jpg",0,0,width,height);
  Engine.update(engine);
  

  ellipse(ball.position.x,ball.position.y,20);

  solo.Show();
  predio.Show();
  corda.Show();
  ball.Show();

 Engine.update(engine);

  drawSprites();
}

function Key() {
	if(KeyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0, y:0}, {x:0.05, y:0});
	}
}
function Soltar()
{
  corda.break();

}