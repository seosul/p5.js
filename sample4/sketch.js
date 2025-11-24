let startTime;
let dur =10000;
function setup() {
  createCanvas(600, 400);
  startTime = millis();
  saveGif('과제4', 10);
}

function draw() {
let elapsedTime = millis() - startTime;
let stand = elapsedTime % dur;
let half = dur/2;

if ( stand < half ) {
bg1 = map(stand, 0, half, 251, 220);
bg2 = map(stand, 0, half, 220, 236);
bg3 = map(stand, 0, half, 182, 217);
}  else {
bg1 = map(stand-half, 0, half, 220, 251);
bg2 = map(stand-half, 0, half, 236, 220);
bg3 = map(stand-half, 0, half, 217, 182);
}
background(bg1, bg2, bg3);

/* 위아래 반원 */
if ( stand < half ) {
c1 = map(stand, 0, half, 60, 30);
}  else {
c1 = map(stand-half, 0, half, 30, 60);
}

fill(255)
stroke(142,15,15)
strokeWeight(1)
ellipse(50, 0, c1);
ellipse(150, 0, c1);
ellipse(250, 0, c1);
ellipse(350, 0, c1);
ellipse(450, 0, c1);
ellipse(550, 0, c1);

ellipse(50, 400, c1);
ellipse(150, 400, c1);
ellipse(250, 400, c1);
ellipse(350, 400, c1);
ellipse(450, 400, c1);
ellipse(550, 400, c1);

/* 중간 선분*/
if ( stand < half ) {
li1 = map(stand, 0, half, 142, 251);
li2 = map(stand, 0, half, 15, 220);
li3 = map(stand, 0, half, 15, 182);
}  else {
li1 = map(stand-half, 0, half, 251, 142);
li2 = map(stand-half, 0, half, 220, 15);
li3 = map(stand-half, 0, half, 182, 15);
}
stroke(li1, li2, li3)
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

stroke(110,60,53)
strokeWeight(5)

/* 중간 도형1 */
if ( stand < half ) {
t1 = map(stand, 0, half, 140, 100);
}  else {
t1 = map(stand-half, 0, half, 100, 140);
}
fill(220,236,217)
triangle(20, 120, t1, 120, 20, 280);

/* 중간 도형2 */
if ( stand < half ) {
s1 = map(stand, 0, half, 120, 160);
s2 = map(stand, 0, half, 280, 240);
}  else {
s1 = map(stand-half, 0, half, 160, 120);
s2 = map(stand-half, 0, half, 240, 280);
}
fill(231,188,156)
quad(160, s1, 320, 120, 40, 280, 200, s2)

/* 중간 도형3 */
noStroke()
if ( stand < half ) {
tc1 = map(stand, 0, half, 110, 255);
tc2 = map(stand, 0, half, 60, 255);
tc3 = map(stand, 0, half, 53, 255);
}  else {
tc1 = map(stand-half, 0, half, 255, 110);
tc2 = map(stand-half, 0, half, 255, 60);
tc3 = map(stand-half, 0, half, 255, 53);
}
fill(tc1, tc2, tc3);
triangle(340, 120, 220, 280, 340, 280)

stroke(142,15,15)
/* 중간 도형4*/
if ( stand < half ) {
q1 = map(stand, 0, half, 520, 420);
}  else {
q1 = map(stand-half, 0, half, 420, 520);
}
fill(246,198,182);
quad(360, 120, 360, 280, 420, 280, q1, 120);

/* 중간 도형5*/
if ( stand < half ) {
tr1 = map(stand, 0, half, 540, 440);
tr2 = map(stand, 0, half, 180, 120);
}  else {
tr1 = map(stand-half, 0, half, 440, 540);
tr2 = map(stand-half, 0, half, 120, 180);
}
fill(222,217,236);
triangle(440, 280, 580, 280, tr1, tr2);

/* 중간 도형6*/
fill(tc1, tc2, tc3)
ellipse(560, 140, 40)
}
