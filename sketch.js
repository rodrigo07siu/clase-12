
var trex ,trex_running;
var suelo;
var suelofijo;
var sueloinvisible;
function preload(){
trex_running =loadAnimation("trex1.png","trex3.png","trex4.png")  
suelofijo =loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
trex = createSprite(50,160,20,50);
trex.addAnimation("running",trex_running);
trex.scale=0.5;
 suelo =createSprite(40,180,200,20);
 suelo.addImage(suelofijo);
 suelo.velocityX =-5;
 sueloinvisible =createSprite(200,190,400,10);
 sueloinvisible.visible=false;
}

function draw(){
  background("white")
  if(suelo.x <0){
    suelo.x=suelo.width/2
  }
  drawSprites();
if (keyDown("space")&& trex.y >=150){
  trex.velocityY = -10;
}
trex.velocityY =trex.velocityY +0.5;
trex.collide(sueloinvisible);
}

