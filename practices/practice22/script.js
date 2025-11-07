// const colors = ["red", "green", "blue", "orange", "cyan", "pink", "black"];

// const main = document.getElementById("main");

// colors.forEach((color, index) => {
//   const colorElement = document.createElement("p");
//   colorElement.innerText = `${index + 1}. ${color}`;
//   colorElement.style.color = color;
//   colorElement.classList.add("Color");
//   main.appendChild(colorElement);
// });

 // ================================
// JS LOOPS PRACTICE EXERCISES
// ================================

// ===========================================
// 1. Print even numbers from 2 to 20 using a while loop
// ===========================================

// let i = 0
// while (i < 21){
//   console.log(i)
//   i= i+ 2
// }

// ===========================================
// 2. Print the multiplication table of 5 using a for loop
// ===========================================

// for (let a = 1; a <= 10; a++){
//   console.log(`${a} x 5 = ${a*5}`)
// }

// ===========================================
// 3. Sum numbers from 1 to 100 using a while loop
// ===========================================

// let sum = 0;
// let i = 1;

// while(i <= 100){
//   sum += i;
//   i++
// }
// console.log(sum)

// ===========================================
// 4. Print all elements of an array using a for loop
// const fruits = ["apple", "banana", "cherry", "date"];
// // // ===========================================

// for (let b = 0; b< fruits.length; b++ ){
//   console.log(fruits[b])
// }

// ===========================================
// 5. Find the largest number in an array using a for loop
// ===========================================
// const numbers = [12, 45, 67, 23, 89, 34];
// let max = 0;
// for (let i = 0; i < numbers.length; i++){
//   if (numbers[i] > max)
//   max = numbers[i];
//  }
//  console.log(max)

// ===========================================
// 6. Reverse an array using a while loop
// const arr = [1, 2, 3, 4, 5];
// // ===========================================

// arr.reverse();
// console.log(arr)

// ===========================================
// 7. Count down from 10 to 1 using a for loop
// ===========================================

// for(let i = 0; i <= 10; i++){
//   console.log(10 -i)
//   }

// ===========================================
// 8. Print only odd numbers between 1 and 20 using a while loop
// ===========================================

// let i = 1;
// while (i <= 20){
//   console.log(i)
//   i = i + 2 
// }

// ===========================================
// 9. Calculate the factorial of a number using a for loop
// Example: let num = 5;
// ===========================================

// let factorial = 1
// for (let a = 1; a <= 5; a++){
//   factorial *= a
// }
// console.log(factorial)

// ===========================================
// 10. Print each character of a string using a for loop
// let word = "JavaScript";
// // ===========================================
// for(let i = 0; i < word.length; i++){
//   console.log(word[i])
// }

// ===========================================
// 11. Keep asking for user input until they type "stop" (while loop)
while (true){
const input = prompt("")
if (input === "stop"){
  console.log("stopped")
  break;
}
}