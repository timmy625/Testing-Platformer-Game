var player;

function setup() {
  createCanvas(600,600);
  player = new Player();
}
function draw() {
    background(150);

    player.show();
    player.update();
}
function keyPressed() {
  if ((keyCode === UP_ARROW && player.jumpCount < 1) || (keyCode === ' ' && player.jumpCount < 1)) {
    player.jump();
    player.jumpCount++
  }
}
