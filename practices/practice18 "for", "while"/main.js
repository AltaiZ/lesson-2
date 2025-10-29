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