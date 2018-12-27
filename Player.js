function Player() {
    this.y = 20;
    this.x = 0;
    this.width = 25;
    this.height = 25;

    this.gravity = 1;
    this.velocity = 0;
    this.jumpPower = -15;
    this.xspeed = 0;

    this.jumpCount = 0;

    this.show = function() {
        fill(0,255,204);
        strokeWeight(3);
        stroke(100,255,255);
        rect(this.x,this.y,this.width,this.height);
    }

    this.jump = function() {
      this.velocity += this.jumpPower;
    }

    this.update = function() {
        this.velocity += this.gravity;
        this.y += this.velocity;

        if (this.y + this.height > height -1 - 50) {
          this.y = height - this. height -1 - 50;
          this.velocity = 0;
          this.jumpCount = 0;

        }
    }
    this.move = function() {
      if (playerIntroOver) {
        this.x += 0;
      } else {
        this.x += 2;
      }
    }
    // this.stationary = function() {
    //   this.x += 0;
    // }
}
