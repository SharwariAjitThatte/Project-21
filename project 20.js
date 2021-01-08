
var wall,car;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);
 
  car = createSprite(50,200,50,50);  
  wall = createSprite(1500,200,30,height / 2);
  car.shapeColor = "white";

  car.velocityX = 10;
}

function draw() {
  background("black");
  
 if(wall.x - car.x < (car.width + wall.width) / 2){

    car.velocityX = 0;
    var  deformation = 0.5 *weight*speed*speed/25509
    if(deformation < 100){
      car.shapeColor = "green";
    }

    if(deformation > 100||deformation < 180){
      car.shapeColor = "yellow";
    }

    if(deformation > 180){
      car.shapeColor = "red";
    }
   }else{
    
     car.shapeColor = "white";

 }

  drawSprites();
}