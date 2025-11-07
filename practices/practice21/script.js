class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}

// const rect = new Rectangle (5, 3);
// console.log(rect.area());
// console.log(rect.perimeter());

const height = document.getElementById("height");
const width = document.getElementById("width");
const infoDiv = document.getElementById("hariu");
const Area = () => {
  const rect = new Rectangle(parseInt(height.value), parseInt(width.value));
  const area = document.createElement("div");
  area.innerHTML = "<p>" + "Area: " + rect.area() + "</p>";
  infoDiv.appendChild(area);
};

const perimeter = () => {
  const rect = new Rectangle(parseInt(height.value), parseInt(width.value));
  const perimeter = document.createElement("div");
  perimeter.innerHTML = "<p>" + "Perimeter: " + rect.perimeter() + "</p>";
  infoDiv.appendChild(perimeter);
};

class Student {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  introduce() {
    return (
      "Hi," + " I'm " + this.name + " and " + "I'm " + this.age + " years old."
    );
  }
}

const name2 = document.getElementById("name");
const age = document.getElementById("age");
const output = document.getElementById("intro");

const greet = () => {
  const student = new Student(name2.value, age.value, output.value);
  output.innerHTML = "<p>" + "introduce: " + student.introduce() + "</p>";
};

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  deposit(value) {
    this.balance = this.balance + value
    return this.balance + value;
    // return `zolboobagsh`;
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
  getAccountInfo() {
    return `Owner: ${this.owner} Balance: ${this.balance}`;
  }
}

const owner = document.getElementById("owner");
const amount = document.getElementById("amount");
const hariu2 = document.getElementById("hariu2");
const createBtn = document.getElementById("createBtn");
const accountElement = document.getElementById("account");
const actionInput = document.getElementById("actionInput");

let account = null;

const checkAccount = () => {
  if (account === null) {
    accountElement.innerText = "Create an account first"
  }
}

const displayBalance = () => {
  accountElement.innerText = account.getAccountInfo();
};

const createAccount = () => {
  if (owner.value === "") return;
  if (amount.value === "") return;
  account = new BankAccount(owner.value, parseInt(amount.value));
  displayBalance();
};
createBtn.addEventListener("click", createAccount);

const deposit = () => {
  checkAccount()
  if (actionInput.value === "") return;
  account.deposit(parseInt(actionInput.value, 10));
  displayBalance();
  actionInput.value = ""
};

const withdraw = () => {
  checkAccount()
  account.withdraw(parseInt(actionInput.value, 10))
  displayBalance();
  actionInput.value = ""
}

// const account = new BankAccount("Snow", 100);
// console.log(account.owner + " " + account.withdraw(0));
// // console.log(account.owner + " " + account.getBalance())

// class ToDoList{
//   constructor (tasks){
//     this.tasks = [];
//   }
//   addTask(task){
//     this.tasks.push(task);
//   }
//   removeTask(task){
//     const index = this.tasks.indexOf(task);
//     this.tasks.splice(index, 1);
//   }
//   showTasks(){
//     return this.tasks;
//   }
// }
// const todo = new ToDoList();
// todo.addTask("Learn JavaScript");
// todo.addTask("Do homework");
// todo.addTask("Play basketball");
// todo.removeTask("Do homework");
// console.log(todo.showTasks());

// class Calculator {
//   constructor(a, b){
//     this.a = a;
//     this.b = b;
//   }
//   add(){
//     return this.a + this.b;
//   }
//   subtract(){
//     return this.a - this.b;
//   }
//   multiply(){
//     return this.a * this.b;
//   }
//   divide(){
//     if ( this.b === 0){
//       return "Cannot divide by zero!"
//   } else {
//     return this.a / this.b;
//   }
// }};

// const calc = new Calculator (10, 2);
// // console.log(calc.add());
// // console.log(calc.subtract());
// // console.log(calc.multiply());
// console.log(calc.divide());
