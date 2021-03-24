let canvasWidth = 840;
let canvasHeight = 438;
let mover;
let keyValue;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  mover = new Mover();
}

function draw() {
  background('#ff6600');
  // mover.keyPressed();
  mover.update();
  mover.checkEdges();
  mover.display();
}

class Mover {

  constructor() {
    // A Mover object has two pieces of data: position and velocity
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(-0.001, 0.01);
    this.topspeed = 3;
  }

  // The Mover needs to update
  update() {
    this.velocity.add(this.acceleration); // new vector for acceleration
    this.velocity.limit(this.topspeed); // Constrains the magnitude of a vector
    this.position.add(this.velocity); //  The Mover moves
  }

  // keyPressed() {
  //   if (keyValue === 'UP_ARROW') {
  //     print('Up arrow pressed');
  //     this.acceleration = createVector(0.001, 0); // new vector for acceleration
  //   }
  //   else if (keyValue === 'DOWN_ARROW') {
  //     this.acceleration = createVector(-0.005, 0); // new vector for acceleration
  //   }
  // }

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
