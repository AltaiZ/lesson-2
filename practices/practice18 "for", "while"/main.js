// const friuts = ["apple", "banana", "mango", "grape", "pear"];

// for (let i = 0; i < friuts.length; i++){
//   console.log (friuts[i])
// }

// friuts.forEach((friut) => {
//   console.log(friut)
//   });

// ===================== 1. MAP — double all numbers =====================
const nums1 = [1, 2, 3, 4];
/* TODO: use .map to create [2, 4, 6, 8] */

console.log(nums1.map((num) => num * 2));

// ===================== 2. MAP — return only string lengths =====================
const words1 = ["apple", "hi", "notebook"];
/* TODO: use .map to get [5, 2, 8] */

console.log(words1.map((word) => word.length));

// ===================== 3. FOR EACH — just log each item =====================
const movies = ["Inception", "Avatar", "Dune"];
/* TODO: use .forEach to console.log each movie */

movies.forEach((movie) => console.log(movie));

// ===================== 4. FILTER — keep only even numbers =====================
const nums2 = [3, 8, 11, 2, 9, 4];
/* TODO: use .filter to get [8, 2, 4] */

console.log(nums2.filter((num) => num % 2 === 0));

// ===================== 5. FILTER — words longer than 4 letters =====================
const words2 = ["cat", "giraffe", "sun", "planet"];
/* TODO: use .filter to get ["giraffe", "planet"] */

console.log(words2.filter((word) => word.length > 4));

// ===================== 6. FIND — first number > 10 =====================
const nums3 = [4, 9, 15, 8, 22];
/* TODO: use .find to return 15 */

console.log(nums3.find((num) => num > 10));

// ===================== 7. FIND — first string that includes "dog" =====================
const phrases = ["hotdog", "cat lover", "dog park", "bird"];
/* TODO: use .find to return "hotdog" */

const a = "hotdog";
a.includes("dog");
console.log(phrases.find((phrase) => phrase));

// ===================== 8. MAP + TEMPLATE — turn names into greetings =====================
const names = ["Alice", "Bob", "Charlie"];
/* TODO: use .map to output ["Hello Alice", "Hello Bob", ...] */

console.log(names.map((greet) => greet = "Hello" + " " + greet))

// ===================== 9. FILTER + MAP — adults' names only =====================
const people = [
  { name: "Mia", age: 17 },
  { name: "John", age: 21 },
  { name: "Sara", age: 25 },
];
/* TODO:
   1) filter only people age 18+
   2) then .map to return just their names
*/

const adults = people
  .filter((person) => person.age > 18)
  .map((adult) => adult.name);
console.log(adults);

// ===================== 10. FOR EACH — total up numbers manually =====================
const prices = [5, 10, 3];
let total = 0;
/* TODO: use .forEach to sum into total, then console.log(total) */

prices.forEach((sum) => (total = total + sum));
console.log(total);

// ===================== 6. FILTER + MAP — active users' emails =====================
const users2 = [
  { name: "Anna", email: "anna@mail.com", active: true },
  { name: "Tom", email: "tom@mail.com", active: false },
  { name: "Sara", email: "sara@mail.com", active: true },
];
/* TODO: filter active users then map to return an array of only their email addresses */

const activePerson = users2
  .filter((person) => person.active == true)
  .map((person) => person.name);
console.log(activePerson);

// ===================== 7. FIND — first product over $500 =====================
const expensiveProducts = [
  { name: "Phone", price: 499 },
  { name: "Gaming PC", price: 1500 },
  { name: "Tablet", price: 299 },
];
/* TODO: use find to return the first product with price > 500 */

console.log(expensiveProducts.find((over) => over.price > 500));

// ===================== 8. FOREACH — count total likes =====================
const posts = [
  { title: "Hello", likes: 10 },
  { title: "World", likes: 5 },
  { title: "JavaScript", likes: 20 },
];
let totalLikes = 0;
/* TODO: use forEach to add all likes into totalLikes */

posts.forEach((post) => {
  totalLikes = totalLikes + post.likes;
});
console.log(totalLikes);

// ===================== 9. MAP — convert temperatures from C to F =====================
const tempsC = [0, 20, 30];
/* TODO: return a new array where each number is converted to Fahrenheit (C * 9/5 + 32) */

console.log(tempsC.map((fahr) => fahr = fahr * 9/5 + 32))

// ===================== 10. FILTER — only usernames with length >= 5 =====================
const usernames = ["alex", "jonathan", "mia", "stephanie"];
/* TODO: filter to return only usernames with 5 or more characters */

console.log(usernames.filter((name)=> name = name.length >= 5));

// // ===================== 1. MAP — add fullName property to users =====================
const users1 = [
  { first: "John", last: "Doe" },
  { first: "Jane", last: "Smith" }
];
// /* TODO: use map to return a new array where each object gains a fullName like "John Doe" */

console.log(users1.map((fullname) => fullname.first + " " + fullname.last))

// // ===================== 2. FILTER — get products in stock & price > 20 =====================
const products = [
  { name: "Keyboard", price: 30, inStock: true },
  { name: "Mouse", price: 15, inStock: true },
  { name: "Laptop", price: 900, inStock: false }
];
// /* TODO: use filter to return only products that are inStock and price > 20 */

console.log(products.filter((get) => get.inStock == true) .filter((get) => get = get.price > 20) .map((get) => get.name));

// // ===================== 3. FIND — get first student with grade A =====================
const students = [
  { name: "Mia", grade: "B" },
  { name: "Leo", grade: "A" },
  { name: "Zoe", grade: "A" }
];
// /* TODO: use find to get the first student with grade "A" */

console.log(students.find((first) => first= first.grade == "A" ))

// // ===================== 4. FOREACH — log product names with index =====================
const productNames = ["Keyboard", "Mouse", "Laptop"];
// /* TODO: use forEach to console.log each item like: "1. Keyboard" */

productNames.forEach((names,index) => console.log(index + 1, names) );

// // ===================== 5. MAP — apply 10% discount to product prices =====================
const pricess = [100, 50, 200];
// /* TODO: use map to return a new array with each price 10% lower */ 

console.log(pricess.map((discount) => discount = discount - (discount / 100 ) * 10));

// ===============================================
//  Advanced JS Exercises — forEach, map, filter, find, includes
// ===============================================

// ========== Exercise 1 ==========
// Return all numbers that are multiples of 3 AND 5, then double them.
const numbers1 = [3, 5, 10, 15, 18, 20, 30, 33];
// Expected: [30, 60]
// Your code here 


// // ========== Exercise 2 ==========
// // From the following array, return usernames that include "dev" (case-insensitive).
// const usernames = ["AlphaDev", "beta", "DEVKing", "coder", "proDev99"];
// // Expected: ["AlphaDev", "DEVKing", "proDev99"]
// // Your code here 



// // ========== Exercise 3 ==========
// // Given an array of strings, return a new array with the lengths of words
// // that start and end with the same letter (case-insensitive).
const words12 = ["level", "Anna", "world", "radar", "Robot"];
// // Expected: [5, 4, 5]
// // Your code here 👇


console.log(words12.map((word) => word.length));

// // ========== Exercise 4 ==========
// // From the given products, return names of items cheaper than $50 and include "s" in the name.
// const products = [
//   { name: "Socks", price: 15 },
//   { name: "Shoes", price: 75 },
//   { name: "Shirt", price: 45 },
//   { name: "Hat", price: 30 },
// ];
// // Expected: ["Socks", "Shirt"]
// // Your code here 👇



// // ========== Exercise 5 ==========
// // Find the first student who has "Python" in their skills and age below 25.
// const students1 = [
//   { name: "Luna", age: 22, skills: ["Python", "C++"] },
//   { name: "Max", age: 26, skills: ["JavaScript", "HTML"] },
//   { name: "Tara", age: 21, skills: ["Python", "React"] },
// ];
// // Expected: { name: "Luna", ... }
// // Your code here 👇



// // ========== Exercise 6 ==========
// // Return an array of customer names who bought at least one item over $100.
// const customers = [
//   { name: "Alice", purchases: [20, 40, 55] },
//   { name: "Bob", purchases: [120, 15] },
//   { name: "Charlie", purchases: [10, 200, 30] },
// ];
// // Expected: ["Bob", "Charlie"]
// // Your code here 👇



// // ========== Exercise 7 ==========
// // Given a list of posts, return the titles of posts that have at least one tag including "js".
// const posts = [
//   { title: "Intro to Python", tags: ["python", "beginner"] },
//   { title: "JS Advanced", tags: ["javascript", "web", "frontend"] },
//   { title: "React Hooks", tags: ["react", "js", "frontend"] },
// ];
// // Expected: ["JS Advanced", "React Hooks"]
// // Your code here 👇



// // ========== Exercise 8 ==========
// // Use forEach to calculate total price of items with "premium" tag.
// const items = [
//   { name: "Basic Plan", price: 20, tags: ["basic"] },
//   { name: "Pro Plan", price: 50, tags: ["premium"] },
//   { name: "Enterprise", price: 120, tags: ["premium", "business"] },
// ];
// // Expected: 170
// // Your code here 👇



// // ========== Exercise 9 ==========
// // Filter out users with duplicate emails (case-insensitive).
// const users = [
//   { name: "Alex", email: "alex@mail.com" },
//   { name: "ALICE", email: "alice@mail.com" },
//   { name: "alex2", email: "Alex@mail.com" },
//   { name: "Tom", email: "tom@mail.com" },
// ];
// // Expected: remove alex2 (duplicate of alex)
// // Your code here 👇



// // ========== Exercise 10 ==========
// // Given people and their favorite fruits, return a list of names
// // who like BOTH "apple" and "banana".
// const fruitLovers = [
//   { name: "Emma", likes: ["apple", "pear"] },
//   { name: "Mia", likes: ["banana", "apple", "cherry"] },
//   { name: "Ethan", likes: ["banana", "grape"] },
// ];
// // Expected: ["Mia"]
// // Your code here 👇



// // ========== Exercise 11 ==========
// // From employees, return the *emails* of those who are managers or earn above average salary.
// const employees = [
//   { name: "A", role: "dev", salary: 4000, email: "a@work.com" },
//   { name: "B", role: "manager", salary: 6000, email: "b@work.com" },
//   { name: "C", role: "designer", salary: 7000, email: "c@work.com" },
//   { name: "D", role: "intern", salary: 2000, email: "d@work.com" },
// ];
// // Expected: ["b@work.com", "c@work.com"]
// // Your code here 👇



// // ========== Exercise 12 ==========
// // 🧠 Challenge: 
// // Given orders, return an array of customer names whose total spent > 100
// // and have bought at least one "electronic" item.
// const orders = [
//   { customer: "Alex", items: [{ name: "Book", category: "stationery", price: 30 }] },
//   { customer: "Nina", items: [{ name: "Phone", category: "electronic", price: 80 }, { name: "Case", category: "electronic", price: 30 }] },
//   { customer: "Toby", items: [{ name: "Lamp", category: "electronic", price: 40 }, { name: "Candle", category: "decor", price: 20 }] },
// ];
// // Expected: ["Nina"]
// // Your code here 👇



// // ===============================================
// // ✅ End of Advanced Exercises
// // ===============================================