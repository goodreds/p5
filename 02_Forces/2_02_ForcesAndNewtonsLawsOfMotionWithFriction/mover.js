class Mover {
  constructor(x, y, m) {
    this.x = x;
    this.y = y;
    this.mass = m;
    // this.mass = this.m;
    console.log('Mass = ' + this.mass);
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0.1, 0.5);
    this.radius = sqrt(this.mass * 25);
    // this.topspeed = 5;
  }

  friction() {
    // Find out how far the ball is from the bottom
    let diff = height - (this.position.y + this.radius);
    if (diff < 1) {
      // Simple way to reduce velocity over time/with each 'bounce' - limitations include that it doesn't take any notice of the mover's mass
      // this.velocity.mult(0.95);

      // Direction of Friction
      let friction = this.velocity.copy();
      friction.normalize();
      friction.mult(-1);

      let normal = this.mass;
      friction.setMag(mu * normal);

      this.applyForce(friction);
    }
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  edges() {
    if (this.position.y >= height - this.radius) {
      this.position.y = height - this.radius;
      this.velocity.y *= -1;
    } else if (this.position.y <= this.radius) {
      this.position.y = this.radius;
    }
    if (this.position.x >= width - this.radius) {
      this.position.x = width - this.radius;
      this.velocity.x *= -1;
    } else if (this.position.x <= this.radius) {
      this.position.x = this.radius;
      this.velocity.x *= -1;
    }
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  display() {
    fill('#222');
    stroke('#999');
    strokeWeight(2);
    ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
  }

  // checkEdges() {
  //   if (this.position.x > width) {
  //     this.position.x = 0;
  //   } else if (this.position.x > 0) {
  //     this.position.x = width;
  //   }

  //   if (this.position.y >= height) {
  //     this.position.y = 0;
  //   } else if (this.position.y < 0) {
  //     this.position.y = height;
  //   }
  // }
}

