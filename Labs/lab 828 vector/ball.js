//  Elena Campell
// 	8/21
//  This is a comment
//  The setup function function is called once when your program begins

class Ball{

  constructor(x, y, dx, dy){
    this.loc = createVector(x, y);
    this.vel = createVector (dx, dy);
    this.acc = createVector (0, -1);
    this.clr = color(random(255), random(255), random(255));
  }

run(){
  this.checkEdges();
  this.updates();
  this.render();
}

checkEdges(){
  if(this.loc.x< 0) {this.vel. x = -this.vel.x}
  if (this.loc.x> width) this.vel.x = -this.vel.x;
  if (this.loc.y < 0) this.vel.y = - this.vel.y;
  if(this.loc.y> height) this.vel.y = -this.vely;
}

updates(){
  this.vel.add(this.acc);
  this.loc.add(this.vel);
}

render(){
  fill( this.clr);
  ellipse(this.loc.x, this.loc.y, 50, 50);
}


}//  +++++++++++++++++++++++++++++++++++  End Ball Class
