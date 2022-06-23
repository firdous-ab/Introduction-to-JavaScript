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

let username = 'Firdous';
let password = 'secret'

if(username === ''){
  console.log('All fields are required');
}
else if(username === 'Firdous' || password === 'secret'){
    console.log('login');
}
else{
    console.log('Username not recognized');
}


//FOR LOOP
//condition: -initialisation; -condition; -increment

let num = 0;

for(let i=0; i< 11; i+=1 ){
   num += i; 
}

console.log(num); // this will add all the numbers from 0 to 11

//WHILE LOOP

let i = 1;

while(i<=10){
  console.log(i);
  i++;
}
