//Const & let
let name = "John";
name = "Jack";

const person = {
  name: "John",
  age: 33
};

person.name = "jack";

const nums = [1, 2, 3, 4];
nums.push(5, 6);

//Arrow functions

// function sayHello() {
//   console.log("Hello React");
// }

const sayHello = name => {
  console.log(`Hello ${name}`);
};

const fruits = ["Apples", "Oranges", "Grapes"];
// sayHello("Brad");

//Foreach

fruits.forEach((fruit, index) => {
  // console.log(fruit);
});

//Map
const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());

// console.log(singleFruit);

//Filter

const people = [
  { id: 1, name: "Kasun" },
  { id: 2, name: "Dasun" },
  { id: 3, name: "Wasun" }
];
const people2 = people.filter(person => person.id != 2);
// console.log(people2);

//Spread

const arr = [1, 2, 3];
const arr2 = [...arr, 4];
const arr3 = [...arr.filter(num => num !== 2)];
// const arr2 = [arr, 4];

// console.log(arr3);

const person1 = {
  name: "Brad",
  age: 36
};

const person2 = {
  ...person1,
  email: "brad@gmail.com"
};
// console.log(person2);

//Destructuring

const profile = {
  name2: "John Doe",
  address: {
    street: "11A, 1st Lane",
    city: "Pagoda, Nugegoda"
  },
  hobbies: ["movies", "music"]
};

const { name2, address, hobbies } = profile;
const { street, city } = profile.address;

// console.log(name2, address, hobbies[1]);
// console.log(street, city);

//CLass
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, My name is ${(this, name)} and I am ${this.age}`;
  }
}

const person11 = new Person("Brad", 33);
const person22 = new Person("Stacy", 22);

// console.log(person11, name);
// console.log(person22.greet());

//Subclasses

class Customer extends Person {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }

  info() {
    return `${this.name} owes $${this.balance}.00`;
  }
}

const customer1 = new Customer("Kevin", 32, 300);

// console.log(customer1.info());

//Modules
