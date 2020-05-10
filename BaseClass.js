class BaseClass{
  constructor(x,y) {
    var options = {
      'restitution':1.4,
      'friction':1.0,
      'density':1.0
    }
    this.x = x;
    this.y = y;
    this.image = loadImage("raindrop1.png");
    this.body = Bodies.rectangle(x, y, 70, 60, options);
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    reset();
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, this.x, this.y, 70, 60);
    pop();
  }
}
function reset() {
  if(body.y > 400){
    body.y = 0
  }
}