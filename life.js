let goat = "ronaldo";
let num = 9;
console.log(goat[2]);
console.log(goat.length);

/* when using the .length feature: JavaScript starts counting from 1
but the index always starts from zero; like above the index of r in 
'ronaldo is 0 and that of o is 6, but the length of the whole word is 7'*/

//STRING FUNCTIONS and METHOD

let goatCap = goat.toUpperCase();
let z = goat.slice(1, 7); //slice is used to return a section of the string
console.log(z);

let firstLetter = goat[0].toUpperCase();
let result = firstLetter + z;
console.log(result);

// METHOD: Replace

let message = "kola is a girl";

let result1 = message.replace("kola", "tolu"); //this will replace 'kola' with 'tolu'
console.log(result1);

let city = "   lagos   ";
console.log(city);
console.log(city.trim()); //this function will remove or trim out unnecessary space in a string

