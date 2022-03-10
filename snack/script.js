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
console.log('Snack 2: ', mammals);

/*
Snack 3:
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
 */

const persons = [
	{
		name: 'Jack',
		surname: 'London',
		age: 40
	},
	{
		name: 'Kurt',
		surname: 'Cobain',
		age: 27
	},
	{
		name: 'Anne',
		surname: 'Frank',
		age: 16
	}
];

const persons2 = persons.map(person => person.message = `${person.name} ${person.surname} ${person.age < 18 ? 'cannot': 'can'} drive`);
console.log(persons, persons2);