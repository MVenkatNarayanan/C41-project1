const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

 var engine,world;
 var maxDrops=100;
 var drop,boys;
 var drops=[];

function preload(){
    
}

function setup(){
    createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;

  boy=new Umbrella(240,677,800,10);
    drops=new Drops(100,250,20);
}

function draw(){
  
  Engine.update(engine)
    
  for(var i=0;i<maxDrops;i++){
    drops.push(new Drops(random(0,400),random(0,400)));
  }
  boy.display();
  drops.display();

  switch(this.image){
    case 10:drops.image="thunderbolt/1.png";
      break;
      case 20:drops.image="thunderbolt/2.png";
      break;
      case 30:drops.image="thunderbolt/3.png";
      break;
      case 40:drops.image="thunderbolt/4.png";
      break;
      default:break;
  }
  
drawSprites();
}   

