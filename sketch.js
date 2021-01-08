
var wall,bullet;
var speed,weight;
var thickness;

function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);
  speed = random(55,90);
  weight = random(400,1500);
 
  bullet = createSprite(50,200,100,10);  
  bullet.shapeColor = "white";
  bullet.velocityX = 10;

  wall = createSprite(1200,200,thickness,height / 2);
  wall.shapeColor = "80,80,80";
 
}

function draw() {
  background("black");
  
 if(hasCollided(bullet,wall)){

  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

 if(damage < 10){
   wall.shapeColor = "green";
  }

 if(damage > 10){
   wall.shapeColor = "red";
  }
 }

  drawSprites();
}

function hasCollided(bullet,wall){

  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }

   return false;
 }