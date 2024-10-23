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

## ES6 Modules

Se utiliza la palabra reservada "import" y se abren llaves para traer los módulos exportados.

```js
import { Circle } from './circle.js'

const c = new Circle(10);
```

## ES6

1. Transpiler: translator + compiler. Transforma código moderno de javascript en código que puedan entender navegadores con versiones antiguas. Ejemplo: Babel
2. Bundler: unifica archivos de javascript y reduce el tamaño. Ejemplo: WebPack

## Babel



## Webpack
