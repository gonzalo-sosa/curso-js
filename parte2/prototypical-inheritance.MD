# Prototypical Inheritance

Evitar los métodos duplicados, para esto se crea una clase base con los métodos a heredar por otros objetos.

Importante reiniciar el constructor del objeto hijo luego de modificar su prototipo.

```js
// Objeto Padre
function Shape(){
  //...
}

// Método a heredar
Shape.prototype.getLocation = function(){
  //...
}

// Objeto Hijo
function Circle(radius){
  //...
}

Circle.prototype = Object.create(Object.prototype); // Por defecto hereda de Object
Circle.prototype = Object.create(Shape.prototype); // Hereda de Shape
Circle.prototype.constructor = Circle; // Reiniciar el constructor del objeto Circle

const c1 = new Circle(1);
c1.getLocation();
```

## Calling the Super Constructor

```js
function Shape(color){
  this.color = color;
}

function Circle(radius, color){
  Shape.call(this, color); // Llamar al constructor de Shape y enviarle el argument color

  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

const c1 = new Circle(2, 'red');
```

## Intermediate Function Inheritance

Funciones que estandarizan el proceso de herencia en objetos, esto para evitar errores al momento de modificar objetos para que hereden de otros.

```js
// Esta función espera dos Constructor Function como argumentos
function extend(Child, Parent){
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}
```

Definida la función, ahora los objetos Child se modificarán para que hereden de Parent.

```js
function Shape(color){
  // ...
}

function Square(side, color){
  //...
}

extend(Square, Shape); // <-- Ahora Square es hijo de Shape
```

## Method Overriding

Sobrescribir métodos heredados.

```js
function Shape(color){
  this.getLocation = function(){
    //...
  }
}

function Square(side, color){
  // ...
}

extend(Square, Shape);

Square.prototype.getLocation = function() {
  // Shape.prototype.getLocation()
  Shape.prototype.getLocation.call(this); // llamar al método del padre

  // modificar método heredado
}
```

## Polymorphism

Objetos que heredan los mismos métodos pero que al modificar el comportamiento estos pueden ser llamados sin importar la implementación utilizada.

```js
function Shape(color){
  // ...
  this.getLocation: function(){
    //...
  }
};

function Circle(radius, color){
  // ...
};

function Square(side, color){
  // ...
};

extend(Circle, Shape);
extend(Square, Shape);

Circle.prototype.getLocation = function(){
  // sobrescribir
}

Square.prototype.getLocation = function(){
  // sobrescribir
}
```

Itero sobre los objetos de shapes y llamo al método "getLocation"

```js
const shapes = [
  new Circle(3, 'blue'), new Square(4, 'red')
]

for(let shape of shapes){
  shape.getLocation() // llama al método sin importar que su implementación sea diferente en Circle o Square
}
```

## Mixins

Permite la composición para crear objetos y evitar herencias complejas que deben de ser modificadas al agregar objetos que no cumplan con ciertos métodos.

```js
const canEat = {
  eat: function(){
    this.hunger--;
    console.log('eating');
  }
};

const canWalk = {
  walk: function(){
    console.log('walk');
  }
};

const person = Object.assign({}, canEat, canWalk);

console.log(person); // { eat, walk }
```

Otra forma de hacerlo.

```js
function Person(){
  // ...
};

Object.assign(Person.prototype, canEat, canWalk);

const person1 = new Person();

console.log(person1); // { eat, walk }
```

Se pueden combinar de distintas formas.

```js
const canSwim = {
  swim: function(){
    console.log('swim')
  }
};

function Fish(){
  // ...
};

Object.assign(Fish.prototype, canEat, canSwim);

const fish = new Fish();

console.log(fish); // { eat, swim }

```

Se puede estandarizar el proceso de combinar objetos a través de una función que lo realice.

```js
// Recibe el prototype y los objetos a través del spread operator, esto para recibir más de uno
function mixin(target, ...sources){
  Object.assign(target, ...sources);
}

```
