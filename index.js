// Variables et concaténation
const lastName = 'Naima';
const room = 'cuisine';

// console.log(' ' + lastName + ' is in the ' + room + '.' + ' ');
console.log(` ${lastName} is in the ${room}.`);

// Variables et calculs
const side = 49;
const perimetre = side * 4;
const aire = side * side;

// Conditions et modulo
const number = 560;
if (number %3 == 0) {
    console.log("YES");
} else {
    console.log("NO");
}

// Utilisation d’une fonction
const values = [58, 93, 13, 72, 36, 46, 50, 28, 95, 86, 63, 75, 17, 87, 42, 38, 43, 84, 88, 56, 14, 14, 67, 56, 80, 43, 49, 11];

function multipleDeTrois (values) {
    const valeur = values.filter((value) => value %3 == 0);
    const result = valeur.join("-");
    // La join()méthode des Arrayinstances crée et renvoie une nouvelle chaîne en concaténant tous les éléments de ce tableau, séparés par des virgules ou une chaîne de séparation spécifiée. Si le tableau ne contient qu'un seul élément, cet élément sera renvoyé sans utiliser le séparateur.
    console.log(typeof(result));
}

multipleDeTrois(values);

console.log((side * 4) + (side * side));
console.log(perimetre + aire);

// Boucle for each
const valuesForEach = [4, 3, 2, 8, 9, 10, 1, 2, 9, 6, 1, 3, 6, 7, 9, 6, 1, 6, 9, 10, 6, 10, 1, 10, 8, 9];

let valeurInitiale = 0;
valuesForEach.forEach(
    (valueRetournee) => {if (valueRetournee >= 5) {
        valeurInitiale += valueRetournee
    }}
)
console.log(valeurInitiale);

