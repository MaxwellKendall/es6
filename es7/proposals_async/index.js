/* Notes:
 * The Async Keyword:
 * introduces async functions in ecmascript and allow for more controlled flow of asynchronous functions.
 * The Await Keyword:
 * adds blocking to asynchronous functions in order to temporarily
 * stop the execution of statements and logic until certain data finishes returning a response.
 */

// all parts:
async function async_one() {
  return "one";
}

// // part 1:
// async_one().then(response => console.log(response));

// // part 2:
// async function async_two() {
//   throw new Error('Issue with async!');
// }
// async_two().catch(error => console.log(error));

// // part 3:
async function async_two() {
  return "two"
}

// // part 4:
async function async_three() {
  // await makes the flow of the program stop until the promise is resolved
  const one = await async_one();
  console.log(one);
  const two = await async_two();
  console.log(two);
}
async_three();

// part 5:
async function async_four() {
  const [res_one, res_two] = await Promise.all([
    async_one(), async_two()
  ])
  console.log(res_one, res_two);
}
async_four();
