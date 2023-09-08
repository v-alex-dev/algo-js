let min, max, current;

do {
  min = parseInt(prompt('Choisissez un nombre minimal'));
  max = parseInt(prompt('Choisissez un nombre maximal'));
  current = parseInt(prompt('Prenez un nombre courant'));
  
  if (min > max) {
    alert('La valeur minimale ne peut pas être plus grande que la valeur maximale. Veuillez réessayer.');
  }
} while (min > max);


min > current < max ? alert(current) : alert('Current is not between');