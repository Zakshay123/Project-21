var bullet;
var wall;
var speed, weight;
var thickness
var random=0
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 20);
  wall=createSprite(1200,200,thickness,height/2)
  thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,52)
  bullet.velocityX = speed;
  wall.shapeColor = (80,80,80);
  bullet.shapeColor = "white"
  0.5*weight*speed*speed/(thickness*thickness*thickness)
}

function draw() {
  background("black");  
  if (bullet.x - wall.x < wall.width/2 + bullet.width/2
    && wall.x - bullet.x < wall.width/2 + bullet.width/2
    && bullet.y - wall.y < wall.height/2 + bullet.height/2
    && wall.y - bullet.y < wall.height/2 + bullet.height/2) {
      bullet.shapeColor = "white";
}
if (weight ===32 && speed ===223&& thickness ===70){
  bullet.shapeColor = "green";
}
if (weight ===32 && speed ===223&& thickness ===40){
  bullet.shapeColor = "red";
}
if (bullet.collide(wall)){
  bullet.shapeColor ="green"
}
  drawSprites();
}