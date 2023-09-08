let n, result, addNum;
do {

  n = parseInt(prompt('Choose a number of iterations'))

} while (isNaN(n));


  
while (isNaN(result)){
  result = 0;
  addNum = 0;
  for (let i = 0; i < n; i++) {
    addNum = parseInt(prompt('Choose a number to add'));
    result += addNum;
  }
};

alert(result);