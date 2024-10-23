# Objetos en JS

## OPP

Paradigma orientado a objetos

## 4 pilares de OOP

1. Encapsulation: Agrupar variables y funciones relacionas(propiedades y métodos). Los métodos trabajan sobre las propiedades del mismo objeto y evitan interdependencia con otras funciones externas.
2. Abstraction: Oculta la implementación y expone sólo la información necesaria.
3. Inheritance: Herencia, elimina código redundante al definir objetos que heredan las propiedades y métodos de otros objetos(los copian).
4. Polymorphism: Muchas formas, se pueden acceder a las mismas propiedad y métodos de objetos diferentes pero que pertenecen al mismo tipo de objeto.

## Ventajas de OOP sobre Procedural

1. Encapsulation: Reduce complejidad e incrementa código reusable.
2. Abstraction: Reduce complejidad y aísla el impacto de cambios.
3. Inheritance: Elimina código redundante.
4. Polymorphism: Quita las sentencias de switch/case.

## Crear Objectos

```js
const circle = {
  radius: 1, // <-- Propiedad
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    // <-- Método
    console.log("draw");
  },
};

circle.draw(); // <-- Llamada al método
```

## Factories and Constructors

Simplifica la creación de objetos al estandarizar el tipo de objeto a crear.

Factory Function(Función de Fábrica)

1. Camel case
2. Función que retorna objeto
3. Puede recibir datos

```js
const createCircle(radius){
  return {
    radius, // <-- radius: radius
    location: {
      x: 1,
      y: 1
    },
    draw: function(){
      console.log('draw');
    }
  }
};

const circle = createCircle(2); // <-- circulo con radio 2
circle.draw();
```

Constructor Function

1. Pascal case
2. Crea un objeto con "new" --> {}
3. Utiliza "this" para apuntar al objeto "new" y no al global(window o global).
4. Puede recibir datos

```js
function Circle(radius){
  this.radius: radius
  this.location: {
    x: 1,
    y: 1
  },
  this.draw: function(){
    console.log('draw')
  }
}

const circle = new Circle(3) // circulo de radio 3
circle.draw()
```

Las funciones son objetos, es decir, tienen propiedades y métodos.

```js
function Circle(radius) {}

Circle.name; // "Circle"
Circle.length; // 1
Circle.constructor; // Function()
Circle.call({}, 1); // new Circle(1)
Circle.apply({}, [1]); // new Circle(1)

const Circle1 = new Function(
  "radius",
  `
  this.radius = radius;
  `
);
```

## Primitives and Reference Types

Primitives (copiados por valor)

1. Number
2. String
3. Boolean
4. Symbol
5. undefined
6. null

Reference Types (copiados por referencia)

1. Object
2. Function
3. Array

Las variables asignadas a objetos sólo tiene su referencia no sus valores, por lo que al modificar alguna de sus propiedades estas se modificaran en el objeto almacenado en memoria.

```js
let x = { value: 10 };
let y = x;

x.value = 20;
y.value; // <-- 20
```

## Working with Properties

Acceder a propiedades

```js
const circle = new Circle(10);
circle.location = { x: 1 }; // <-- Agrega la propiedad ya que no existía
circle["location"] = { x: 1 }; // Otra forma de acceder a la misma propiedad

const propertyName = "location";
circle[propertyName] = { x: 2 }; // Acceder a través de otra variable
```

Borrar propiedades

```js
delete circle.location;
```

Iterar Propiedades

```js
for (let key in circle) {
  console.log(key, circle[key]);
}

for (let key of Object.keys(circle)) {
  console.log(key);
}
```

Chequear si una propiedad existe

```js
if ("radius" in circle) {
  console.log("Circle has a radius");
}
```

## Private Properties

Ocultar las implementaciones al usuario, evitar que se accedan a propiedades y se utilicen métodos privados.

```js
function Circle(radius){
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0}; // <-- Privado

  let computeOptimumLocation = function(factor){
    // ...
  };

  this.draw = function(){
    computeOptimumLocation(0.1); // No necesita "this"

    console.log('draw');
  };
}

const circle = new Circle(1);
circle.radius // <-- Ok
circle.defaultLocation // <-- ERROR

```

## Getters / Setters

Getters: leer propiedades, son "readonly", es decir, que no permiten modificar su valor.

```js
function Circle(radius){
  // ...
  Object.defineProperty(this, 'defaultLocation', {
    get: function(){
      return defaultLocation;
    }
  });
}

circle.defaultLocation 
```

Setters: permiten modificar propiedades

```js
function Circle(radius){
  // ...
  Object.defineProperty(this, 'defaultLocation', {
    set: function(value){
      if(!value.x || !value.y)
        throw new Error('Invalid location.');

      defaultLocation = value;
    }
  });
}

circle.defaultLocation = { x: 1, y: 1}
```
