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

// const rect = new Rectangle (5, 3);
// console.log(rect.area());
// console.log(rect.perimeter());


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
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }
    deposit(value){
        return this.balance + value; 
    }
    withdraw(value){
        if(value < 0)
            {return "not enough money"}
        return this.balance - value;
    }
    getBalance(){
        return this.balance;
    }
}

const account = new BankAccount ("Snow", 100)
console.log(account.owner + account.withdraw(120));