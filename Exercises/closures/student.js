const addFactory = (x) => {
  return (y) => x + y
  // return an inner function with one parameter, y;
  // the inner funcion returns x + y;
};

const add50 = addFactory(50);
const add30 = addFactory(30);
