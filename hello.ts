class Greeting {
  constructor(public message: string) {

  }

  sayHi() {
    return `Hello, ${this.message}!`;
  }
}

// ----------

const myGreeter = new Greeting("Donald");
const otherGreeter = new Greeting("Céline");

console.log(myGreeter.message);

console.log(otherGreeter.sayHi());
console.log(myGreeter.sayHi());
