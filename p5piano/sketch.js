/* Manuel Zetino
  last edited 2/11/2017
  p5.js piano with circles that appear on screen when key pressed
*/

var pianoA; // note mapped with key
var pianoB; // note mapped with key
var pianoC; // note mapped with key
var pianoD; // note mapped with key
var pianoE; // note mapped with key
var pianoF; // note mapped with key

function preload() {
  pianoA = loadSound("sounds/pianoA.wav"); // load note
  pianoB = loadSound("sounds/pianoB.wav"); // load note
  pianoC = loadSound("sounds/pianoC.wav"); // load note
  pianoD = loadSound("sounds/pianoD.wav"); // load note
  pianoE = loadSound("sounds/pianoE.wav"); // load note
  pianoF = loadSound("sounds/pianoF.wav"); // load note

}

function setup() {
  createCanvas(500, 500); // canvas size set to 500x500 
  background(200); // grey background
}

function draw() {
  background(200); // reload grey backgroudn
  
  // creates a circle when " D letter" pressed
  if (key.toUpperCase() == "D") {  
    stroke(255);
    noFill();
    ellipse(100, 100, 325, 325);
  // creates a circle when "F" pressed
  } if(key.toUpperCase() == "F") {
    stroke(0);
    noFill();
    ellipse(200, 200, 250, 250);
  // creates a circle when "G" pressed
  } if(key.toUpperCase() == "G") {
    stroke(255);
    noFill();
    ellipse(275, 50, 100, 100);
  // creates a cicle when "H" pressed
  } if(key.toUpperCase() == "H") {
    stroke(0);
    noFill();
    ellipse(50, 200, 450, 450);
  // creates a circle when "I" pressed
  } if(key.toUpperCase() == "I") {
    stroke(0);
    noFill();
    ellipse(375, 400, 200, 200);
  // creates a circle when "J" pressed
  } if(key.toUpperCase() == "J") {
    stroke(255);
    noFill();
    ellipse(100, 400, 150, 150);
  // creates a circle when "k" pressed
  } if(key.toUpperCase() == "K") {
    stroke(0);
    noFill();
    ellipse(400, 400, 400, 400);
  }
}

function keyTyped() {
    // plays a sound when "X letter" pressed
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
