let canvasWidth = 840;
let canvasHeight = 438;
let mover;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  mover = new Mover();
}

function draw() {
  background('#ff6600');
  mover.update();
  mover.checkEdges();
  mover.display();
}

class Mover {

  constructor() {
    // A Mover object has two pieces of data: position and velocity
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(random(-2, 2), random(-2, 2));
  }


  // The Mover needs ot update
  update() {
    this.position.add(this.velocity); //  The Mover moves
  }

  display() {
    stroke(0);
    fill('#333');
    ellipse(this.position.x, this.position.y, 16, 16); // The Mover is displayed
  }

  checkEdges() {
    if (this.position.x > width) {
      this.position.x = 0; // When it reaches on edge, set position to the other edge
    } else if (this.position.x < 0) {
      this.position.x = width;
    }

    if (this.position.y > height) {
      this.position.y = 0; // When it reaches on edge, set position to the other edge
    } else if (this.position.y < 0) {
      this.position.y = height;
    }
  }
}
