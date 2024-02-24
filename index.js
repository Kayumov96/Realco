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
// var num = 10;
// var sum = 1;
// var i = 1;
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

// do {
//   sum *= i;
//   i++;
// } while (i < num);

// console.log(sum);
// Object

// var obj = {
//   name: "Ali",
//   surname: "Kayumov",
//   age: 27,
// };
// create:
// obj["full name"] = "Ali Kayumov";
// // update:
// obj["full name"] = "Arabboy Kayumov";
// // delete:
// delete obj["full name"];
// console.log(Object.entries(obj));
// var values = Object.keys(obj);
// var entries = Object.entries(obj);
// for (let i = 0; i < entries.length; i++) {
//   //   console.log(values[i]);
//   //   console.log(obj[values[i]], values[i]);
//   console.log(entries[i][0], entries[i][1]);
// }

// list of items
// var items = {
//   item1: "apple",
//   item2: "orange",
//   item3: "banana",
//   item4: "apricot",
// };
// var input = ["shoptoli"];
// var tot = Object.entries(items);

// for (var i = 0; i < tot.length; i++) {
//   if (tot[i] !== input) {
//     console.log(tot.push(i));
//   }
// }

// problem : object return if user put a name

// var people = {
//   person1: {
//     name: "John",
//     surname: "smith",
//     age: 36,
//   },
//   person2: {
//     name: "Bob",
//     surname: "Dou",
//     age: 18,
//   },
// };
// var should_found = "John";

// var keys = Object.keys(people);
// for (let i = 0; i < keys.length; i++) {
//   var person = people[keys[i]];
//   //   console.log(people[keys[i]]);
//   if (person.name === should_found) {
//     console.log(`${person.name}, ${person.surname}, ${person.age}`);
//   }
// }

// ----------------------------------------------------------------
// 10. Create an object that represents a bank account with properties for owner,
// balance, and transactions (an array of objects with properties for date and amount).
// Write a function that takes a bank account object as an argument and returns the current
// balance of the account.

// var bank = {
//   12312: {
//     balance: 20000,
//   },
//   234453: {
//     balance: 18000,
//   },
// };
// var operation_type = "deposit";
// var operation_amount = 250;
// var operation_account = 12312;

// function bankOperation(type, amount, account) {
//   if (bank[account]) {
//     if (type === "withdraw") {
//       bank[account].balance -= amount;
//     } else if (type === "deposit") {
//       bank[account].balance += amount;
//     }
//   } else {
//     console.log("Operation declined!");
//   }
//   console.log(bank);
// }
// bankOperation("withdraw", 400, 12312);
// --------------------------------
// function decFunction() {
//   console.log("decFunction");
// }
// decFunction();
// ----------------------------------
// const expFunction = function () {
//   console.log("expFunction");
// };
// expFunction();
// ----------------------------------
// const arrwFunction = () => {
//   console.log("arrwFunction");
// };
// arrwFunction();
// ---------------------------------
// array item add , remove or update
// var items = ["Banana"];

// const addItems = (item, it, old, new) => {
//   items.push(item);
//   const index = items.indexOf(ite);
//   if (index !== -1) {
//     items.splice(index, 1);
//   }

// };
// addItems("Apple");
// console.log(items);
// // remove
// const removeItem = function (ite) {
//   const index = items.indexOf(ite);
//   if (index !== -1) {
//     items.splice(index, 1);
//   }
// };
// removeItem("Banana");
// console.log(items);
// // update
// function updaTe(old, newi) {
//   const ind = items.indexOf(old);
//   if (ind !== -1) items[ind] = newi;
// }
// updaTe("Apple", "Kiwi");
// console.log(items);
//----------------------------------------------------------------
// 1. Write a function that takes a string as input and returns
// the number of words in the string.

// const countChars = function (str) {
//   return str.length;
// };
// console.log(countChars("Hello"));
// ---------------------------------------

// 2. Create an object that represents a shopping cart with properties
// for items (an array of objects with properties for name and price).
// Write a function that takes a shopping cart object as an argument and
// returns the total cost of all items in the cart.

// const list = {};

// function shopping_list(purchase_info) {
//   switch (purchase_info.type) {
//     case "buy":
//       list[purchase_info.product_name] = {
//         amount: purchase_info.product_amount,
//         count: purchase_info.product_count,
//       };
//       break;
//     case "cancel":
//       delete list[purchase_info.product_name];
//   }
//   var sum = 0;
//   var products = Object.values(list);

//   for (let i = 0; i < products.length; i++) {
//     // console.log(products[i]);
//     sum += products[i].amount * products[i].count;
//   }

//   return {
//     products: list,
//     total_amount: sum,
//     total_product: Object.keys(list).length,
//   };
// }

// console.log(
//   shopping_list({
//     type: "buy",
//     product_name: "Shampoo",
//     product_amount: 15_000,
//     product_count: 8,
//   })
// );
// --------------------------------

// 3. Write a function that takes a number as input and returns true
// if the number is a prime number, false otherwise.

// const isPrimeNumber = (num) => {
//   if (num < 2) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(isPrimeNumber(40));
// --------------------------------
// 4. Create an object that represents a student with properties for name,
// grade, and subjects (an array of strings). Write a function that
// takes a student object as an argument and returns the student's average
//  grade.

// var students = {
//   name: "Arabboy",
//   grade: 80,
//   subjects: ["Math", "Computer Science", "Geomety"],
// };
// function getAvarage(student) {
//   let subjectsLength = students.subjects.length;
//   if (subjectsLength === 0) {
//     return "No subjects";
//   }
//   return students.grade / subjectsLength;
// }

// console.log(Math.floor(getAvarage()));
// -------------------------------

// 5. Write a function that takes a string as input and returns the string
//  with all vowels replaced by the letter 'o'.

// function wovelReplace(string) {
//   let wovel = ["a", "e", "i", "o", "u"];
//   let characters = string.toLowerCase(string).split("");
//   for (let i = 0; i < characters.length; i++) {
//     if (wovel.includes(characters[i])) {
//       characters[i] = "o";
//     }
//   }
//   return characters.join("");
// }

// console.log(wovelReplace("helloAee"));

// ----------------------------------------------------------------

// 6. Create an object that represents a book with properties
// for title, author, and pages. Write a function that takes a book
// object as an argument and returns a string in the format
//  "title by author, pages pages"

// var book = {
//   title: "Hello World",
//   author: "Me",
//   pages: 365,
// };

// const bookInString = (book) => {
//   `${book.title}, ${book.author}, ${book.pages}`;
// };
// console.log(bookInString(book));
// ---------------------------------

//7. Write a function that takes an array of numbers as input and returns
// the sum of all numbers in the array.

// var arr = [1, 3, 4, 6, 7, 8, 9, 10];

// function sumArr(arr) {
//   let sum = 0;
//   for (i of arr) {
//     sum += i;
//   }
//   console.log(sum);
// }
// sumArr([1, 3, 4, 6, 7, 8, 9, 10]);
// --------------------------
// 8. Create an object that represents a restaurant with
// properties for name, menu (an array of objects with properties
//  for item and price), and vegan (a boolean indicating if the restaurant
// serves vegan options). Write a function that takes a restaurant
//  object as an argument and returns a string listing all menu items and prices.

// restaurant = {
//   name: "Uzbegim",
//   menu: [
//     { item: "Chuchvara", price: 10_000 },
//     { item: "Sup", price: 12_000 },
//     { item: "Kebab", price: 15_000 },
//   ],
//   vegan: true,
// };
// function resMenu(restaurant) {
//   let result = "";
//   for (let i = 0; i < restaurant.menu.length; i++) {
//     let name = restaurant.name;
//     let item = restaurant.menu[i].item;
//     let price = restaurant.menu[i].price;
//     result += item + " = " + price;
//   }
//   return result;
// }
// console.log(resMenu(restaurant));
// ----------------------------------------------------------------
// 9. Write a function that takes a string as input and returns true
// if the string is a palindrome, false otherwise.

// function isPalind(str) {
//   let length = str.length;
//   let middlen = Math.floor(length / 2);

//   for (let i = 0; i < middlen; i++) {
//     if (str[i] !== str[length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPalind("kokat"));
// ------------------------------------
// Array\

// 1. Create an array of numbers and return the sum of all elements.

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 10];
// console.log(sumArr(array));
// function sumArr(array) {
//   let total = 0;
//   for (i of array) {
//     total += i;
//   }
//   return total;
// }

// --------------------------

// 2. Create an array of strings and return the length of the longest string.

// let stringArr = ["hello", "at", "from", "uzbekistan"];

// function longestString(str) {
//   let longest = 0;
//   for (let i of str) {
//     if (i.length > longest) {
//       longest = i.length;
//     }
//   }
//   return longest;
// }

// console.log(longestString(stringArr));
// ------------------------------------

// 3. Create an array of numbers and find the average of all elements.

// let numbers = [50, 20, 60, 40, 10];

// function findAverage(numbers) {
//   let average = 0;
//   for (let i of numbers) {
//     average += i;
//   }
//   let findav = average / numbers.length;
//   return findav;
// }
// console.log(findAverage(numbers, "average"));
// ------------------------------------------
// 4. Create an array of objects with key-value pairs and
// filter out objects with a specific key-value pair.
// ///////???????????????????????????????

// 5. Create an array of numbers and find the maximum value in the array.
// let array = [2, 5, 6, 9, 99, 30, 70, 50];

// function findMaxValue(array) {
//   let max = Math.max(...array);
//   let min = Math.min(...array);
//   if (max > min) {
//     return `'The max amount in this array is ${max}', 'the minimum is  ${min}'`;
//   }
// }
// console.log(findMaxValue(array));
let array = [2, 5, 6, 9, 99, 30, 70, 50];
let max = array[0];
var findMaxValue = function (array) {
  for (i of array) {
    if (i > max) {
      max = i;
    }
  }
  return max;
  //   return max;
};
console.log(findMaxValue(array));

// ---------------------- //
// 6. Create an array of strings and sort the array in alphabetical order.

// let array = ["arabboy", "doniyor", "ali", "bobur"];

// const arraySort = (array) => array.sort((a, b) => a.localeCompare(b));
// console.log(arraySort(array));
