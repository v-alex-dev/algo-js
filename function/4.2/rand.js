export function rand10(max) {
	//Math.floor arrondis la valeur, et math.random choisi un nombre aléatoire entre 0 et 1 et est multiplier par la valeur max pour obtenir un nombre aléatoire entre 1 et max.
	return Math.floor(Math.random()* max);
}


