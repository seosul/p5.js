function setup() {
  createCanvas(600, 400);
}

function draw() {
background(251,220,182);

/* 위아래 반원 */
fill(255)
stroke(142,15,15)
strokeWeight(1)
ellipse(50, 0, 60);
ellipse(150, 0, 60);
ellipse(250, 0, 60);
ellipse(350, 0, 60);
ellipse(450, 0, 60);
ellipse(550, 0, 60);

ellipse(50, 400, 60);
ellipse(150, 400, 60);
ellipse(250, 400, 60);
ellipse(350, 400, 60);
ellipse(450, 400, 60);
ellipse(550, 400, 60);

/* 중간 선분*/
stroke(142,15,15)
strokeWeight(1)
line(0, 40, 600, 40)
line(0, 360, 600, 360)
strokeWeight(5)
line(0, 100, 600, 100)
line(0, 300, 600, 300)

/*선분*/
stroke(142,15,15)
strokeWeight(1)
line(0, 110, 600, 110)
line(0, 290, 600, 290)

/* 중간 도형1 */
stroke(110,60,53)
strokeWeight(5)
fill(220,236,217)
triangle(20, 120, 140, 120, 20, 280)
fill(231,188,156)
quad(160, 120, 320, 120, 40, 280, 200, 280)
fill(110, 60, 53)
triangle(340, 120, 220, 280, 340, 280)
fill(246,198,182)
quad(360, 120, 360, 280, 420, 280, 520, 120)
fill(222,217,236)
triangle(440, 280, 580, 280, 540, 180)
fill(110, 60, 53)
ellipse(560, 140, 40)

}