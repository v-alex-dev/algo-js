let numArr = [1,2,3,4,5];
let numBigArr = [100, 101, 102];
let result = 0;

for (const elem of numArr) {
	console.log(elem);
	result += elem;
}
console.log(result/numArr.length);
console.log('================');
result=0;
for (const elem of numBigArr) {
	console.log(elem);
	result += elem;
}
console.log(result/numBigArr.length);