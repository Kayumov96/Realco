// console.log(Math.random()(10 * 100));
// console.log(Number(23).toString(2));
// console.log(Number.parseInt("Arabboy", 2));
// console.log(parseFloat("Arabboy").toFixed(2));
// var a = 10;
// var b = 30;

// console.log(Math.floor(Math.random() * (b - a) + a));
// console.log(Number.parseFloat("sh"));
// console.log((3.265576).toFixed(3));
// console.log(0 / 0);
// console.log(typeof NaN);
// console.log(5 != "5");
// if (isNaN(n)) {
//   console.log("invalid number");
// } else {

// user input
// var user = n;
// var n = 4;
//   for (let i = 1; i <= n; i++) {
//     console.log(i);
//   }
// }

// even or odd
// var num = 16;
// if (num % 2 === 0) {
//   console.log(num, "is even");
// } else {
//   console.log(num, "is odd");
// }

//  Sum of Even Numbers
// var sum = 60;
// for (let i = 2; i <= sum; i += 2) {
//   sum += i;
// }
// console.log(sum, "sum of even numbers");
// console.log("hiii");

// positive, negative, zero
// var num = 0;
// if (num > 0) {
//   console.log("Positive");
// } else if (num < 0) {
//   console.log("Negative");
// } else {
//   console.log("Zero");
// }

// multiplication;
// var n = 10;
// var i = 0;
// while (i < n) {
//   i++;

//   console.log(`${n} * ${i} = ${n * i}`);
// }

// do {
//   i++;
//   console.log(`${n} * ${i} =${n * i}`);
// } while (i < n);

// console.log(i);
// console.log(`Multiplication table of ${n}:`);
// for (let i = 1; i <= 10; i++) {
//   let result = n * i;
//   console.log(`${n} x ${i} = ${result}`);
// }

// sum of digits
// 6. Problem: Sum of Digits
//    Write a program that takes an input num from the user and calculates the sum of its digits.
// 7

// var input = 1234;
// input = String(input);
// var sum = 0;
// var i = 0;
// while (i < input.length) {
//   sum += +input[i];
//   i++;
// }
// console.log(sum);

// console.log(input);
// for (let i = 0; i < input.length; i++) {
//   sum += Number(input[i]);
// }
// console.log(sum);

// do {
//   sum += +input[i];
//   i++;
// } while (i < input.length);
// console.log(sum);

// // var n = 5;
// var str = "";
// for (let i = 1; i <= n; i++) {
//   console.log(i);
//   for (let j = 1; j <= n - i; j++) {
//     str += "*";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     str += "*";
//   }
//   str += "\n";
// }
// console.log(str);
//   }
//   str += "\n";
// }
// console.log(str);

// let n = 5;
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for (let i = 0; i < n; i++) {
//   // external loop
//   for (let j = 0; j < n; j++) {
//     // internal loop
//     if (i === 0 || i === n - 1) {
//       string += "*";
//     } else {
//       if (j === 0 || j === n - 1) {
//         string += "*";
//       } else {
//         string += " ";
//       }
//     }
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);
// factorial calculation
var num = 10;
var sum = 1;
var i = 1;
// for (let i = 1; i < num; i++) {
//   sum *= i;
// }
// console.log(sum);

// while
// while (i < num) {
//   sum *= i;
//   i++;
// }
// console.log(sum);

// do ,,, while

do {
  sum *= i;
  i++;
} while (i < num);

console.log(sum);
