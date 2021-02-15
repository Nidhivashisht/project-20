var mouse,mouseImage;
var cat,catImage;
var garden,gardenImage;


function preload() {
     mouseImage=loadAnimation("mouse1.png","mouse2.png","mouse3.png","mouse4.png");
     catImage=loadAnimation("cat1.png","cat2.png","cat3.png","cat4.png");
     gardenImage=loadImage("garden.png");

    //load the images here
}

function setup(){
    createCanvas(600,800);

    cat=createSprite(400,200);

    mouse=createSprite(200,500);

    garden=createSprite(300,400);
    //create tom and jerry sprites here

}

function draw() {
    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
   if(keyDown("left")){
        cat.velocityX=-5;
        cat.addAnimation("catRunning",catImage2);
        cat.changeAnimation("catRunning");
    }
  //For moving and changing animation write code here
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.addAnimation("catlastImage",catImage3);
    cat.setAnimation("catlastImage");
    cat.velocityX=0;
}
