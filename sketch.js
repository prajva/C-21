var fixedRect, movingRect;
var rect1,rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1=createSprite(500,50,50,40);
  rect2=createSprite(1000,50,40,80);
  rect1.velocityX=+2;
  rect2.velocityX=-2;


  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0); 
  BounceOff(fixedRect,movingRect); 
  BounceOff(rect1,rect2);
  
  drawSprites();
}
