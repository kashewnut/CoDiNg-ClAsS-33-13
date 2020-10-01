var fixed4sidedobject;
var moving4sidedobject;

function setup() {
  createCanvas(800,400);
 fixed4sidedobject=createSprite(400, 200, 80, 50);
 fixed4sidedobject.shapeColor="lightblue";
 moving4sidedobject=createSprite(600, 200, 80, 50);
 moving4sidedobject.shapeColor="red";  
}

function draw() {
  background("black");
  moving4sidedobject.x=World.mouseX;
  moving4sidedobject.y=World.mouseY;
  if(fixed4sidedobject.x-moving4sidedobject.x < fixed4sidedobject.width/2 + moving4sidedobject.width/2
  && moving4sidedobject.x-fixed4sidedobject.x < moving4sidedobject.width/2 + fixed4sidedobject.width/2
  && fixed4sidedobject.y-moving4sidedobject.y < fixed4sidedobject.height/2 + moving4sidedobject.height/2
  && moving4sidedobject.y-fixed4sidedobject.y < moving4sidedobject.height/2 + fixed4sidedobject.height/2){

  
    fixed4sidedobject.shapeColor="green";
    moving4sidedobject.shapeColor="green";
  }
else{
  fixed4sidedobject.shapeColor="lightblue";
  moving4sidedobject.shapeColor="red";
}
  drawSprites();
}