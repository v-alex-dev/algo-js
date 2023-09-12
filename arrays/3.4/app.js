let numArr = [1,2,3,4,5];
let numBigArr = [100, 101, 102];
let min = 0, max = 0;

for (const elem of numArr) {
	if (max < elem) {
		max = elem;
	}
}
min = max;
for (const elem of numArr) {
	if(min > elem){
		min = elem
	}
}
console.log('max:'+ max + ' & ' + 'min:' + min);