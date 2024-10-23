// Functions Declarations vs Expressions

// Function Declaration
function walk() {
  console.log("walk");
}

// Anonymous  Function Expression - run tiene la referencia a la función anónima
let run = function () {
  console.log("run");
};

// Named Function Expression - fly tiene la referencia a la función fly
let fly = function fly() {
  console.log("fly");
};

// Hoisting -> mueve las funciones declaradas al principio del archivo para evitar problemas cuando se las llame

// Se puede llamar a la Function Declaration antes de crearla

move();

function move() {
  console.log("move");
}

// NO se puede llamar a una Function Expression antes de crearla

//hi(); // error

let hi = function () {
  console.log("hi");
};

// Arguments

function sum() {
  let total = 0;
  // todos los argumentos
  for (arg of arguments) {
    total += arg;
  }

  return total;
}

sum(1, 2, 3, 4, 5); // 15

// The Rest Operator - tiene que ser siempre el último parámetro

function mult(...args) {
  return args.reduce((prev, curr) => prev * curr, 1);
}

console.log(mult(1, 2, 3, 4));

function calculateDiscount(discount, ...prices) {
  const sum = prices.reduce((prev, curr) => prev + curr, 0);
  return sum * (1 - discount);
}

// Default Parameters - tiene que ser los último parámetros

// Por ejemplo interest(3,3) indica que years = 5
// interest(3, undefined, 3) rate = 3.5
function interest(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}

// Getters and Setters

const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== "string") throw new Error("Value is not a string.");

    const parts = value.split(" ");

    if (parts.length !== 2) {
      throw new Error("Enter a first and last name.");
    }

    [this.firstName, this.lastName] = parts;
  },
};

// Try and Catch

try {
  person.fullName = 5;
} catch (error) {
  console.error(error);
}

// Local vs Global Scope

function start() {
  const message = "hi";
}

console.log(message); // ERROR -> message undefined

// Let vs Var

// con var la variable es accesible por todo el scope {}

// window.scope
function scope() {
  for (var i = 0; i < 5; i++) {
    let sum = i;
  }
  console.log(i); // accesible
  console.log(sum); // NO accesible
}

// The this Keyword

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  play() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this); // <-- con this indicamos que el scope sea este objeto y no window
  },
};

video.stop = function () {
  console.log(this);
};

video.stop();

function playVideo() {
  console.log(this); // window en navegadores y global en node
}

// Changing This

const videoSelf = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    const self = this;
    this.tags.forEach(function (tag) {
      console.log(self.title, tag);
    });
  },
};

const videoBind = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag);
      }.bind(this)
    );
  },
};

// las funciones flecha heredan la referencia al objeto "this"
const videoArrow = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  },
};
