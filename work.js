/* var name = prompt("Enter your name");
var nameCase = name.toUpperCase();
var nameSlice = nameCase.slice( 0, 1);
alert(nameSlice + name.slice(1,5));
 */
/* 
function lifeInWeeks(age) {
  var days = age * 365;
  var weeks = age * 52;
  var months = age * 12;
  console.log("you are " + days + " days " + weeks + " weeks " + months + " months and " + age + " years old.")
};
lifeInWeeks(20); */
/* 
prompt("your name:");
prompt("your patner name:");
var loveScor = Math.random() * 100;
loveScor = Math.floor( loveScor ) + 1;
alert("your love score is " + loveScor + "%");
 */
/* var myGuests = ["Usman", "Ali", "Ahmad", "Rahman Ali", "Abdullah"];
var newGuest = prompt("What is your name?");

if (myGuests.includes(newGuest)) {
  alert("wellcome!");
} else {
  alert("sorry maybe next time");
} */
/* 
var output = [];
var count = 1;
function fuzzBuzz(){
  if (count % 3 == 0 && count % 5 == 0) {
    output.push("FuzzBuzz")
  }
  else if(count % 3 == 0) {
    output.push("Fuzz");
  } else if (count % 5 == 0) {
    output.push("Buzz");
  } else if (count % 3 == 0 && count % 5 == 0) {
    output.push("FuzzBuzz");
  } else {
    output.push(count);
  }
    count++;
    console.log(output);
} */
/* 
var names = ["Usman", "Ali", "Ahmad", "Rahman Ali", "Abdullah"];

function howsBayToday() {
  var persons = names.length;
  var randomPersonPosition = Math.floor( Math.random() * persons );
  var rendomPerson = names[randomPersonPosition];
//  return rendomPerson + " is buy food today!";
   console.log(rendomPerson + " is bay food today!");
} */


function fibonacciGenerator(n) {
  var output = [];
  if ( n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];
    for (i = 2; i < n; i++) {
      
      output.push( output[output.length - 2] + output[output.length - 1] );
    }

  }
  return output;
}
output = fibonacciGenerator(4);
console.log(output);