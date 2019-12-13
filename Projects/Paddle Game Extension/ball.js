//  Elena Campell
// 	8/21
//  This is a comment
//  The setup function function is called once when your program begins

class Ball{

  constructor(x, y, dx, dy, id){
    this.loc = createVector(x, y);
    this.vel = createVector (dx, dy);
    this.acc = createVector (0, .7);
    this.id = id;
  }

run(){
  this.checkEdges();
  this.update();
  this.render();
  this.removeBall();
  this.score();
}

checkEdges(){ // to keep ball inside screen
  if(this.loc.x< 0) {this.vel. x = -this.vel.x}
  if (this.loc.x> width) this.vel.x = -this.vel.x;
  if (this.loc.y < 0) this.vel.y = - this.vel.y;
  if(this.loc.y> height) this.vel.y = -this.vel.y;
}

update(){ // to make the balls fall/bounce
  this.vel.add(this.acc);
  this.loc.add(this.vel);
}

render(){
   if (this.id%2 === 0){ //makes half balls red
    fill (250, 0, 0);
  }else if (this.id%2 === 1){ //half the balls green
    fill (0, 250, 0);
  }
  ellipse(this.loc.x, this.loc.y, 30, 30);
}

isColliding(){ // if ball is hitting the paddle
  if (this.loc.x> paddle.loc.x &&
  this.loc.x < paddle.loc.x +paddle.w &&
  this.loc.y > paddle.loc.y && this.loc.y < paddle.loc.y +paddle.h&&
  this.vel.y>0){
    return true;
  } else{
    return false;
  }
}

removeBall(){ // remove balls that hit the paddle
  for (var i = balls.length-1; i >= 0; i--){
    if (balls[i].isColliding()){
      balls.splice(i, 1);

      }
    }
  }


score(){ // to keep score
  if (this.isColliding()===true && this.id %2 === 1){ // if it is a green ball, increase score
    score ++;
  }else if (this.isColliding() === true && this.id %2 ===0){ // if it is a red ball, decrease score
    score--;
    }
  }
getID(){
  return this.id;
}

}//  +++++++++++++++++++++++++++++++++++  End Ball Class
