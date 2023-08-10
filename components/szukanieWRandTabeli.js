let max = 50;
let array = [];
let number = 7; //prompt("Podaj liczbe");
let x = 0;

function getNumberToTable(length, array) {
  for (let i = 0; i < length; i++) {
    array[i] = Math.floor(Math.random() * max);
  }
  return array;
}

function lookingInTable(length, array) {
  for (let i = 0; i < length; i++) {
    if (number == array[i]) {
      console.log("Znalazłem twa liczbe jest na");
      console.log(i + 1);
    }
  }
}

console.log(getNumberToTable(max, array));
console.log(lookingInTable(max, array));
