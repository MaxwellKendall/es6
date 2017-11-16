/*
   synchronous programs are those that run in sequeence
   async are those that run on a looped engine; operations that take longo r depend on a servers response,
   it diverts that operation to a different handler
   Browsers & UI are async by nature, clicking etc so async is natural for JS
   Promises allow us to represent ASYNC Processes
   Pending, fulfilled and rejected
   status refers to the result and status of the function being executed
   Promises are like a chain of functions
 */

// accessing a promsise's data is referred to as "consuming the process"
// this is done thru the .then method
// .then takes a function that consumes the promise's data or 'return value' once its fulfilled

// Part I.
// let p = new Promise((resolve, reject) => {
//   resolve is a handler that maps to a function that updates the state of the promise
//     resolve handles successful promise calls
//     reject handles failed promise calls
//   resolve('Resolved promise data');
// })
// .then(response => console.log(response));

// // part 2:
// let p = new Promise((resolve, reject) => {
//   reject('Rejected promise data');
// });
//
// p.then(response => console.log(response))
//  .catch(error => console.log('this thing was rejected man', error));

// // part 3:
// This simulates the time it takes for promises to resolve
let p = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Resolved promise data'), 3000);
});

p.then(response => console.log(response));

console.log("even though the function is still running, the next item in the program is executed");
