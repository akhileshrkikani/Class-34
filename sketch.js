const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;





function setup(){
    var canvas = createCanvas(1200,1000);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    box1=new Box(730,100,70,70)
    box2=new Box(730,100,70,70)
    box3=new Box(730,100,70,70)
    box4=new Box(730,100,70,70)
    box5=new Box(730,100,70,70)
    box6=new Box(730,100,70,70)
   
    box11=new Box(800,100,70,70)
    box12=new Box(800,100,70,70)
    box13=new Box(800,100,70,70)
    box14=new Box(800,100,70,70)
    box15=new Box(800,100,70,70)
    box16=new Box(800,100,70,70)
    box17=new Box(870,100,70,70)
    box18=new Box(870,100,70,70)
    box19=new Box(870,100,70,70)
    box20=new Box(870,100,70,70)
    box21=new Box(870,100,70,70)
    box22=new Box(870,100,70,70)

    ball1=new Ball(300,200,80)
   
    rope=new Slingshot(ball1.body,{x:200,y:400})
 

    

    
    

}

function draw(){
    background("red")

    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    box17.display()
    box18.display()
    box19.display()
    box20.display()
    box21.display()
    box22.display()

    ball1.display()
    rope.display()
   
    
    
        
    Engine.update(engine);
    //strokeWeight(4);
      
}

function mouseDragged(){
    
        Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
   rope.fly();
    
}



