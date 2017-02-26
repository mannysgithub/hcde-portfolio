var raps = ["C. Bosh", "M. Bonner", "M. James", "M. Peterson", "J. Rose", "E. Williams","P. Sow", "C. Villanueva", "J. Graham", "J. Calderon"];
var laks = ["L. Odom", "K. Bryant", "C. Mihm", "K. Brown", "S. Parker", "B. Cook", "D. George", "L. Walton", "S. Vujacic"]
var rapsPoints = ["18","12", "26", "7", "17", "0", "4", "13","3", "4"]
var laksPoints = ["8", "81", "12", "3", "13", "2", "0", "0", "3"]
var ellipseObjs = [];
var xNBA = 155
var yNBA = 122
var img;

// function preload() {
//   img = loadImage("Desktop/bball.jpg")
// }

function setup() {
  createCanvas(1000, 800);
  //background(img);
  background(0, 255, 0);
  //image(img, 135, 0);
  

}

function draw() {
  drawLabels();
  fill(0, 255, 0);
  rect(25, 25, 121, 800);
  //rect(150, 25, 800, 50);
  //cBosh();


  noStroke();
  fill(255);
  for (i = 0; i < raps.length; i++) {
    for (ellipsePos=0; ellipsePos < rapsPoints[i]; ellipsePos++){
    ellipse(165 + ellipsePos * 10, 119 + i * 30, 10, 10);
    //ellipsePos = min(ellipsePos + 0, rapsPoints[i]);
    }
  }
  for (i = 0; i < laks.length; i++) {
    for (ellipsePos=0; ellipsePos < laksPoints[i]; ellipsePos++){
      ellipse(165 + ellipsePos * 10, 445 + i *30, 10, 10);
    }
  }
  
  
  // for (var i = 0; i < ellipseObjs.length; i++) {
  //   fill(ellipseObjs[i].fillColor);
  //   ellipse(ellipseObjs[i].xpos, ellipseObjs[].ypos, 10, 10);
  //   ellipseObjs[i].xpos = min(ellipseObjs[i].xpos + 1, 254);
  //     // if (ellipseObjs[i] > 254) {
  //     //   ellipseObjs[i] = min(ellipseObjs[i] + 1, 254);
  //     // }
  

  for (i = 0; i < raps.length; i++) {
    noStroke();
    fill('red');
    textSize(20);
    text(raps[i], 25, i * 30 + 125);
  } 


// function laks() { 
  for (i = 0; i < laks.length; i++) {
    noStroke();
    fill('purple');
    textSize(20);
    text(laks[i], 25, i * 30 + 450);
  }
}

// function mousePressed() {
//   ellipseObjs.push({xpos: xNBA, ypos: yNBA, fillColor: random(255)});
// }

// function cBosh() {
//   if(mouseX = cBosh) {
//     ellipse(xNBA, yB, 5, 5);
//     ellipse(xNBA2, yB + 30, 5, 5);
//     }
     

function drawLabels() {
  noStroke();
  textSize(11); // sets the text size to 11
  // points
  for (i = 0; i < 27; i++) {        
    text(i * 5, 160 + i * 25, 75);
  }
}