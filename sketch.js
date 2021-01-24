//Create variables here
/*const World= Matter.World;
const Engine= Matter.Engine;
const Bodies=Matter.Bodies;
*/


var dog,happyDog,database,foodS,foodStock,dogImg,happyDogImg;
function preload()
{
  //load images here
  dogImg=loadImage("Dog.png");
  happyDogImg=loadImage("happydog.png")
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
//engine=Engine.create();
//world=engine.world;

  
dog=createSprite(250,250,50,50);
dog.scale=0.25;
dog.addImage(dogImg);

foodStock=database.ref('Food');
foodStock.on("value",readStock);


}


function draw() {  
background(46,139,87);
//Engine.update(engine)

if (keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDogImg)
}

textSize(19)
stroke(0)
strokeWeight(5)
text("Press UP ARROW to feed the dog milk",100,50)


  drawSprites();
  //add styles here

}



function readStock(data){
foodS=data.val();
}

function writeStock(x){

if (x<=0){
x=0;
}
else{
  x=x-1;
}

database.ref('/').update({
  Food:x
})
}







