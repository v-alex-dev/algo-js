let arr = [];
let copyArr = [];

function addArr() {
	let prom = prompt('Add a new value into array');
	arr.push(prom);
	copyArr = [...arr]
	console.log('First table :');
	for (const elem of arr) {		
		console.log(elem);
	}
	console.log('Second table :');
	for (const elem of copyArr) {
		console.log(elem);
	}
	let stop = prompt('Do you want stop add?')
	stop=='yes'? alert('Bye') : addArr();
}
addArr();