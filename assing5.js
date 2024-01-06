//Q1.) Write the code, one line for each action:
// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.
let user = {}
console.log(user);
user.name = "Jhon";
console.log(user);
user.surname = "Smith";
console.log(user);
user.name = "Pete";
console.log(user);
delete user.name;
console.log(user);


// Q2.) Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
// Should work like that:
// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false
let schedule = {
   
}
function isEmpty(schedule){
    if(Object.keys(schedule)===0){
        return true;
    }
    return false;
}

let ans = isEmpty(schedule);
console.log(ans);

// Q3.) We have an object storing salaries of our team:
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
} 
 let sum = 0;
if(Object.keys(salaries)!==0){
    for(let key in salaries){
        sum+=salaries[key];
    }
    console.log(sum);
}
else if(Object.keys(salaries)===0){
    console.log("0");
}

// Q4.) Create an object calculator with three methods:
// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
// let calculator = {
//   // ... your code ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );


let calculator = {
    "a" : null,
    "b" : null,
    read : () => {
        this.a = parseInt(window.prompt("Enter 1st value"));
        this.b = parseInt(window.prompt("Enter 2nd value"));
    },
    sum : () =>{
        return this.a + this.b;
    },
    mul : () =>{
        return this.a * this.b;
    }
}

calculator.read();
let totalsum = calculator.sum();
window.alert(totalsum);
let totalmul = calculator.mul();
window.alert(totalmul);

console.log("Sum is :", calculator.sum());
console.log("Mul is :", calculator.mul());