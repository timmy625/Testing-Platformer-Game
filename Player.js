function Player() {
    this.y = 20;
    this.x = 10;
    this.width = 25;
    this.height = 25;

    this.gravity = 0.75;
    this.velocity = 0;
    this.jumpPower = -18;
    this.jumpCount = 0;

    angleMode(DEGREES);
    this.angle = 10;
    this.c = cos(this.angle);


    this.show = function() {
        fill(0,255,204);
        strokeWeight(3);
        stroke(100,255,255);
        rect(this.x,this.y,this.width,this.height);
        // if (playerJumping) {
        //   push();
        //   translate(150,400);
        //   rectMode(CENTER);
        //   rotate(this.angle);
        //   rect(0,0,this.width,this.height);
        //   this.angle += 1;
        //   pop();
        // } else if (!playerJumping) {
        //   rectMode(CORNER);
        //
        // }

    }

    this.jump = function() {
      this.velocity += this.jumpPower
      playerJumping = true;
    }

    this.update = function() {
        this.velocity += this.gravity;
        this.y += this.velocity;

        if (this.y + (this.height) > height -1 - 50) {
          this.y = height - (this. height) -1 - 50;
          this.velocity = 0;
          this.jumpCount = 0;
          playerJumping = false;
        }
    }
    this.move = function() {
      if (playerIntroOver) {
        this.x += 0;
      } else {
        this.x += 2;
      }
    }
}
