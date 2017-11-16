// // part 1:
// function* evens() {
//   let count = 0;
//   while(true) {
//     // if this were a normal run-to-completion function it would be an infite loop
//     count += 2;
//     yield count;
//   }
// }
//
// let sequence = evens();
// console.log(sequence.next().value);
// console.log(sequence.next().value);

// // part 2:
function* evens() {
  let count = 0;
  while(true) {
    count += 2;
    var reset = yield count;
    if (reset) {
      /* reset is making use of optional paramater on .next method that will also check
         whatever was passed to the generator during the yield statement
         (in addition to continuing to manage the state of the generator),
         in this case if the param (true) was passed you will reset the count to 0
       */
       count = 0;
    }
  }
}

let sequence = evens();
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next(true).value);
console.log(sequence.next().value);
