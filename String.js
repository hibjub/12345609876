class String {
    constructor(body1,body2,offsetX,offsetY) {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
          bodyA: body1,
          bodyB: body2,
          pointB:{x:this.offsetX,y:this.offsetY}
}
 this.string = Constraint.create(options);
 World.add(world,this.string)

 }
  display() {
    strokeWeight(4);
    line(body1.x,body1.y,pointB.x+this.offsetX,pointB.y+this.offsetY);
  }
}
