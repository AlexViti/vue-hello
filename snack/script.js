const snackContainer = document.querySelector('snack-container');

/*
Snack 1:
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
*/

const arr = ['meno', 'mAlE', 'CHE', 'SilVio', "c'è"];
const arr2 = arr.map(str => str[0].toUpperCase() + str.substring(1).toLowerCase());
console.log('Snack 1: ', arr, arr2);