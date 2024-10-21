// Factory Function - camel case

function createCircle(radius, location, isVisible) {
  return {
    radius: radius ?? 1,
    location: location ?? {
      x: 1,
      y: 1,
    },
    isVisible: isVisible ?? true,
    draw() {
      console.log("draw");
    },
  };
}

console.log(createCircle(2, { x: 1 }, false));

// Constructor Function - pascal

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

console.log(new Circle(1));

// Las propiedades(atributos y métodos) de los objetos  son dinámicos
// Se pueden agregar a través de acceder a estos con "."

const circle = {
  radius: 1,
};

circle.color = "yellow"; // no da error

console.log(circle);

// Para borrar se utiliza "delete"

delete circle.color;

console.log(circle);

//  Constructos de tipos

new String();
new Boolean();
new Number();

// Los objetos tienen un constructor creado de forma dinámica

console.log(circle.constructor); // Function: Object

/*

Las funciones que utilizan "this" son objetos

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

Se puede acceder a su constructor
*/

console.log(Circle.constructor); // Function: Function

// Constructor Function - las funciones son objetos

const CircleFn = new Function(
  "radius",
  `
  this.radius = radius;
  this.draw = function(){
    console.log('draw');
  }
`
);

console.log(new CircleFn(10));

// Método call

Circle.call({}, 1); // new Circle(1)

// Método apply

Circle.apply({}, [1]); // new Circle(1)

// Value | Reference

// Al asignar un objeto a una variable el valor es la dirección de memoria en la cual reside el objeto, es decir, su referencia

let x = { value: 20 };
let y = x;

x.value = 10;

console.log(x, y); // { value: 10 }, { value: 10 }

// Los objetos NO son iterables pero sus keys si

for (const key in circle) {
  console.log(key, circle[key]);
}

// ERROR
// for (const val of circle) {
//   console.log(val);
// }

// Object.keys devuelve las key del objeto
for (let key of Object.keys(circle)) {
  console.log(key);
}

// Object.entries devuelve una colección de arrays donde la primera posición en el atributo en formato string y la segunda posición en el valor de esa propiedad
for (let entry of Object.entries(circle)) {
  console.log(entry);
}

if ("radius" in circle) console.log("yes");

// Cloning Objects

const copy = Object.assign({ color: "red" }, circle); // Agrega todas las propiedades de circle en {} y devuelve el objeto

console.log(copy);

const another = { ...circle }; // Copiar con spread operator

console.log(another);

// Garbage Collector - al igual que en Java no es necesario liberar la memoria de objetos que ya no se utilicen ya que el Garbage Collector lo hará por nosotros

// Math Object

Math.random(); // entre 0 y 1

function getRandom(min = 0, max = 1) {
  return Math.radius() * (max - min) + min;
}

Math.round(1.9); // 2

Math.max(1, 23, 4); // 23

Math.min(-4, 2, 3); // -4

// String Object

const message = "este es un mensaje secreto"; // new String("este es un mensaje secreto")

message.length;

message[0]; // "e"

message.includes("es"); // true

message.startsWith("este"); // true - case sensitive

message.endsWith("secreto"); // true

message.indexOf("es"); // 5

message.replace("este", "este no");

message.toUpperCase();

message.toLowerCase();

message.trim(); // quita los espacios en blanco al principio y al final

// 'string con comillas \'simples\' '

message.split(" "); // retorna un array con cada palabra

// Template Literals ``

const saludo = "Hasta la próxima.";

const messageLiteral = `Este es un mensaje 
con 'saltos' de línea
${saludo}`;

console.log(messageLiteral);

// Date Object

const now = new Date();

const date1 = new Date("May 11 2018 09:00"); // Formato de fecha

const date2 = new Date(2018, 11, 25, 0, 0); // 25 de diciembre de 2018 a las 00:00

now.toISOString(); // Formato para webs
