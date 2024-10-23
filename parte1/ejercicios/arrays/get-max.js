const numbers = [1, 23, 3, 4];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
  if (!Array.isArray(array) || array.length === 0) return undefined;

  return array.reduce((prev, acc) => (prev > acc ? prev : acc));
}
