var monke, monkeimg, monkegroup
var jungle,jungleimg
var stone,stoneimg,stonegroup
var score
var banana,bananaimg,bananagroup
var edges;

function preload() {
  monkeimg = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  jungleimg = loadImage("jungle.jpg");
  bananaimg = loadImage("banana.png");
  stoneimg = loadImage("stone.png");
}
function setup() {
  
   jungle = createSprite (160,162,20,20);
  jungle.addImage("jungle", jungleimg);
jungle.velocityX = -4;
  jungle.x = jungle.width/2;
  
 monke = createSprite (60,320,20,20);
  monke.addAnimation("monke",monkeimg);
  monke.scale = 0.15;
  
   banana = createSprite (162,160,20,20);
  banana.addImage("bananapicture", bananaimg);
  banana.scale = 0.05;
  banana.lifetime = 300;
  
   stone = createSprite(600,328,20,20);
  stone.addImage("stone", stoneimg);
stone.scale = 0.15;
  stone.lifetime = 300;
  
  score  = 0;
 monkegroup = new Group();
  bananagroup = new Group();
  stonegroup = new Group();
}

function draw() {
background(220,400,0);
  
  text("Survival Time:"+ score,274,72)
  score  = Math.round(getFrameRate/60);
  
 edges = createEdgeSprites();
    
    if (keyDown("space")){
      monke.velocityY = -12;
    }
  monke.velocityY = monke.velocityY +0.8;
  monke.collide(edges[3]);
  banana1();
  stone1();
  
  drawSprites();
}
  
function banana1 () {
  if (frameCount %80 === 0) {
banana.y =random(120,200);
banana.lifetime = 300;
monke.depth = banana.depth+1;
bananagroup.add(banana);
}
}

function stone1() {
 if (frameCount %300 === 0) {
stone.velocityX = -6;
stonegroup.add(stone);
 }
}
