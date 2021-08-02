class computerArrow {
    constructor(x, y,width,height,arrowangle) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      

      this.body = Bodies.rectangles(x, y, this.width,this,height, options);
      this.width=width
      this.height=height
  
      this.image = loadImage("./assets/arrow.png");
      
      World.add(world, this.body);
      
  
    }
  

  
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
  
     
    }
  }
  