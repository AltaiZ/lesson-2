// class Rectangle {
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }

//     area (){
//         return this.width * this.height;
//     }

//     perimeter(){
//         return 2*(this.width + this.height);
//     }
// }

// // const rect = new Rectangle (5, 3);
// // console.log(rect.area());
// // console.log(rect.perimeter());

// const height = document.getElementById("height");
// const width = document.getElementById("width");
// const infoDiv = document.getElementById("hariu");
// const Area = () => {
//   const rect = new Rectangle(height.value, width.value);
//   const area = document.createElement("div");
//   area.innerHTML = "<p>" + "Area: " + rect.area() + "</p>";
//   infoDiv.appendChild(area)
// };

// const perimeter = () => {
//   const rect = new Rectangle(height.value, width.value);
//   const perimeter = document.createElement("div");
//   perimeter.innerHTML = "<p>" + "Perimeter: " + rect.perimeter() + "</p>";
//   infoDiv.appendChild(perimeter)
// };

// class Student {
//     constructor(name, age, gender){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//     introduce(){
//         return "Hi," + " I'm " + this.name + " and " + "I'm " + this.age + " years old." + " gender" + this.gender
//     }
// }

// const student = new Student("Snow", 20, " male")
// console.log(student.introduce());

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  deposit(value) {
    return this.balance + value;
  }
  withdraw(value) {
    if (this.balance < value) {
      return "not enough money";
    } else {
      return this.balance - value;
    }
  }
  getBalance() {
    return this.balance;
  }
}

const account = new BankAccount("Snow", 100);
console.log(account.owner + " " + account.withdraw(0));
// console.log(account.owner + " " + account.getBalance())

const balance = document.getElementById("Balance");
const withDepo = document.getElementById("WithDepo");
const infoDiv = document.getElementById("hariu");
const Area = () => {
  const rect = new Rectangle(height.value, width.value);
  const area = document.createElement("div");
  area.innerHTML = "<p>" + "Area: " + rect.area() + "</p>";
  infoDiv.appendChild(area)
};
