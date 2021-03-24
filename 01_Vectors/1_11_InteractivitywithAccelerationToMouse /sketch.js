let canvasWidth = 640;
let canvasHeight = 640;
let movers = [];
let mover;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  for (let i = 0; i < 20; i++) {
    movers[i] = new Mover; // create an array of mover objects

  }

}

function draw() {
  background('#ff6600');
  for (let i = 0; i < movers.length; i++) {
    movers[i].update();
    movers[i].display();
  }
}
