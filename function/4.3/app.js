import { rand10 } from '../4.2/rand.js';

let prom = prompt('Choose a number for the maximum value of the random');
let limitArry = prompt('Choose a number maxi for the array.');
let arr = [];

function multiRand(n){
	// On boucle pour insérer chaque chiffre aléatoire qui va itérer n fois en fonction du nombre choisi
	for (let i = 0; i < n; i++) {
		arr.push(rand10(prom));
	}
	return arr // retourne le tableau 
}

console.log(multiRand(rand10(limitArry)));