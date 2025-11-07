// // ==========================
// // Exercise 1 — map
// // ==========================
// // Given the array of numbers, return a new array where each number is doubled.
// const numbers1 = [2, 5, 8, 10];
// console.log(numbers1.map((number) => number * 2));

// // ==========================
// // Exercise 2 — filter
// // ==========================
// // From the array below, return only the even numbers.
// const numbers2 = [3, 6, 9, 12, 15, 18];
// console.log(numbers2.filter((number) => number % 2 === 0));

// // // ==========================
// // // Exercise 3 — find
// // // ==========================
// // // Find the first object where age is greater than 25.
// const people1 = [
//   { name: "Alice", age: 21 },
//   { name: "Bob", age: 26 },
//   { name: "Charlie", age: 29 },
//   { name: "Diana", age: 19 },
// ];
// console.log(people1.find((people) => people.age > 25));

// // // ==========================
// // // Exercise 4 — some
// // // ==========================
// // // Check if there is at least one number greater than 100.
// const numbers3 = [10, 20, 45, 80, 99];
// console.log(numbers3.some((number) => number > 100));

// // // ==========================
// // // Exercise 5 — includes
// // // ==========================
// // // Check if the word "banana" exists in the array.
// const fruits = ["apple", "banana", "grape", "orange"];
// console.log(fruits.includes("banana"));

// // // ==========================
// // // Exercise 6 — map + filter
// // // ==========================
// // // First, filter numbers greater than 10, then map to their squares.
// const numbers4 = [3, 7, 12, 15, 20, 2];
// console.log(
//   numbers4.filter((number) => number > 10).map((number) => number * number)
// );

// //  // ==========================
// // // Exercise 7 — find + includes
// // // ==========================
// // // Find the first student whose name includes the letter "a".
// const students = ["John", "Mia", "Alex", "Eli", "Tom"];
// console.log(students.find((student) => student.includes("a")));

// // // ==========================
// // // Exercise 8 — filter + some
// // // ==========================
// // // From the array, return only users who have at least one skill equal to "Python".
// const users = [
//   { name: "Anna", skills: ["HTML", "CSS", "JS"] },
//   { name: "Ben", skills: ["Python", "C++"] },
//   { name: "Cara", skills: ["Go", "Rust"] },
//   { name: "Dan", skills: ["Python", "JS"] },
// ];
// const users12 = users.filter((user) =>
//   user.skills.some((skill) => skill === "Python")
// );
// console.log(users12);

// // // ==========================
// // // Exercise 9 — map + includes
// // // ==========================
// // // Create an array of booleans indicating whether each fruit name includes the letter "e".
// const fruits2 = ["apple", "pear", "kiwi", "plum"];

// fruits2
//   .map((fruit) => fruit.includes("e"))
//   .forEach((item, index) => item && console.log(fruits2[index], "fruitss"));
// // const getInclude = (word) => {
// //   const arr = word.map((fruit) => fruit.includes("e"));
// //   arr.forEach((item, index) => {
// //     if (item) {
// //       console.log(word[index]);
// //     }
// //   });
// // };

// // getInclude(fruits2);

// // // ==========================
// // // Exercise 10 — filter + find
// // // ==========================
// // // Filter people who are older than 20, then find the first one whose name starts with "C".
// const people2 = [
//   { name: 'Alice', age: 18 },
//   { name: 'Bob', age: 23 },
//   { name: 'Charlie', age: 30 },
//   { name: 'Clara', age: 25 }
// ];

// console.log(people2.filter((people) => people.age > 20) .find((people) => people.name.includes('C')))

// // // ==========================
// // // Exercise 11 — nested map + some
// // // ==========================
// // // Check if any order contains at least one item with a price greater than 100.
// const orders = [
//   { id: 1, items: [{ name: 'Book', price: 20 }, { name: 'Pen', price: 5 }] },
//   { id: 2, items: [{ name: 'Laptop', price: 1200 }, { name: 'Mouse', price: 40 }, { name: 'Headset', price: 400 } ] },
//   { id: 3, items: [{ name: 'Chair', price: 80 }] }
// ];

// // const highPrice =orders.some((order) => order.items.some(item => item.price >100));
// // console.log(highPrice)
// // console.log(orders.some((order)=>order.items.some((item)=> item.price > 100) ))
// const filteredOrders = orders.filter((order)=> order.items.some((item)=> item.price > 100))

// const filteredItems = filteredOrders.map((order)=> order.items.filter((item)=> item.price > 100).map
// ((item)=>item.name))

// console.log(filteredItems)
// // // ==========================
// // // Exercise 12 — filter + map + includes (challenging)
// // // ==========================
// // // From the array, return names of users who have "admin" in their roles.
// const accounts = [
//   { name: 'Eve', roles: ['user', 'editor'] },
//   { name: 'Mark', roles: ['admin', 'moderator'] },
//   { name: 'Sara', roles: ['guest'] },
//   { name: 'Paul', roles: ['user', 'admin'] }
// ];

// console.log(accounts.filter((account) => account.roles.includes('admin')).map((account) => account.name))

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const person = new Person("Snow", 22, "male");
person.greet();

class Student extends Person {
  constructor(name, age, gender, studentId) {
    super(name, age, gender);
    this.studentId = studentId;
  }

  study() {
    console.log(`${this.name} is studying. ID is ${this.studentId}`);
  }
}
const student = new Student("Snow", 22, "male", 11021023);
student.study();

class Item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  getTotalPrice() {
    console.log(`${this.name} ${this.price * this.quantity}`);
  }
}

const sub = new Item("keyboard", 25, 2);
const sub2 = new Item ("mouse", 40, 3)

sub2.getTotalPrice();

class Inventory {
  constructor(){
    
  }
}

