// Created by Manuel Zetino
// last edited 3/16/2017
// Monster that changes from jumping to eyes following the mouse. Click mouse to change states.
// revisions: updated commenting. added click box to activate interaction


var page = 0; // initial page displayed
var eyeDirection = 0; // value of eyes set to 0
var jumpValue = 1; // monster up and down on y axis
var jumpDir = 1; // speed of monster

function setup() {
  createCanvas(500, 720); //canvas size
  background(120); // grey backgroun
  rectMode(CENTER); // centering monster
  angleMode(DEGREES); // arc settings
}

function draw() {
  background(120); // grey background during movement
  monster(250, 200); //monster position 
  fill (255); // white box
  strokeWeight(1); // thickness of stroke
  stroke(52, 209, 0); // adding stroke border to box and font
  rect(75, 650, 100, 50); // drawing box to click to activate
  textSize(20); // size of font
  fill(52, 209, 0); // font color
  textAlign(CENTER, CENTER); // text in the middle
  text("Click Me", 75, 650); // text for box


  if(page == 0) { // initial page before a click
    if(mouseX > 250) { // sets the position limit for activating eyes
      eyeDirection = min(eyeDirection + .5, 20);  // eyes moving to the right
    } else { // if the mouse is less than 250 then have the eyes change direction
      eyeDirection = max(eyeDirection - .5, -20); //eyes moving to the left 
    }
    } else { // change page on click to jumping
      jumpValue = jumpValue + jumpDir; // jumping
        if (jumpValue == 100 || jumpValue == -100) { // limits
          jumpDir = jumpDir * -1; //changing direction
      }
    }
}

// calling monster
function monster(x,y) { 
    body(x, y + jumpValue);
    eyes(eyeDirection + x, jumpValue - 0);

}

// draws the body of the monster at X and Y
function body(x,y) {
  noStroke();
  fill(52, 209, 0); // color of monster
  rect(x, y + 200, 200, 200, 6); // body of monster
  fill(255) // white stomach
  rect(x, y + 200, 100, 150, 6); // stomach of monster
  stroke(52, 209, 0);
  strokeWeight(20);
  line(x - 100, y + 175, x - 130, y + 175); //arm
  line(x + 100, y + 175, x + 130, y + 175); //arm
  noStroke();
  fill(52, 209, 0); // green for monster hands
  arc(x - 140, y + 175, 40, 40, -90, 90); // hand
  arc(x + 140, y + 175, 40, 40, 90, -90);  //hand
  //head
  fill(52, 209, 0);
  triangle(x - 75, y + 100, x, y + 15, x + 75, y + 100);
  //mouth
  stroke(255);  
  strokeWeight(3);
  line(x - 30, y + 80, x + 30, y + 80);
  //tooth
  fill(255);
  triangle(x - 20, y + 81, x - 18, y + 85, x - 15, y + 81);
  //legs
  stroke(52, 209, 0);
  strokeWeight(20);
  line(x - 50, y + 300, x - 50, y + 375);
  line(x + 50, y + 300, x + 50, y + 375);
  noStroke();
  fill(52, 209, 0);
  arc(x - 50, y + 400, 80, 80, -180, 0)
  arc(x + 50, y + 400, 80, 80, -180, 0)
}
// eyes
function eyes(x,y) {
  stroke(52, 209, 0);
  strokeWeight(20);
  line(x, y + 260, x - 85, y + 150);
  line(x, y + 260, x + 85, y + 150);
  fill(255);
  noStroke();
  ellipse(x - 85, y + 150, 40);
  ellipse(x + 85, y + 150, 40);
  fill(0);
  noStroke();
  ellipse(x - 85, y + 160, 25);
  ellipse(x + 85, y + 160, 25);

}

// activates chance from eyes to jump click
function mousePressed(x,y) {
  if (mouseX > 25 && mouseX < 125 && mouseY > 625 && mouseY < 675) { // click boundaries for box
    page = 1 - page;
  }
}

