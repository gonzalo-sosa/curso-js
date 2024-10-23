# ES6 Classes

Utilizan las Constructor Functions por detrás para crear los objetos.

```js
class Circle{
  constructor(radius){
    this.radius = radius;
  }

  draw(){
    console.log('draw');
  }
}

const c = new Circle(2);

typeof Circle // "function"
```

## Hoisting

Las "Function Declarations" son colocadas al inicio del archivo para que se creen antes de ser llamadas y evitar que se llamen a funciones no creadas.

Las "Function Expressions" no se les aplica el Hoisting.

```js
// Class Declaration <-- Con Hoisting
class Circle{
  // ...
}

// Class Expression <-- Sin Hoisting
const Square = class {

}

```

## Static Methods

Métodos que no requieren una instancia del objeto para poder llamarlos.

```js
class Circle{
  // Método estático
  static parse(str){
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

const circle = Circle.parse('{ "radius": 1 }');
```

## This keyword

Hace referencia al objeto actual, al contexto actual. Por defecto "this" apunta al objeto global "Window" en navegadores y a "global" en Node.

```js
const Circle = function(){
  this.draw = function() { console.log(this) }
}

const c = new Circle(); // <-- new crea un {}  
// Method Call
c.draw(); // Circle

const draw = c.draw;

// Function Call
draw(); // Window
```

Si se utiliza el modo estricto de javascript "this" dejará de apuntar al objeto global y será undefined.

```js
'use strict'

draw(); // undefined
```

En las clases, el cuerpo de funciona con modo estricto.

```js
class Circle(){
  draw(){
    console.log(this);
  }
}

const c = new Circle();
const draw = c.draw;
draw(); // undefined
```

## Private Members using Symbols

La función "Symbol" devuelve un identificador único, de esta forma se pueden declarar propiedades que no pueden ser accedidas por el usuario.

```js
const _radius = Symbol();
class Circle(){
  constructor(radius){
    this[_radius] = radius;
  }
}
```

Para visualizar los símbolos de un objeto se utiliza:

```js
const c = new Circle(1);

Object.getOwnPropertySymbols(c); // [ Symbol() ]
```

Para los métodos se crea de la siguiente forma:

```js
const _draw = Symbol();

class Circle{
  // ...
  [_draw]{ // <-- [] indican que la expresión será evaluada antes de crear la función
    //...
  }
}

```

## Private Members Using WeakMaps

Un WeakMap es un mapa débil, es decir, que este objeto es candidato para ser recolectado como basura y liberar memoria.

Para declarar propiedades en objetos se realiza:

```js
const _radius = new WeakMap();

class Circle(){
  constructor(radius){
    _radius.set(this, radius)
  }

  draw(){
    console.log(_radius.get(this));
  }
}

const c = new Circle(2);
```

Y para los métodos:

```js
const _move = new WeakMap();

class Circle(){
  constructor(radius){
    _move.set(this, () => {
      console.log('move', this); // 'move' Circle
    })
  }

  up(){
    _move.get(this)();
    console.log('draw');
  }
}
```

## Getters and Setters

```js
const _radius = new WeakMap();

class Circle(){
  constructor(radius){
    _radius.set(this, radius)
  }

  // Palabra reservada get
  get radius(){
    return _radius.get(this);
  }

  // Palabra reservada set
  set radius(value){
    if(value <= 0) throw new Error("Invalidad radius.")
    _radius.set(this, value);
  }
}

const c = new Circle(21);
 
c.radius = 30; // Set -> 30
c.radius; // Get -> 30
```

## Inheritance

Heredar propiedades y métodos de clases padre.

```js
class Shape{
  constructor(color){
    this.color = color;
  }

  move(){
    console.log("move")
  }
}

class Circle extends Shape{
  constructor(color, radius){
    super(color) // llamada al constructor padre
    this.radius = radius;
  }
  
  draw(){
    console.log("draw")
  }
}

const c = new Circle('red', 10);
c.move(); // método heredado
```

## Method Overriding

```js
class Shape{
  move(){
    console.log("move")
  }
}

class Circle extends Shape{
  // Sobrescritura de método "move"
  move(){
    super.move(); // llamada al método move de Shape
    console.log("move")
  }
}
```
