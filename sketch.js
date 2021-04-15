//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var MoonImg;

function preload() {
    MoonImg = loadImage("sprites/Moon.jpg")
}

function setup(){
    var canvas = createCanvas(1200,400);
    //engine = Engine.create();
    //world = engine.world;


//rope = new rope(700, 210, 5 , 240);
    
   // slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function display(){
    
    var moon = createSprite(700, 80 , 150, 20);
moon.addImage(MoonImg);
        //rope.display();
        drawSprites();
    
    //Engine.update(engine);
       
}

