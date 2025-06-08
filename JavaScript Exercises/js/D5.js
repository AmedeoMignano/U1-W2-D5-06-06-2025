/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log("pets in ordine alfabetico: ", pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse();
console.log("pets in ordine alfabetico e in reverse: ", pets);
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const redfish = pets.shift();
pets.push(redfish);

console.log("Array con redfish alla fine", pets);
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

const licensePlates = ["CC920HJ", "DS920LM", "CK921XP"];

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = licensePlates[i];
}
console.log("Auto con targhe aggiunte ", cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars.push({
  brand: "Ferrari",
  model: "F-40",
  color: "Red",
  trims: ["supercar", "sport", "premium"],
  licensePlate: "AV789DS",
});
console.log("Array con auto nuove ", cars);

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
console.log("Auto senza ultimo elemento trims ", cars);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color[0] === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
let i = 0;
while (numericArray[i] !== 32) {
  console.log(numericArray[i]);
  i++;
}
console.log(32);
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

const alphaArray = charactersArray;

// console.log(alphaArray);

alphaArray.push(
  "a",
  "b",
  "c",
  "e",
  "f",
  "h",
  "i",
  "l",
  "m",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v"
);
alphaArray.sort();

console.log("alfabeto italiano", alphaArray);

const numbers = [];

for (let i = 0; i < alphaArray.length; i++) {
  let n;

  switch (alphaArray[i]) {
    case "a":
      n = 1;
      break;
    case "b":
      n = 2;
      break;
    case "c":
      n = 3;
      break;
    case "d":
      n = 4;
      break;
    case "e":
      n = 5;
      break;
    case "f":
      n = 6;
      break;
    case "g":
      n = 7;
      break;
    case "h":
      n = 8;
      break;
    case "i":
      n = 9;
      break;
    case "l":
      n = 10;
      break;
    case "m":
      n = 11;
      break;
    case "n":
      n = 12;
      break;
    case "o":
      n = 13;
      break;
    case "p":
      n = 14;
      break;
    case "q":
      n = 15;
      break;
    case "r":
      n = 16;
      break;
    case "s":
      n = 17;
      break;
    case "t":
      n = 18;
      break;
    case "u":
      n = 19;
      break;
    case "v":
      n = 20;
      break;
    case "z":
      n = 21;
      break;
    default:
      n = 0;
      break;
  }
  numbers.push(n);
}

console.log("Ordine Numerico Alfabeto Italiano ", numbers);
