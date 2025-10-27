// 1 Sum Until Negative

// const nums = [4, 7, 10, -3, 6, 9];
// let sum = 0;
// for (let a = 0; 0 < nums.length; a++){
//     if (nums[a] < 0){
//         break;
//     } else {
//         sum += nums[a];
//     }
// } console.log (sum);

// 2 Count True Value Indexes
// const bools = [true, false, true, true, false, false, true];
// let i = 0;
// let sum = 0;

// while (i < bools.length){
//     if(bools[i] === true){
//         sum = sum + 1;

//     } i++;
// } console.log(sum);
// console.log(bools)

// 3 Reverse Array (Manually)
// const arr = [1, 2, 3, 4, 5, "yes", "noo"];
// arr5.reverse ();
// console.log (arr5)
// const arrReversed = [];
// for (let x = 0; x <arr.length; x++){
//     console.log(arr.length - x - 1);
//     arrReversed.push(arr[arr.length - x - 1]);
//     }
//     console.log (arrReversed);

// 4 Students Above Threshold (>= 65)
// const students = [
//   { name: "Alice", score: 85 },
//   { name: "Bob", score: 58 },
//   { name: "Charlie", score: 90 },
// ];
// const list = [];
// let i = 0
// for (let i = 0; i < students.length; i++){
//     if (students[i].score >= 65){
//         list.push(students[i].name)
//     }
// }
// console.log(list)

// 5 Total Price Calculator
// const cart = [
//   { name: "Apple", price: 2, quantity: 3 },
//   { name: "Banana", price: 1, quantity: 5 },
// ];
//  let totalPrice = 0
//  let i = 0
//  for (let i = 0; i < cart.length; i++){
// console.log (cart[i].price * cart[i].quantity)
// totalPrice = (totalPrice + cart[i].price * cart[i].quantity)
//  }

//  console.log (totalPrice)

// 6 Average Age Calculator
// const people2 = [
//   { name: "Tom", age: 20 },
//   { name: "Jerry", age: 25 },
//   { name: "Spike", age: 30 },
// ];
// let i = 0
// let Average = 0
// for (let i = 0; i < people2.length; i++){
//     Average += people2[i].age
// }
// console.log(Average/3)

// // 7 Remove Duplicates
// const dupArr = [1, 2, 2, 3, 4, 4, 5];
// const arr2 = [];
// for (let x = 0; x < dupArr.length; x++) {
//   if (!arr2.includes(dupArr[x])) {
//     arr2.push(dupArr[x]);
//   }
// //   console.log(arr2)
// }

// console.log(arr2);

// or

// const dupArr = [1, 2, 2, 3, 4, 4, 5, 4, 2];
// // dupArr.sort();
// const arr2 = [];
// for (let i = 0; i < dupArr.length; i++) {
//   if (dupArr[i] === dupArr[i + 1]) {
//   } else {
//     arr2.push(dupArr[i])
//   }
// //   console.log(arr2)
// }

// console.log(arr2);

// 8 Longest Word
const sentence = "JavaScript is awesome and powerful";
const splittArr = sentence.split(" ");
let maxWord = 0;
console.log(splittArr);
for (let i = 0; i < splittArr.length; i++) {
  if (splittArr[maxWord].length < splittArr[i].length) {
    maxWord = i;
  }
}
console.log(splittArr[maxWord]);

// 9 Find Most Expensive Product
// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Mouse", price: 25 },
//   { name: "Phone", price: 700 },
// ];
// Your code here
