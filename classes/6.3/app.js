class Rectangle {
  constructor(topLeftXPos,topLeftYPos, width, length){
    this.topLeftXPos = topLeftXPos,
    this.topLeftYPos = topLeftYPos,
    this.width = width,
    this.length = length
  }


  collides(otherRectangle){
    if(  
      this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
      this.topLeftXPos+ this.width > otherRectangle.topLeftXPos &&
      this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length &&
      this.length + this.topLeftYPos > otherRectangle.topLeftYPos){
        return true;
      }
    return false
  }
}

function rand(x) {
  return Math.floor(Math.random()*x)
}

let arr = []
let stop = 0;
let count = 0;
do {
  let topLeftXPos = rand(100);
  let topLeftYPos = rand(100);
  let width = rand(10);
  let length = rand(15);

  let rect = new Rectangle(topLeftXPos, topLeftYPos, width, length)
  arr.push(rect);
  stop++
} while (stop < 750);
console.log(arr);
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i].collides(arr[j])) {
      count++;
    }
  }
}

console.log(count);