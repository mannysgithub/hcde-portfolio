var raps = ["Raptors","C. Bosh", "M. Bonner", "M. James", "M. Peterson", "J. Rose", "Bench", "E. Williams","P. Sow", "L. Woods", "J. Calderon"];
var laks = ["Lakers", "L. Odom", "K. Bryant", "C. Mihm", "K. Brown", "S. Parker", "Bench", "B. Cook", "D. George", "L. Walton", "S. Vujacic"]
var ellipseObjs = [];
var xNBA = 155
var yNBA = 122


function setup() {
  createCanvas(1000, 800);
  background(0,255,0);
  
  

}

function draw() {
  drawLabels();
  fill(0, 255, 0);
  rect(25, 25, 105, 800);
  //rect(150, 25, 800, 50);
  //cBosh();
  
  noStroke();
  fill(255);
  for (var i = 0; i < ellipseObjs.length; i++) {
    fill(ellipseObjs[].fillColor);
    ellipse(ellipseObjs[i].xpos, ellipseObjs[i].ypos, 10, 10)
    ellipseObjs[i].xpos = min(ellipseObjs[i].xpos + 1, 254);
      // if (ellipseObjs[i] > 254) {
      //   ellipseObjs[i] = min(ellipseObjs[i] + 1, 254);
      // }
  }

// function raps() {
  for (i = 0; i < raps.length; i++) {
    noStroke();
    fill('red');
    textSize(20);
    text(raps[i], 25, i * 30 + 100);
  }    
// }

// function laks() { 
  for (i = 0; i < laks.length; i++) {
    noStroke();
    fill('purple');
    textSize(20);
    text(laks[i], 25, i * 30 + 450);
  }
}

function mousePressed() {
  ellipseObjs.push({xpos: xNBA, ypos: yNBA, fillColor: random(255)});
}

// function cBosh() {
//   if(mouseX = cBosh) {
//     ellipse(xNBA, yB, 5, 5);
//     ellipse(xNBA2, yB + 30, 5, 5);
//     }
     

function drawLabels() {
  noStroke();
  textSize(11); // sets the text size to 11
  // points
  for (i = 0; i < 27; i++) {        // loops from 0 to 31 (days)
    text(i * 5, 160 + i * 25, 75);
  }
}