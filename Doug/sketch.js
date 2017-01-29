function setup() {
  createCanvas(1024, 768);
  noStroke();
}

function draw() {
  legsdoug();
  dougtorso();
  doughead();
  vNeck();
  skeeterlegs();
  skeetertorso();
  skeeterhead();
  pattilegs();
  pattitorso();
  pattihead();
  spots();
}

function legsdoug() {
  // lower body
  noStroke();
  fill(189,149,114);
  rect(50, 600, 80, 120);
}

function dougtorso() {
  // torso
  fill(142, 161, 72);
  rect(50, 480, 80, 120);
}

function doughead() {
  // head
  fill(253, 212, 190);
  rect(50, 400, 80, 80);
}

function vNeck() {
  // vNeck
  fill(255);
  triangle(80, 480, 90, 500, 100, 480);
}

function skeeterlegs() {
  // lower body
  noStroke();
  fill(251, 253, 82);
  rect(924, 600, 80, 120);
}

function skeetertorso() {
  // torso
  fill(251, 136, 92);
  rect(924, 480, 80, 120);
}

function skeeterhead() {
  // head
  fill(141, 224, 180);
  rect(924, 400, 80, 80);
}

function pattilegs() {
  // lower body
  noStroke();
  fill(20, 43, 155);
  rect(924, 250, 80, 120);
}

function pattitorso() {
  // torso
  fill(62, 125, 220);
  rect(924, 130, 80, 120);
}

function pattihead() {
  // head
  fill(186, 96, 85);
  rect(924, 50, 80, 80);
}

function spots(y) {
  // spots
  fill(201, 45, 152);
  ellipse(950, 155, 20, 20);
}  
  