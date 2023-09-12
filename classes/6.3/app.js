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
      this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.height &&
      this.height + this.topLeftYPos > otherRectangle.topLeftYPos){
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
  let topLeftXPos = rand(75);
  let topLeftYPos = rand(75);
  let width = rand(40);
  let lenght = rand(50);

  let rect = new Rectangle(topLeftXPos, topLeftYPos, width, lenght)
  arr.push(rect);
} while (stop != 150);

for (let i = 0; i < arr.length; i++) {
  let compar = arr[i];
  for (let j = arr.length; j < 0; j--) {
    if(j === i){
      if (compar.collides(arr[--j])) {
        count++
      }
    }
    if (compar.collides(arr[j])) {
      count++
    }
  }
}

console.log(count);