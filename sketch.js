var car,wall;
var speed,weigth;
var deformation;





function setup() {
  createCanvas(1600,400);
 
  car = createSprite(50,200,50,50);
  car.velocityX = 10;
  wall=createSprite(1500,200,60,height/2);
  speed=random(0,180);
  weight=random(1000,1500);

  

}

function draw() {
  background(255,255,255);  
  if(wall.x - car.x < car.width/2 + wall.width/2){

  car.velocityX = 0;
  var deformation =  ((0.5 * weigth * speed * speed)/22500);

  
 
  if(deformation > 180){
    car.shapeColor = "red";
  }
    
  if(deformation < 180 && deformation > 100) {
    car.shapeColor = "yellow";
  }
  
  
  if(deformation < 100 ) {
  car.shapeColor = "black";
  }
}
  
  drawSprites();
}