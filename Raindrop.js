class Raindrop extends BaseClass {
    constructor(x,y){
        super(x,y);
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0
      }
      this.x = x;
      this.y = y;
      this.image = loadImage("raindrop1.png");
      this.body = Bodies.rectangle(x, y, 70, 60, options);
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, this.x, this.y, 70, 60);
      pop();
      if(second() % 2 == 0){
        image.y = 0;
      }
    }
}