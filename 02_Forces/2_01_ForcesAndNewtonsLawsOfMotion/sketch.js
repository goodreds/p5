let canvasWidth = 640;
let canvasHeight = 640;
let movers = [];
let mover;
let mousePressed;
let gravity;
let radius;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  // mover = new Mover();
  for (let i = 0; i < 20; i++) {
    movers[i] = new Mover(); // create an array of mover objects
  }
  createP("Click mouse to apply wind force");
}

function draw() {
  background('#333');
  gravity = createVector(0,1);

  // mover.update();
  // mover.display();
  for (let i = 0; i < movers.length; i++) {
    movers[i].applyForce(gravity);
    movers[i].update();
    movers[i].display();
    movers[i].edges();
    if (mouseIsPressed) {
      let wind = createVector(0.1, 0);
      movers[i].applyForce(wind);
    }
  }
}
