const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var ground, stand1 , stand2;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12
,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22;
var b23,b24,b25,b4,b26,b27,b28,b29,b30;
var polygon;
var slingshot;
var bg = "day.png";
var gameState = "onSling";
var backgroundImg;



function preload() {
  getTime();
}


function setup()
{
  var canvas = createCanvas(1000,450);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500,height,1000,20);

  stand1 = new Ground(367,330,200,10);
  stand2 = new Ground(750,270,200,10);

  polygon = new Polygon(500,200,50,50);
   
  slingshot = new SlingShot(polygon.body,{x:60,y:100});
 

  //stand1 blocks
  //bottom layer
  b1 = new Block(295,310,20,30);
  b2 = new Block(315,310,20,30);
  b3 = new Block(335,310,20,30);
  b4 = new Block(355,310,20,30);
  b5 = new Block(375,310,20,30);
  b6 = new Block(395,310,20,30);
  b7 = new Block(415,310,20,30);
  b8 = new Block(435,310,20,30);
  //last 2 layer
  b9 = new Block(315,280,20,30);
  b10 = new Block(335,280,20,30);
  b11 = new Block(355,280,20,30);
  b12 = new Block(375,280,20,30);
  b13 = new Block(395,280,20,30);
  b14 = new Block(415,280,20,30);
  //last 3 layer
  b15 = new Block(335,250,20,30);
  b16 = new Block(355,250,20,30);
  b17 = new Block(375,250,20,30);
  b18 = new Block(395,250,20,30);
  //2 layer
  b19 = new Block(358,220,20,30);
  b20 = new Block(378,220,20,30);
  //top layer
  b21 = new Block(368,190,20,30);
  
  //stand 2 blocks
  //bottom layer
  b22 = new Block(688,250,30,40);
  b23 = new Block(718,250,30,40);
  b24 = new Block(748,250,30,40);
  b25 = new Block(778,250,30,40);
  b26 = new Block(808,250,30,40);
  //mid layer
  b27 = new Block(718,210,30,40);
  b28 = new Block(748,210,30,40);
  b29 = new Block(778,210,30,40);
  //top layer
  b30 = new Block(748,170,30,40);


}


function draw()
{
  
  if(backgroundImg)
    {
      background(backgroundImg);

    }

  Engine.update(engine);

  ground.display(); 
  stand1.display(); 
  stand2.display(); 

  fill(135,205,236);
  b1.display();
  b2.display(); 
  b3.display(); 
  b4.display();  
  b5.display(); 
  b6.display(); 
  b7.display(); 
  b8.display();
  b22.display();
  b23.display(); 
  b24.display(); 
  b25.display();  
  b26.display();
 
  
  fill(255,190,196);
  b9.display(); 
  b10.display(); 
  b11.display(); 
  b12.display(); 
  b13.display(); 
  b14.display();
  b27.display(); 
  b28.display();  
  b29.display();  
  
  fill(0,228,208);
  b15.display();  
  b16.display();
  b17.display(); 
  b18.display(); 
  
  fill("grey");
  b19.display(); 
  b20.display(); 
  
  fill("gold");
  b21.display();
  b30.display(); 

  
  
 
  polygon.display();

  slingshot.display();
}

function mouseDragged()
{
  if (gameState!=="launched") {
    Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY}); 
  }
  
}

function mouseReleased()
{
    slingshot.fly();
    gameState = "launched";
}

function keyPressed()
{
  if(keyCode === 32)
  {
   //slingshot.attach(polygon.body);  
  }  
}


async function getTime()
{
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON=await response.json();
    var datetime=responseJSON.datetime;
    var hour=datetime.slice(11,13);
    console.log(hour);

    if (hour >= 06 && hour <= 19)
    {
       bg = "day.png" 
    }
    else
    {
      bg = "night.jpg"  
    }
    backgroundImg=loadImage(bg);
}
