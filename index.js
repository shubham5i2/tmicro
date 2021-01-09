//adding of numbers
function add(a, b){
  return a + b;
};

//subtracting of numbers
function sub(a, b){
  return a - b;
};

//multiply of numbers
 function mul(a, b){
  return a * b;
};

//division of numbers
function div(a, b){
  return a / b;
};

//reminder of numbers
function rem(a, b){
  return a % b;
};

// export {add, sub, mul, div, rem};
exports.add = add;
exports.sub = sub;
exports.mul = mul;
exports.div = div;
exports.rem = rem;
