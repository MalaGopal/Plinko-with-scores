var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var count = 0;
var gameState = "start"
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

   
    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

     

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  fill("white");
  textSize(35);

  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
  
 
  for (var j = 0; j < particles.length; j++) {
    if(particles[j] !== null){
    particles[j].display();
    }
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
    
   console.log(particles.length);
   for(j=0;j<particles.length;j++){
     if(particles[j].body.position.y > 760){
        if(particles[j].body.position.x < 300){
          score = score +500
         particles = [];

        }
        else if(particles[j].body.position.x <600 && particles[j].body.position.x > 301){
          score = score + 300;
          particles = [];
        }
        else if(particles[j].body.position.x < 900 && particles[j].body.position.x >601){
          score = score +100;
          particles = [];
        }
     }
   }
   
   Engine.update(engine);

}

function mousePressed(){
 
  if(gameState !== "end"){
    count++;
    particles.push(new Particle(mouseX,10,10,10));
  }

    
  for(j= 0;j < particles.length;j++){
    if(particles[j] != null){
    particles[j].display();
  }
  }
  
}