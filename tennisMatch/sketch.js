/* Manny Zetino
   Last edite 2/11/2017
   Tennis match with sound effects when it hits the opposite ends and a color flash to indicate a hit
*/

var x = 0; // ball position
var speed = 3; //speed of the ball
var ooo; // sound effect
var ahhh; // sound effect

function preload() {
  ooo = loadSound("sounds/ooo.mp3") // loading ooo sound
  ahhh = loadSound("sounds/ahhh.mp3") // loading ahh sound
} 

function setup() {
  createCanvas(500, 500); // tennis court size to 500x500
}

function draw() {
  background(0, 220, 100); // tennis court color
  stroke(255); // center court line color
  strokeWeight(10) // center court line thickness
  line(250, 0, 250, 500); // line down center court

  fill(0, 256, 89); // tennis ball
  strokeWeight(2); // outline of ball
  ellipse(x, 200, 100, 100); // ball

  // sound effect when it hits the right side
  if (x > width - 50) {
    ooo.play();
  }
  // sound effect when it hits the left side  
  if (x < 50) {
    ahhh.play();
  }
  // motion of the ball  
  x = x + speed;
  // change direction  
  if (x > width - 50) {
    speed = -3;
  }  
 // return
  if (x < 50) {
    speed = 3;
  }  
 // simulate a hit when ball reaches ends 
  if (x > width - 50 || x < 50) {
    background(200, 0, 0);
  }
}
