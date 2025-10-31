// 1

// const { use } = require("react")

// const car = {
//     brand: "Toyota",
//     model: "Estima",
//     year: 2012,
// }
// console.log (car.brand)

// 2

// const person = {
//   firstname: "John",
//   lastname: "Doe",
//   age: 37,
//   getfullname: function(){
//     return this.firstname + " " + this.lastname;
//   }
// };
// console.log (person.getfullname())

// delete person.age;
// person.city = "LA";
// person.position = "CEO";
// person.isMarried = false;

// console.log (person.lastname, person.age, person.position, person.status)

// 4

// const movie = {
//     title: "LOTR",
//     director: "Peter Jackson",
//     year: 2001,
//     genre: "Fantasy",
// }

// console.log(Object.keys(movie))
// console.log(Object.values(movie))

// 5

// const address = {
//   street: "CHD",
//   city: "UB",
//   zipCode: "00976",
// };

// const student = {
//   name: "Mike",
//   age: "12",
//   address: address,
//   getAddress: function () {
//     return this.address;
//   },
// };

// console.log(student.getAddress());

// 6

// const user = {
//     name: "Mike",
//     age: 30,
//     greet: function (){
//         return "hello" + " " + this.name;
//     },
//     updateName: function(newName){
//         this.name = newName
//     },
// }
// user.updateName("Micheal")
// console.log(user.greet());

// 7

// const book1 = {
//     title:"HA HA HA HA",
//     author:"Joker",
//     year:"2003",
// }

// const book2 = {
//     author:"Joker",
//     description:"nadkln dnaionn idbnaio ndian",
//     category:"Action",
//     year:"2003",
// }
// function mergeBooks(a, b){
//        return  Object.assign (a, b)
// }
// console.log (book1);
// console.log (mergeBooks(book1, book2));

// 8

// const config = {
//     host:"dhsp",
//     port:"fkna",
//     protocol:"kgvv;,mvoejgvmoejfg",
// }

// Object.freeze(config)

// config.host = "qwerty"
// delete config.port

// console.log(config)

// *

// const config = {
//     host:"dhsp",
//     port:"fkna",
//     protocol:"kgvv;,mvoejgvmoejfg",
// }

// Object.seal(config)

// config.host = "qwerty"
// delete config.port

// console.log(config)

// 9

// const user = {
//     name: "Mike",
//     age: 25,
//     gender: "male",
// }
// console.log(Object.entries(user));

// 10

const class1Students = [
  { name: "Bolor", grade: 95 },
  { name: "Anu", grade: 87 },
  { name: "Temuujin", grade: 78 },
  { name: "Delger", grade: 83 },
  { name: "Zolzaya", grade: 92 },
];
// // Дундаж Оноо Тооцох (calculateAverage)

// const calculateAverage = (students) => {
//   const studentsArr = Object.values(students);
//   let totalGrade = 0;
//   for (let x = 0; x < studentsArr.length; x++) {
//     totalGrade = totalGrade + studentsArr[x].grade;
//   }
//   return totalGrade / studentsArr.length;
// };

// const findAboveAverageStudents = (students) => {
//   const average = calculateAverage(students);
//   return(average)
// };

// console.log(findAboveAverageStudents(class1Students));
let avGrade = 0;
class1Students.forEach((average) => {
  average = avGrade += average.grade / class1Students.length;
});
console.log(avGrade);

// Дунджаас Дээш Оноотой Оюутнуудыг Олох Функц
// (findAboveAverageStudents)

console.log(
  class1Students
    .filter((avUnder) => (avUnder = avUnder.grade >= avGrade))
    .map((item) => item.name)
);

// Хамгийн Өндөр Оноотой Оюутан Олох Функц
// (findHighestScoreStudent)

console.log(
  class1Students
    .filter((over) => (over = over.grade >= 93))
    .map((over) => (over = over.name))
);

// Хамгийн Бага Оноотой Оюутан Олох Функц
// (findLowestScoreStudent)

console.log(
  class1Students
    .filter((under) => (under = under.grade <= 80))
    .map((under) => (under = under.name))
);
