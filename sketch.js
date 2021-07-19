const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render
const Constraint = Matter.Constraint;

function preload() {

}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  support = new Stand(425, 300, 250, 20);
  bob1 = new Bob(340, 470)
  bob2 = new Bob(380, 470)
  bob3 = new Bob(420, 470)
  bob4 = new Bob(460, 470)
  bob5 = new Bob(500, 470);

  string1 = new String(bob1.body, support.body, -80, 0);
  string2 = new String(bob2.body, support.body, -40, 0);
  string3 = new String(bob3.body, support.body, 0, 0);
  string4 = new String(bob4.body, support.body, 40, 0);
  string5 = new String(bob5.body, support.body, 80, 0);
  Engine.run(engine);

}


function draw() {




  rectMo = (CENTER);
  background(0);


  support.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  string1.display()
  string2.display()
  string3.display()
  string4.display()
  string5.display()

}



function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(bob1.body, bob1.body.position, { x: -50, y: -45 })
  }
}
