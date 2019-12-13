//  Elena Campell
// 	8/21
//  This is a comment
//  The setup function function is called once when your program begins

class Square{

  constructor(x, y, dx, dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy= dy;
    this.clr = color(random(255), random(255), random(255));
  }

run(){
  this.checkEdges();
  this.updates();
  this.render();
}

checkEdges(){
  if(this.x< 0) {this.dx = -this.dx}
  if (this.x> width) this.dx = -this.dx;
  if (this.y < 0) this.dy = - this.dy;
  if(this.y> height) this.dy = -this.dy;
}

updates(){
  this.x = this.x + this.dx;
  this.y = this.y + this.dy;
}

render(){
  fill( this.clr);
  rect(this.x, this.y, 50, 50);
}


}//  +++++++++++++++++++++++++++++++++++  End Ball Class
