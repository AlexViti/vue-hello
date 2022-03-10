const snackContainer = document.querySelector('snack-container');

/*
Snack 1:
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
*/

const arr = ['meno', 'mAlE', 'CHE', 'SilVio', "c'è"];
const arr2 = arr.map(str => str[0].toUpperCase() + str.substring(1).toLowerCase());
console.log('Snack 1: ', arr, arr2);

/*
Snack 2:
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Crea un nuovo array con la lista dei mammiferi.
*/

const animals = [
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
];

const mammals = animals.filter(animal => animal.classe == 'mammiferi');
console.log(mammals);