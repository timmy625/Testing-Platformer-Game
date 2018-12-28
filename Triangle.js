function Triangle(x,y) {

    this.x = x;
    this.y = y;

    this.show = function() {
      // triangle(triangleX-50,height-50,triangleX-25,height-100,triangleX,height-50);
      // triangle(triangleX,height-50,triangleX+25,height-100,triangleX+50,height-50);
      triangle(this.x-50, this.y, this.x-25,  this.y-50, this.x, this.y);
    }
    this.update = function() {
      this.x -= 3;
    }
}
function Rectangle(x,y) {
    this.x = x;
    this.y = y;

    this.show = function() {
        rect(this.x-50, this.y- 50, 50, 50);
    }
    this.update = function() {
      this.x -= 3;
    }
}
