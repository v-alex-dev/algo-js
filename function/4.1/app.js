let length = prompt('What is the length');
let width = prompt('What is the width');
let result;
// le = length
// wi = width
export function calcSurface (le, wi) {
	// Si les deux valeurs sont égales il s'agit d'un carré et il suffit faire l'une des deux valeur au carré.
	if (le === wi) {
		console.log('It\'s a square');
		return le^2;
	}
	// Si pas retourne la multiplication de la longueur par la largeur.
	return le*wi;
}

result = calcSurface(length, width);
console.log(result);