var playerIntroOver = false;

function setup() {
  createCanvas(600,600);
  background(150);

  ground = new Ground();
  player = new Player();

  ground.setup();

}
function draw() {
    background(150);

    player.show();
    player.update();
    player.move();

    ground.show();

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
  //player.stationary();
  playerIntroOver = true;

}
