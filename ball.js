class Ball {
    constructor(x,y,d) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:10
      }
      this.body = Bodies.circle(x, y, d, options);
      this.d = d;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill("pink");
      image(this.image,0, 0, this.d,this.d);
      pop();
    }
  }