// Añadir elementos

const numbers = [1, 2, 4, 34];

numbers.push(43); // añade al final

numbers.unshift(0); // añade al principio

numbers.splice(numbers.length / 2, 0, 3); // añade en la mitad

console.log(numbers);

// Encontrar elementos

numbers.indexOf(0); // indice de 0 es 0

numbers.indexOf("a"); // -1 ya que no existe 'a' en numbers

[1, 2, 1].lastIndexOf(1); // retorna el último índice en este caso 2

[1, 2, 3].includes(1); // true

// find devuelve el primer elemento que cumple la condición
[4, 12, 5, 51].find((e) => e > 4); // 12

// Encontrar objetos

const objs = [
  { id: 1, color: "red" },
  { id: 2, color: "blue" },
];

objs.find((e) => e.id === 2); // { id: 2, color: "blue" }
objs.findIndex((e) => e.id === 2); // 1

// Quitar elementos

const numbers1 = [1, 2, 3, 4, 5];

numbers1.pop(); // quitar último

numbers1.shift(); // quitar primero

numbers1.splice(numbers1.length / 2, 1); // quitar en el medio

console.log(numbers1);

// Vaciando un array

numbers1.splice(0, numbers1.length);

numbers1.length = 0;

// Combinar y dividir arrays

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);

combined.slice(2, 4); // inicio incluido y fin excluido -> [...)

// Spread Operator

const combined1 = [...first, ...second]; // [1,2,3,4,5,6]

const copy = [...combined1]; // no copia objector por referencia

// Iterar un array

for (let number of numbers) {
}

numbers.forEach((n, i) => console.log(i, n));

// Uniendo arrays

const join = [1, 2, 3, 4].join(",");

console.log(join); // "1,2,3,4"

// Sorting arrays

console.log([2, 3, 1].sort());

console.log(
  [
    { id: 2, name: "john" },
    { id: 1, name: "Brenda" },
  ].sort(({ name: nameA }, { name: nameB }) => {
    nameA.toUpperCase();
    nameB.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  })
);

// Testing

// Todos deben cumplir la condición
[1, 2, 3, 4, 5].every((value) => value >= 0); // true

// Al menos uno que cumpla la condición
[-2, 1, -4, -5, -5].some((value) => value >= 0); // true

// Filtering

[1, 2, 3, -4, -3, -3].filter((value) => value >= 0); // [1,2,3]

// Mapping

[1, 2, 3, 4, 5].map((value) => value * 2); // [2,4,6,8,10]

// Reducing

[1, 2, 3, 4, 5].reduce((acc, curr) => acc + curr, 0); // 15
