class Paddle {
  constructor(x, y, w, h){
    this.loc = createVector(x, y);
    this.w = w;
    this.h= h;
    this.clr = color(random(255), random(255), random(255));
  }

  run(){
    this.update();
    this.render();
}
update(){
  var mouseLoc = createVector (mouseX, mouseY);
  this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);
}

render(){
  fill(this.clr);
  rect(this.loc.x, this.loc.y, this.w, this.h);
}


} //*** end class
