class moon {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      //this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/Moon.jpg")
      moon = createSprite(x,y, this.width, this.height);
      //World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      image(this.image , 0 , 0 , this.width , this.height);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
