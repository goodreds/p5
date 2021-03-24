let cols, rows;
let scale = 20;
let canvasWidth = 840;
let canvasHeight = 438;
let terrainWidth = 1300;
let terrainHeight = 600;
let terrain = [];
let flying = 0;

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function setup() {
  createCanvas(canvasWidth, canvasHeight, WEBGL);
  frameRate(15);
  cols = floor(terrainWidth / scale);
  rows = floor(terrainHeight / scale);
  terrain = make2DArray(cols, rows);
}

function draw() {
  flying -= 0.01;

  let yoff = flying;
  for (let y = 0; y < rows; y++) {
    let xoff = 0.0;
    for (let x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -150, 50);
      xoff += 0.1;
    }
    yoff += 0.1;
  }

  background('#000B3B');
  stroke('#7690FF');
  // noFill();
  rotateX(PI / 3);
  rotateY(PI/0.65);
  translate(-terrainWidth / 2, (-terrainHeight / 2) + 150);

  for (let y = 0; y < rows; y++) {
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < cols - 1 - 1; x++) {
      vertex(x * scale, y * scale, terrain[x][y]);
      vertex(x * scale, (y + 1) * scale, terrain[x][y]);
      fill(floor(random(0,0)), floor(random(40,60)), floor(random(180,255)), floor(random(220,225)));
    }
    endShape();
  }


}
