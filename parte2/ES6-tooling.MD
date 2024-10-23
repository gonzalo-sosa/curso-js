# ES6 Tooling

## Modules

CommonJS en Node.js y ES6 Modules en el navegador.

1. Mantenibilidad del código
2. Reuso código
3. Abstracción de funciones

## CommonJS Modules

Agrupar funciones que se relacionen fuertemente en un archivo aparte. Por ejemplo, las clases pueden ser definidas en un archivo único por cada clase.

```js
// circle.js

// Implementation Detail
const_radius = new WeakMap();

// Public Interface
class Circle{
  //...
}


module.exports = Circle
```

```js
// main.js
require('./circle.js')

const c = new Circle(20);
```
