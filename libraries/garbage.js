class Garbage extends BaseClass {
   constructor(x, y) {
     super(x, y, 60, 60);
     this.image = loadImage("images/paper.png");
   }
   display() {
     super.display();
   }
 }