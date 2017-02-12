var pianoA;
var pianoB;
var pianoC;
var pianoD;
var pianoE;
var pianoF;

function preload() {
  pianoA = loadSound("sounds/pianoA.wav");
  pianoB = loadSound("sounds/pianoB.wav");
  pianoC = loadSound("sounds/pianoC.wav");
  pianoD = loadSound("sounds/pianoD.wav");
  pianoE = loadSound("sounds/pianoE.wav");
  pianoF = loadSound("sounds/pianoF.wav");

}

function setup() {
  createCanvas(500, 500);
  background(200);
}

function draw() {
  background(200);
  
  if (key.toUpperCase() == "D") {
    stroke(255);
    noFill();
    ellipse(100, 100, 325, 325);
  
  } if(key.toUpperCase() == "F") {
    stroke(0);
    noFill();
    ellipse(200, 200, 250, 250);
  
  } if(key.toUpperCase() == "G") {
    stroke(255);
    noFill();
    ellipse(275, 50, 100, 100);
  
  } if(key.toUpperCase() == "H") {
    stroke(0);
    noFill();
    ellipse(50, 200, 450, 450);
  
  } if(key.toUpperCase() == "I") {
    stroke(0);
    noFill();
    ellipse(375, 400, 200, 200);
  
  } if(key.toUpperCase() == "J") {
    stroke(255);
    noFill();
    ellipse(100, 400, 150, 150);
  
  } if(key.toUpperCase() == "K") {
    stroke(0);
    noFill();
    ellipse(400, 400, 400, 400);
  }
}

function keyTyped() {

   if (key.toUpperCase() == "D") {
    pianoA.play();
  } else if (key.toUpperCase() == "F") { 
    pianoB.play();
  } else if (key.toUpperCase() == "G") { 
    pianoC.play();
  }  if (key.toUpperCase() == "H") {
    pianoD.play();
  } else if (key.toUpperCase() == "J") { 
    pianoE.play();
  } else if (key.toUpperCase() == "K") { 
    pianoF.play();
  }
}
