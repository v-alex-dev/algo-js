class circle {
  constructor(xPos, yPos, radius){
    this.xPos = xPos,
    this.yPos = yPos,
    this.radius = radius
  }

  get surface(){
    return (this.radius^2)*Math.PI;
  }

  move(xOffset, yOffset){
    this.xPos+=xOffset;
    this.yPos+=yOffset;
  }
}

myCircle = new circle(2,-5,3);
myCircle.move(3,6)
console.log(myCircle.surface);
console.log(myCircle.xPos + ' ' + myCircle.yPos);