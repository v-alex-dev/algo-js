class Rectangle {
  constructor(topLeftXPos,topLeftYPos, width, lenght){
    this.topLeftXPos = topLeftXPos,
    this.topLeftYPos = topLeftYPos,
    this.width = width,
    this.lenght = lenght
  }


  collides(otherRectangle){
    if(  
      this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
      this.topLeftXPos+ this.width > otherRectangle.topLeftXPos &&
      this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.lenght &&
      this.lenght + this.topLeftYPos > otherRectangle.topLeftYPos){
        return true;
      }
    return false
  }
}

function rand(x) {
  return Math.floor(Math.random()*x)
}


let arr = []
let stop = false
do {
  let topLeftXPos = rand(75);
  let topLeftYPos = rand(75);
  let width = rand(40);
  let lenght = rand(50);

  let rect = new Rectangle(topLeftXPos, topLeftYPos, width, lenght)
  let valid = prompt('Do you want another rectangle?')
  arr.push(rect);
  if (valid == 'no') {
    stop = true;
  }
} while (!stop);

let result = arr[rand(arr.length)].collides(arr[rand(arr.length)]);
console.log(arr);
console.log(result);