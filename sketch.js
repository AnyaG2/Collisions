var fr
var mr





function setup() {
  createCanvas(800,400);
  fr=createSprite(600,200,90,30)
  fr.shapeColor="purple"
  mr=createSprite(800,300,50,100)
  mr.shapeColor="purple"
}

function draw() {
  background("black");  
  mr.x= World.mouseX;
  mr.y= World.mouseY;

  if(mr.x-fr.x=fr.width/2+mr.width/2
    && fr.x-mr.x=mr.width/2+fr.width/2
    && mr.y-fr.y=fr.height/2+mr.height/2
    && fr.y-mr.y=mr.height/2+fr.height/2) {
    mr.shapeColor="yellow";
    fr.shapeColor="yellow";
  }
else{
  mr.shapeColor="purple";
  fr.shapeColor="purple";
}

  drawSprites();
}