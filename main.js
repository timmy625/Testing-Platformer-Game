let playerIntroOver = false;
let playerJumping = false;
function setup() {
  createCanvas(600,600);

  background(150);
  rotate(0);
  ground = new Ground();
  player = new Player();

  tri1 = new Triangle(700,550);
  tri2 = new Triangle(750,550);
  tri3 = new Triangle(900,550);
  tri4 = new Triangle(1200,550);
  tri5 = new Triangle(1250,550);
  rect6 = new Rectangle(1650,550);
  tri6 = new Triangle(1650,500);
  tri7 = new Triangle(1800,550);

  ground.setup();

}
function draw() {
    background(150);
    player.show();
    player.update();
    player.move();

    ground.show();

    tri1.show();
    tri2.show();
    tri3.show();
    tri4.show();
    tri5.show();
    rect6.show();
    tri6.show();
    tri7.show();


    setTimeout(endPlayerIntro, 1000);

}
function keyPressed() {
  if ((keyCode === UP_ARROW && player.jumpCount < 1) || (key == ' ' && player.jumpCount < 1)) {
    player.jump();
    player.jumpCount++
  }
}
function endPlayerIntro() {
  ground.update();
  playerIntroOver = true;
  tri1.update();
  tri2.update();
  tri3.update();
  tri4.update();
  tri5.update();
  rect6.update();
  tri6.update();
  tri7.update();
}
