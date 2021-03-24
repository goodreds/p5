class Mover {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector();
    this.acceleration = createVector();
    this.topspeed = 5;
  }
  update() {
    let mouse = createVector(mouseX, mouseY);
    this.acceleration = p5.Vector.sub(mouse, this.position); // Using a static reference to sub() to give us a NEW p5.Vector pointing from one point to another
    // To set the magnitude, first NORMALIZE the vector to its unit vector (of length 1) that can easily scale to any value
    let anything = 0.23;
    // This is the manual way but p5.Vector already includes a method to do this as its such a common operation
    // acceleration.normalize();
    // acceleration.mult(anything);
    this.acceleration.setMag(anything);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
  }

  display() {
    noFill();
    stroke(255, 125, 50, 150);
    strokeWeight(20);
    ellipse(this.position.x, this.position.y, 16, 16);
  }
}
