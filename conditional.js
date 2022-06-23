//  IF statements
let isLoggedIn = true;

if (isLoggedIn == true) {
  console.log("zuri");
}

// IF ELSE statements
let number = -2;
if (number > 0) {
  console.log("Number is greater than zero");
} else {
  console.log("Number is less than 0");
}

let goat = "ronaldo";
if (goat == "ronaldo") {
  console.log("Ronaldo is the real deal");
} else {
  console.log("You are just deceiving yourselves");
}

console.log('code continues');

// Nested ELSE-IF statements

let username = '';

if(username == ''){
  console.log('All fields are required');
}
else if(username == 'Firdous'){
    console.log('login');
}
else{
    console.log('Username not recognized');
}