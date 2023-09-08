let num = parseInt(prompt('Choose a number'));


do {
  console.log(num);
  if (isNaN(num)) {
    num = parseInt(prompt('a number plz'));
  } else {
    num = parseInt(prompt('Are you sure?'));
  }
} while (num != 42);

alert('Of course !')