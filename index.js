//adding of numbers
function add(a, b) {
  return a + b;
}

//subtracting of numbers
function sub(a, b) {
  return a - b;
}

//multiply of numbers
function mul(a, b) {
  return a * b;
}

//division of numbers
function div(a, b) {
  return a / b;
}

//reminder of numbers
function rem(a, b) {
  return a % b;
}

//gcd of a number
function gcd(a, b) {
  if (b == 0) {
    return a;
  }
  return gcd(b, a % b);
}

//lcm of a number
function lcm(a, b) {
  return !a || !b ? 0 : Math.abs((a * b) / gcd(a, b));
}

//check if number is even
function isEven(a) {
  if (a % 2 == 0) {
    return true;
  }
  return false;
}

//check if number is odd
function isOdd(a) {
  if (a % 2 != 0) {
    return true;
  }
  return false;
}

//check if a number is prime or not
function isPrime(num) {
  if (!Number.isInteger(num)) return false;

  if (num < 2) return false;

  // 2 is the first prime number
  if (num === 2) return true;

  // Excluding 2 no even number can be prime
  if (num % 2 === 0) return false;

  // Run divisibility tests up to and including it's square root
  const sqrt = Math.sqrt(num);
  for (let i = 3; i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

//function to sort an array in ascending order
function sort_array_asc(array) {
  return array.sort();
}

//function to sort an array in descending  order
function sort_array_desc(array) {
  array.sort();
  return array.reverse();
}

//function to sort a number array in descending  order
function sort_number_array_asc(array) {
  return array.sort(function (a, b) {
    return a - b;
  });
}

//function to sort a number array in descending  order
function sort_number_array_desc(array) {
  return array.sort(function (a, b) {
    return b - a;
  });
}

//function to check if a string/number is Palindrome or not
function isPalindrome(input) {
  //convert string to lowercase
  let lowerCaseInput = input.toLowerCase();

  // remove whitespaces from the input
  let finalInput = lowerCaseInput.replace(/\s/g, "");

  // convert string to an array
  let arrayValues = finalInput.split("");

  // reverse the array values
  let reverseArrayValues = arrayValues.reverse();

  // convert array to string
  let reverseString = reverseArrayValues.join("");

  if (finalInput == reverseString) {
    return true;
  } else {
    return false;
  }
}

// remove duplicates from the array
function removeDuplicates(array) {
  let uniqueArray = [...new Set(array)];
  return uniqueArray;
}

//functions exports
exports.add = add;
exports.sub = sub;
exports.mul = mul;
exports.div = div;
exports.rem = rem;
exports.gcd = gcd;
exports.lcm = lcm;
exports.isEven = isEven;
exports.isOdd = isOdd;
exports.isPrime = isPrime;
exports.sort_array_asc = sort_array_asc;
exports.sort_array_desc = sort_array_desc;
exports.sort_number_array_asc = sort_number_array_asc;
exports.sort_number_array_desc = sort_number_array_desc;
exports.isPalindrome = isPalindrome;
exports.removeDuplicates = removeDuplicates;
