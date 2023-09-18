let a = parseInt(prompt('choose à number'));

function recursive(item){
	if (item === 0) {
    return 1;
  } else {
    // Appel récursif
		console.log(item);
    return item * recursive(item - 1);
  }

}

console.log(recursive(a));