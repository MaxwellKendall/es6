/* Closures are best understood as a way of utilizing functions that return other functions with predefined paramters */

// adds suffix to a string

const addSuffix = (x) => {
  const concat = (y) => {
    return y + x;
  }
  return concat;
}

let add_ness = addSuffix('ness');
let happi = add_ness('happi');
console.log('addSuffix', happi);


// Math oriented

const product = (x) => {
  return y => x * y;
}

let mult5 = product(5);
console.log(mult5(3)); // return is 5
