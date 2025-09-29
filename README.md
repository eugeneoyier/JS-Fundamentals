```javascript
// =============================
// 1. Why JavaScript is amazing
// =============================
console.log("JavaScript is amazing! You can use it to build almost anything.");

// =============================
// 2. How to run a JS script
// =============================
// Run this file using: node script.js

// =============================
// 3. Variables and Constants
// =============================
let name = "Eugene";     
const pi = 3.14159;      
var oldWay = "legacy";   
console.log(name, pi, oldWay);

// =============================
// 4. var, let, const differences
// =============================
var a = 1;  
let b = 2;  
const c = 3; 

if (true) {
  var x = 10; // function-scoped
  let y = 20; // block-scoped
}
console.log(x); // 10
// console.log(y); // Error: y is not defined

// =============================
// 5. Data types
// =============================
let str = "Hello";   
let num = 42;        
let bool = true;     
let obj = { key: "value" }; 
let arr = [1, 2, 3]; 
let und;             
let n = null;        
let sym = Symbol("id"); 
let big = 123n;      

console.log(typeof str, typeof num, typeof bool, typeof obj, typeof arr, typeof und, typeof n, typeof sym, typeof big);

// =============================
// 6. if / if...else
// =============================
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// =============================
// 7. Comments
// =============================
// Single-line comment
/*
Multi-line
comment
*/

// =============================
// 8. Assign values to variables
// =============================
let score = 0;
score = score + 10;
console.log("Score:", score);

// =============================
// 9. Loops (while / for)
// =============================
let i = 0;
while (i < 3) {
  console.log("While loop:", i);
  i++;
}

for (let j = 0; j < 3; j++) {
  console.log("For loop:", j);
}

// =============================
// 10. break and continue
// =============================
for (let k = 0; k < 5; k++) {
  if (k === 2) continue; // skip 2
  if (k === 4) break;    // stop at 4
  console.log(k);
}

// =============================
// 11. Functions
// =============================
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Eugene"));

// =============================
// 12. Function without return
// =============================
function sayHello() {
  console.log("Hello!");
}
let result = sayHello(); 
console.log(result); // undefined

// =============================
// 13. Scope of variables
// =============================
let globalVar = "I am global";
function scopeTest() {
  let localVar = "I am local";
  console.log(globalVar); 
  console.log(localVar);  
}
scopeTest();
// console.log(localVar); // Error

// =============================
// 14. Arithmetic operators
// =============================
let m = 10, n1 = 3;
console.log(m + n1); 
console.log(m - n1); 
console.log(m * n1); 
console.log(m / n1); 
console.log(m % n1); 
console.log(m ** n1);

// =============================
// 15. Dictionary (Object)
// =============================
let person = {
  name: "Eugene",
  age: 22,
};
console.log(person.name); 
person.job = "Developer"; 
delete person.age;        
console.log(person);

// =============================
// 16. Import a file (ES6 Modules)
// =============================
// Create a separate math.js file:
//
// export function add(x, y) {
//   return x + y;
// }
//
// Then in this file (script.js):
//
// import { add } from "./math.js";
// console.log(add(2, 3));
//
// NOTE: For Node.js, enable ES Modules by adding "type": "module" in package.json
```
