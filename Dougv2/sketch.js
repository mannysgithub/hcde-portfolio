// Doug Lego buddies start in corners and end in the middle
var xD = 50;
var yD = 400;

var xS = 924;
var yS = 400;

var xP = 924
var yP = 50


function setup() {
  createCanvas(1024, 768); // settting up canvas strike
}

function draw() {
  doug(); // function for doug
  skeeter(); // function for skeeter
  patti(); // function for patti
}

function doug() {
  // lower body
  background(133, 202, 255);
  noStroke();
  fill(189,149,114);
  rect(xD, yD + 200, 80, 120);

  // torso
  fill(142, 161, 72);
  rect(xD, yD + 80, 80, 120);

  // head
  fill(253, 212, 190);
  rect(xD, yD, 80, 80);

  // vNeck
  fill(255);
  triangle(xD + 30, yD + 80, xD + 40, yD + 100, xD + 50, yD + 80);

  xD = min(xD + 1, 300);
  yD = max(yD - 1, 150);

}

function skeeter() {
  // lower body
  fill(251, 253, 82);
  rect(xS, yS + 200, 80, 120);

  // torso
  fill(251, 136, 92);
  rect(xS, yS + 80, 80, 120);

  // head
  fill(141, 224, 180);
  rect(xS, yS, 80, 80);
  
  xS = max(xS - 1, 450);
  yS = max(yS - 1, 150);

}

function patti() {
  // lower body
  fill(20, 43, 155);
  rect(xP, yP + 200, 80, 120);

  // torso
  fill(62, 125, 220);
  rect(xP, yP + 80, 80, 120);

  // head
  fill(186, 96, 85);
  rect(xP, yP, 80, 80);

  // spots
  fill(201, 45, 152);
  ellipse(xP + 26, yP + 105, 20, 20);
  
  xP = max(xP - 1, 600);
  yP = min(yP + 1, 150);
  
 }  