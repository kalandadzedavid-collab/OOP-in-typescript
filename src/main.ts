import "./style.css";

let name: string = "Dato";

console.log(name);

class Person {
  name: string;
  surname: string;
  age: number;

  constructor(name: string, surname: string, age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  getFullName() {
    return `I am ${this.name} ${this.surname}, ${this.age} years old`;
  }
}

const person1 = new Person("dato", "kala", 24);

console.log(person1);

const person2 = new Person("giorgi", "fef", 103);

console.log(person2);

interface BankAccount {
  balance: number;
  deposit(amount: number): void;
  withdraw(amount: number): void;
}

class CurrentAccount implements BankAccount {
  balance: number;

  readonly overdraft: number = 1000;

  constructor(balance: number) {
    this.balance = balance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
  }
}

class SavingAccount implements BankAccount {
  balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  getBalance(): void {
    console.log(` you have ${this.balance}$ on balance`);
  }

  deposit(amount: number): void {
    this.balance += amount + amount * 0.002;
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
  }
}

const CurrentAccount1 = new CurrentAccount(100000);

CurrentAccount1.withdraw(300);
console.log(CurrentAccount1);
CurrentAccount1.withdraw(700);
console.log(CurrentAccount1);

const SavingAccount1 = new SavingAccount(100);

SavingAccount1.getBalance();

SavingAccount1.deposit(1000);

SavingAccount1.getBalance();

abstract class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(): void {
    console.log(`${this.name} moves`);
  }

  abstract voice(): void;
}

class Dog extends Animal {
  voice(): void {
    console.log(`${this.name} is barking`);
  }
}

class Cat extends Animal {
  voice(): void {
    console.log(`${this.name} is meowing`);
  }
}

class Bunny extends Animal {
  voice(): void {
    console.log(`${this.name} is jumping`);
  }

  override move(): void {
    console.log(`${this.name} is hopping`);
  }
}

const jeka = new Dog("jeka");

jeka.voice();

const molly = new Cat("molly");

molly.voice();

const fluffy = new Bunny("fluffy");

fluffy.voice();
fluffy.move();

class User {
  name: string;
  surname: string;
  private id: string;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
    this.id = crypto.randomUUID();
  }

  getid(): void {
    console.log(`id is ${this.id}`)
  }
}

const user1 = new User("tornike", "kapanadze")

console.log(user1.name)

abstract class Car {
 
  model: string
  year: number
  color: string
  speed: number

  constructor( model: string, year: number, color: string, speed: number){
    this.model = model
    this.year = year
    this.color = color
    this.speed = speed
  }

  start(): void {
    
  };
  stop(): void {
    
  }
}

class Mercedes extends Car {
  start(): void {
    console.log(`starting ${this.model}`)
  }

  stop(): void {
    console.log(`stopping ${this.model}`)
  }
}

const eClass = new Mercedes("E-class", 2001, "white", 320)

eClass.start()


document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<h1>hello</h1>
`;
