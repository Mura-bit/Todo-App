import "./App.css";
import TodoApp from './containers/todoApp/TodoApp';

function App() {
  return (
    <div className="main-container">
      <TodoApp />
    </div>
  );
}

export default App;


// let num = 15;

//     if (num % 3 === 0 && num % 5 === 0) {
//         console.log("FizzBuzz")
//     } else if ("Fizz" % 3) {
//         console.log("Fizz")
//     } else if ("Buzz" % 5) {
//         console.log("Buzz")
//     } else {
//         console.log("Not the value")
//     }

// let fizzBuzz = function (n) {
//   if (n % 3 == 0 && n % 5 == 0) {
//     return "FizzBuzz";
//   } else if (n % 5 == 0 && n % 5 != 0) {
//     return "Fizz";
//   } else if (n % 3 == !0 && n % 5 == 0) {
//     return "Buzz";
//   } else {
//     return n;
//   }
// }

// console.log(fizzBuzz(15));


// ORIGINAL
// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
 

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// let n = 15;

//   for (let i = n; n % 3 == 0 && n % 5 == 0; i++ ) {
//     console.log(i);
//   }
