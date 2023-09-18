export let bastien = 8;
let age = 5;
age = prompt('how old are you?');
parseInt(age);

while (isNaN(age) ||  age.trim() == '') {
  age = prompt('Is not a number. How old are you?')
}
if (parseInt(age)) {
  if (age < 18) {
    alert('You are not yet an adult');
  } else {
    alert('You are an adult');
  }
}

