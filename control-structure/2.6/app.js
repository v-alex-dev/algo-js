let day =['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let num = parseInt(prompt('Choose a number between 1 and seven'));

while(isNaN(num)){
  num = parseInt(prompt('Choose a number between 1 and seven plz!'));
}

switch (num--) {
  case 0:
    alert(day[num]);
    break;
  case 1:
    alert(day[num]);
    break;
  case 2:
    alert(day[num]);
    break;
  case 3:
    alert(day[num]);
    break;
  case 4:
    alert(day[num]);
    break;
  case 5:
    alert(day[num]);
    break;
  case 6:
    alert(day[num]);
    break;
  default:
    alert('This day of the week doesn\'t exist')
    break;
}