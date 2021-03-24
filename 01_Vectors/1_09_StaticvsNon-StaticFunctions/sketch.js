let canvasWidth = 640;
let canvasHeight = 640;
let xpos, ypos, zpos;
let upos, vpos, w;
function setup() {
  createCanvas(canvasWidth, canvasHeight);

  let xpos = 1;
  print("xpos = " + xpos);
  let ypos = 5;
  print("ypos = " + ypos);

  print("// Value of xpos and ypos does NOT change");
  print("let zpos = xpos + ypos;");
  let zpos = xpos + ypos;
  print("zpos = " + zpos + " | xpos = " + xpos + ", ypos = " + ypos);

  let vpos = createVector(1, 1);
  print("vpos = " + vpos);
  let upos = createVector(4, 5);
  print("upos = " + upos);
  print("// Value of vectors DOES change the previously stored value in the vector vpos");
  print("let wpos = vpos.add(upos);");
  let wpos = vpos.add(upos);
  print("wpos = " + wpos);
  print("vpos = " + vpos);

  print("// In order to add two vector objects together and return the result as a new vector, we must use the static add() function.");
  print("// p5.Vector's static functions generic mathematical operations to be performed on vectors without having to adjust the value of one of the input vectors.");
  print("e.g. p5.Vector.add(vpos, upos) :: STATIC  - called from class name");
  print("e.g. vpos.add(upos); :: NOT STATIC - called from object instance");

  print("wpos = " + wpos);
  print("vpos = " + vpos);
  print("upos = " + upos);
  print("// wpos = p5.Vector.add(vpos, upos);")
  wpos = p5.Vector.add(vpos, upos);
  print("wpos = " + wpos);

  print("// Exercises");
  print("// The vector vpos equals (1,5)");
  vpos = createVector(1, 5);
  print("vpos = " + vpos);

  print("The vector upos equals vpos multiplied by 2");
  print("upos = p5.Vector.mult(vpos,2);");
  upos = p5.Vector.mult(vpos, 2);
  print("upos = " + upos);
  print("vpos = " + vpos);

  print("The vector wpos equals vpos minus upos");
  print("vpos = " + vpos);
  print("upos = " + upos);
  print("wpos = p5.Vector.sub(vpos,upos);");
  wpos = p5.Vector.sub(vpos, upos);
  print("wpos = " + wpos);

  print("Divide the vector wpos by 3");
  print("Starting wpos = " + wpos);
  wpos = wpos.div(3);
  print("wpos = wpos.div(3);");
  print("wpos = " + wpos);
}

function draw() {
  background('#ff6600');
}
