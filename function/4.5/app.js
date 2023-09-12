a =[1,1]
b=[2,2]


function calcDistance (dist1, dist2) {

	let x,y;
	x = dist2[0]-dist1[0];
	y = dist2[1]-dist1[1];

	return Math.sqrt(y+x);
}

console.log(calcDistance(a,b));