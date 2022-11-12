var turtle, rabbit;
var turtleImg, rabbitImg;
var ground, groundImg;
var rocks, rocksImg;
var berries, berriesImg;
var bush, bush1,bush2,bush4, bushImg;


function preload(){
    turtleImg = loadImage("turtle.png");
    rabbitImg = loadImage("rabbit.png");    
    groundImg = loadImage("ground.jpeg");
    rocksImg = loadImage("rocks.png");
    berriesImg = loadImage("berries.png")
    bushImg = loadImage("bush.png");
}

function setup(){
    createCanvas(1000,1000);

    ground = createSprite(500,450,100,10)
    ground.addImage("ground",groundImg);
    ground.scale = 4;
    ground.x = ground.width/2;
    ground.velocityX = -2;

    turtle = createSprite(200,300);
    turtle.addImage(turtleImg);
    turtle.scale = 0.2;

    rabbit = createSprite(200,200);
    rabbit.addImage(rabbitImg);
    rabbit.scale = 0.3;

    rocks = createSprite(500,450);
    rocks.addImage(rocksImg);
    rocks.scale = 0.4;

    berries = createSprite(500,200);
    berries.addImage(berriesImg)
    berries.scale = 0.4;

    bush = createSprite(300,30);
    bush.addImage(bushImg)
    bush.scale = 0.5;

    bush1 = createSprite(700,30);
    bush1.addImage(bushImg)
    bush1.scale = 0.5;

    bush2 = createSprite(300,600);
    bush2.addImage(bushImg)
    bush2.scale = 0.5;

    bush3 = createSprite(700,600);
    bush3.addImage(bushImg)
    bush3.scale = 0.5;
    
   
}

function draw(){
    
    if(ground.x < 0){
        ground.x = ground.width/2;
    }
   

    drawSprites();
}



