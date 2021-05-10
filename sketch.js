const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ball;
var box;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }

   object= Bodies.rectangle(200,390,400,20,object_options);
    World.add(world,object);
    var ball_option = {
        restitution: 1
    }
    ball = Bodies.circle(200, 150, 20, ball_option);
    World.add(world, ball);
   
    var box_option = {
        restitution: 1.5
    }

    box = Bodies.rectangle(250, 200, 25, 25, box_option);
    World.add(world, box);




    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,400,20);
    rect(box.position.x, box.position.y, 25, 25);
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}
