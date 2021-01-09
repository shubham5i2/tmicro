const tmicro = require("../index");

let array1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(tmicro.sort_array_asc(array1)); //Output: [Apple,Banana,Mango,Orange]
console.log(tmicro.sort_array_desc(array1)); //Output: [Orange, Mango,Banana,Apple]

let numbers = [40, 100, 1, 5, 25, 10];
console.log(tmicro.sort_number_array_asc(numbers)); //Output: [1,5,10,25,40,100]
console.log(tmicro.sort_number_array_desc(numbers)); //Output: [100,40,25,10,5,1]

const str1 = "1234245";
console.log(tmicro.isPalindrome(str1)); //Output: false

const str2 = " M Al aYalaM";
console.log(tmicro.isPalindrome(str2)); //Output: true

let array2 = [1, 3, 1, 3, 3, 1, 0, 5, 2, 1, 77, 8, 5, 77, 23, 21];
console.log(
  tmicro.removeDuplicates(array2)
); //Output: [ 1, 3, 0, 5, 2, 77, 8, 23, 21 ]
