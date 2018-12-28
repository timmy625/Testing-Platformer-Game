function Ground() {
    this.setup = function() {
      this.groundSquares = [];
      this.numGroundSquares;

      this.numGroundSquares = (width/50) + 1;

      for (let i = 0; i < this.numGroundSquares; i++) {
        this.groundSquares.push(i*50)
      }
    }

    this.show = function() {
      for (let i = 0; i < this.groundSquares.length; i++) {
        fill(0,0,0);
        stroke(255);
        rect(this.groundSquares[i], height- 50,50,50);
        
      }
    }
    this.update = function() {
      for (let i = 0; i < this.groundSquares.length; i++) {
          this.groundSquares[i] -= 3;

          if (this.groundSquares[i] <= -50) {
            this.groundSquares[i] = width;
          }
      }
    }
}
