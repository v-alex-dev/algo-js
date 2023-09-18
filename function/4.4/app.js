import { rand10 } from "../4.2/rand.js";


let inputAr =[];
let n, stop;


function student() {
	n = 0;
	inputAr = [];
	// Inscription les élèves dans un tableau. Jusqu'a ce que la personne tape yes
	do {
		inputAr.push(prompt('Write name & firstname'));
		stop = prompt('Do you have finish?');
	} while (stop != 'yes');
	// Demande combien d'élève il y a dans la classe. Si il n'inscrit pas un nombre il recommence jusqu'a ce qu'il est enregistrer un nombre
	do {
		n = prompt('How student you have?(In number plz) : ', + inputAr.length) //affiche automatiquement le nombre d'élément dans le tableau pour ne pas à avoir a compter sois même.
	} while (isNaN(n) || n < 1);
	return inputAr, n;
}

student();


function pickLearner(inputAr = [], n) {
	let j = rand10(n)
	let arr = [] // Définis un tableau avec un taille compris entre 1 et n, correspondant aux index du tableau inputAr
	console.log(j);
	let lengthArr = inputAr.length;
	//Vérifie si le nombre de valeur de inputAr est le même que n,
	//Si pas analyse si il y en a trop ou trop eu et adapte l'alert.
	console.log(lengthArr, n);
	if (lengthArr != n) {
		if (lengthArr > n) {
			alert('Too many students');
			student();
		}
		alert('Missing students')
		student();
	}
	for (let i = 0; i < j ; i++) {
		arr[i] = inputAr[rand10(n)]
	}
	console.log(arr);
}
pickLearner(inputAr, n)