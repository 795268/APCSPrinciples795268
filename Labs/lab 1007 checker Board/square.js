

/*
**  Square Constructor Function::
**  eettlin
**  Sept. 11, 2018
*/
class Square{

  
   constructor(x,y,w,h,c){
     this.loc=createVector(x,y);
     this.w=w;
     this.h=h;
     this.clr= c;
   } //  End of constructor

  run(){
   this.render();
   this.update();

  }
  render(){
   fill(this.clr);
   rect(this.loc.x,this.loc.y,this.w,this.h);
  }

  }// end of Square class
