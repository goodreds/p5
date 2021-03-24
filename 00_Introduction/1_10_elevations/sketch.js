let cols, rows;
let scale = 20;
let canvasWidth = 840;
let canvasHeight = 438;
let w = 1500;
let h = 600;
let terrain = [];

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function setup() {
  createCanvas(canvasWidth, canvasHeight, WEBGL);
  frameRate(1);
  cols = floor(w / scale);
  rows = floor(h / scale);
  terrain = make2DArray(cols, rows);
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      terrain[x][y] = random(-15, 15);
    }
  }
}

function draw() {
  background(255, 80, 0);
  stroke(255);
  noFill();
  rotateX(PI / 3);
  translate(-w / 2, -h / 2);

  for (let y = 0; y < rows; y++) {
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < cols - 1 - 1; x++) {
      vertex(x * scale, y * scale, terrain[x][y]);
      vertex(x * scale, (y + 1) * scale, terrain[x][y]);
    }
    endShape();
  }
}
