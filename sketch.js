var ISSImage,ISS,spacebg,spaceCraft,sc1,sc2,sc3,sc4
var hasDocked = false

function preload(){
ISSImage = loadImage("iss.png")
spacebg = loadImage("spacebg.jpg")
sc1 = loadImage("spacecraft1.png")
sc2 = loadImage("spacecraft2.png")
sc3 = loadImage("spacecraft3.png")
sc4 = loadImage("spacecraft4.png")
}

function setup() {
  createCanvas(600,350);
  ISS = createSprite(330, 130, 50, 50);
  ISS.addImage(ISSImage)
  ISS.scale = 0.25

  spaceCraft = createSprite(285, 240, 50, 50);
  spaceCraft.addImage(sc1)
  spaceCraft.scale = 0.15
}

function draw() {
  background(spacebg); 
  if(!hasDocked){
   spaceCraft.x = spaceCraft.x + random(-1,1)
    if(keyDown(LEFT_ARROW)){
      spaceCraft.addImage(sc4)
      spaceCraft.x = spaceCraft.x - 1
    }
    if(keyDown(RIGHT_ARROW)){
      spaceCraft.addImage(sc3)
      spaceCraft.x = spaceCraft.x + 1
    }
    if(keyDown(UP_ARROW)){
      spaceCraft.y = spaceCraft.y - 2
    }
    if(keyDown(DOWN_ARROW)){
      spaceCraft.addImage(sc2)
    }
 } 
  if(spaceCraft.y<=(ISS.y+70) && spaceCraft.x<=(ISS.x-10)){
    hasDocked = true
    textSize(30)
    fill("white")
    text("Docking Succesful",200,300)
  }
  
  drawSprites();
}