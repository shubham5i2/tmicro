## What is this?

This package gives user a flexibility to use simple mathematics computations.

## Operations

### You can perform below operations with the help of this package

⋅⋅* add(a, b) - addition of 2 numbers
⋅⋅* sub(a, b) - substration of 2 numbers
⋅⋅* mul(a, b) - multiplication of 2 numbers
⋅⋅* div(a, b) - division of 2 numbers
⋅⋅* rem(a, b) - reminder of 2 numbers
⋅⋅* lcm(a, b) - LCM of 2 numbers
⋅⋅* gcd(a, b) - GCD of 2 numbers
⋅⋅* isEven(a) - check if a number is even
⋅⋅* isOdd(a) - check if a number is odd
⋅⋅* isPrime(num) - check if a number is prime
⋅⋅* sort_array_asc - sorts a character array in ascending order
⋅⋅* sort_array_desc - sorts a character array in descending order
⋅⋅* sort_number_array_asc - sorts a number array in descending order
⋅⋅* sort_number_array_desc - sorts a number array in descending order
⋅⋅* isPalindrome - check if a string is Palindrome or not
⋅⋅* isPalindrome - check if a string is Palindrome or not
⋅⋅* removeDuplicates - remove duplicate values from an array and results in new array

## Installation

Install with [npm](https://www.npmjs.com/)

```javascript

$ npm install tmicro

```

Install with [yarn](https://yarnpkg.com/)

```javascript

$ yarn add tmicro

```

## Usage

### Below are few use cases

```javascript
const tmicro = require("tmicro");

console.log(tmicro.add(2, 3)); //Output: 5

console.log(tmicro.sub(2, 3)); //Output: -1

console.log(tmicro.mul(2, 3)); //Output: 6

console.log(tmicro.isEven(10)); //Output: true

console.log(tmicro.lcm(21, 6)); //Output: 42

console.log(tmicro.gcd(121, 44)); //Output: 11

console.log(tmicro.isPrime(11)); //Output: true

let array = ["Banana", "Orange", "Apple", "Mango"];
console.log(tmicro.sort_array_asc(array)); //Output: [Apple,Banana,Mango,Orange]
console.log(tmicro.sort_array_desc(array)); //Output: [Orange, Mango,Banana,Apple]

let numbers = [40, 100, 1, 5, 25, 10];
console.log(tmicro.sort_number_array_asc(numbers)); //Output: [1,5,10,25,40,100]
console.log(tmicro.sort_number_array_desc(numbers)) //Output: [100,40,25,10,5,1]

const str = "madam";
console.log(tmicro.isPalindrome(str)); //Output: true
const str = "MadAm";
console.log(tmicro.isPalindrome(str)); //Output: true
const str = "Hello";
console.log(tmicro.isPalindrome(str)); //Output: false
const str = "12344321";
console.log(tmicro.isPalindrome(str)); //Output: true
const str = "1234245";
console.log(tmicro.isPalindrome(str)); //Output: false
const str = " M Al aYalaM";
console.log(tmicro.isPalindrome(str)); //Output: true

let array = [1,3,1,3,3,1,0,5,2,1,77,8,5,77,23,21];
console.log(tmicro.removeDuplicates([1,3,1,3,3,1,0,5,2,1,77,8,5,77,23,21])); //Output: [ 1, 3, 0, 5, 2, 77, 8, 23, 21 ]
```

## Contributor

```javascript
Created with :heart: by Shubham Kumar Singh
```
