let dimensions;
let steps;
let mousePos;

class Walker {
  constructor() {
    dimensions = createVector((width/2), (height/2));
    this.x = width / 2;
    this.y = height / 2;
  }
  show () {
    stroke(0);
    point(this.x, this.y);
  }
  step() {
    steps = createVector( (random(0,1)) , (random(0,1)) );
    let xstep = random(0,1);
    let ystep = random(0,1);

    // Create a random walker with dynamic probabilities. For example, can you give it a 50% chance of moving in the direction of the mouse?
    mousePos = createVector(mouseX, mouseY);
    let xmouse = mouseX;
    let ymouse = mouseY;

    // Conditional logic for movement down and towards the right
    if (steps.x <= 0.5) {
      if (floor(this.x) <= mousePos.x) {
        this.x += steps.x;
      } else {
        this.x -= steps.x;
      }
    }
    if (steps.y <= 0.5) {
      if (floor(this.y) <= mousePos.y) {
        this.y += steps.y;
      } else {
        this.y -= steps.y;
      }
    }

  }
}

// A walker object
let walker;

function setup() {
  // put setup code here
  createCanvas(945,438);
  walker = new Walker;
  background(255,80,0);
  }

function draw() {
  // put drawing code here
  walker.step();
  walker.show();
  }
