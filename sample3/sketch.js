function setup() {
  createCanvas(600, 400);
}

function draw() {
  noFill();
  background(230,233,243);
  strokeWeight(1);

  /*뒷머리*/
  if (keyIsPressed == true) {
    fill(45,36,30);
  }
    else {
      fill(115,92,73);
    }
  noStroke();
  quad(360, 160, 360, 280, 240, 280, 240, 160);
  
  /*몸*/
  stroke(255);
  fill(255);
  beginShape();
  vertex(300, 225);
  vertex(320, 225);
  vertex(380, 250);
  bezierVertex(400, 230, 420, 420, 400, 400);
  vertex(400, 400);
  vertex(200, 400);
  bezierVertex(180, 420, 200, 230, 220, 250);
  vertex(220, 250);
  vertex(280, 225);
  vertex(300, 225);
  endShape();

  /*목*/
  stroke(252,237,227);
  fill(252,237,227);
  circle(300, 230, 40);  

  /*두상*/
  stroke(253,243,236);
  fill(253,243,236);
  ellipse(300, 140, 150, 180);

  /*염색모*/
  if (keyIsPressed == true) {
    stroke(58,46,38);
    fill(58,46,38);
  }
    else {
      stroke(224,177,127);
      fill(224,177,127);
    }
  beginShape();  /*머리카락*/
  vertex(300, 90);  /*중심*/
  bezierVertex(330, 90, 350, 110, 360, 160);
  vertex(360, 160);  /*오른쪽 옆*/
  vertex(360, 280);  /*오른쪽 아래*/
  bezierVertex(361, 285, 389, 255, 390, 250);
  vertex(390, 250);  /*오른쪽 아래 뒷머리*/
  vertex(390, 130);  /*오른쪽 중간 뒷*/
  bezierVertex(370, 10, 230, 10, 210, 130);
  vertex(210, 130);  /*왼쪽 중간 뒷*/
  vertex(210, 250);  /*왼쪽 아래 뒷머리*/
  bezierVertex(201, 255, 239, 285, 240, 280);
  vertex(240, 280);  /*왼쪽 아래*/
  vertex(240, 160);  /*왼쪽 옆*/
  bezierVertex(260, 110, 280, 90, 300, 90);
  vertex(300, 90);  /*중심*/
  endShape();

  /*검정모*/
  strokeWeight(0.5);
  stroke(58,46,38);
  fill(58,46,38);
  beginShape();  /*머리카락*/
  vertex(300, 90);  /*중심*/
  bezierVertex(330, 90, 350, 110, 360, 160);
  vertex(360, 160);  /*오른쪽 옆*/
  bezierVertex(361, 165, 389, 135, 390, 130);
  vertex(390, 130);  /*오른쪽 중간 뒷*/
  bezierVertex(370, 10, 230, 10, 210, 130);
  vertex(210, 130);  /*왼쪽 중간 뒷*/
  bezierVertex(211, 135, 239, 165, 240, 160);
  vertex(240, 160);  /*왼쪽 옆*/
  bezierVertex(260, 110, 280, 90, 300, 90);
  vertex(300, 90);  /*중심*/
  endShape();
  
  /* 키보드를 눌렀을 때 머리색 변화*/
  
  /*입*/
  strokeWeight(1);
  stroke(245,200,188);
  if (mouseIsPressed === true) {
    fill(245,200,188);
    beginShape();
    vertex(290, 200);
    bezierVertex(291, 205, 299, 210, 300, 210);
    vertex(300, 210);
    bezierVertex(301, 210, 309, 205, 310, 200);
    vertex(310, 200);
    vertex(290, 200);
    endShape();
  } else {
    noFill();
    beginShape();
    vertex(290, 200);
    bezierVertex(295, 202, 305, 202, 310, 200);
    endShape();

    beginShape();
    vertex(290, 200);
    bezierVertex(295, 202, 305, 202, 310, 200);
    vertex()
    endShape();
  }
  
  /*눈동자*/
  if (mouseIsPressed === true) {
  } else {
    stroke(58,46,38);
    fill(157,131,102);
    circle(333, 165, 12);
    circle(267, 165, 12);
  }
  
  /*눈*/
  stroke(58,46,38);
  noFill();
  strokeWeight(2);
  if (mouseIsPressed === true) {
    beginShape();
    vertex(320, 175);
    bezierVertex(325, 170, 350, 170, 350, 173);
    endShape();

    beginShape();
    vertex(280, 175);
    bezierVertex(275, 170, 250, 170, 250, 173);
    endShape();
    
  } else {
    beginShape();
    vertex(320, 165);
    bezierVertex(325, 155, 350, 160, 350, 163);
    endShape();

    beginShape();
    vertex(280, 165);
    bezierVertex(275, 155, 250, 160, 250, 163);
    endShape();
  }
  
  /*눈썹*/
  stroke(58,46,38);
  strokeWeight(3);
  beginShape();
  vertex(320, 150);
  bezierVertex(320, 150, 345, 145, 350, 151);
  endShape();
  
  beginShape();
  vertex(280, 150);
  bezierVertex(280, 150, 255, 145, 250, 151);
  endShape();
  
  /*점*/
  stroke(58,46,38);
  strokeWeight(2);
  point(248, 170);
  point(340, 190);
  

}

/*저장*/
function keyPressed() {
  if (key === 's') {
    saveGif('과제3', 10);
  }
}