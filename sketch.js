var canvas
var boy
var obstacle

function setup(){
  canvas=createCanvas(500,500)
boy=createSprite(250,250,50,50)

}
function draw(){
  background("white")
  drawSprites();
  movement();
  camera.position.x=canvas/2
camera.position.y=boy.y
  var rand=Math.round(random(100,400))
  if(World.frameCount%10===0){
    obstacle=createSprite(rand,canvas/10,40,40)
  }

}
function movement(){
  if(keyDown(UP_ARROW)){
    boy.y=boy.y-100
  }
  if(keyDown(DOWN_ARROW)){
    boy.y=boy.y+100
  }
  if(keyWentDown(LEFT_ARROW)){
    boy.x=boy.x-100
  }
  if(keyWentDown(RIGHT_ARROW)){
    boy.x=boy.x+100
  }
  
}

  