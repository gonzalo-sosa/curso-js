const numbers = [1, 2, 3, 3, 3, 3, 3, 4, 1];

const count = countOccurrences(numbers, 3);

console.log(count);

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) return;

  return array.reduce(
    (prev, curr) => (curr === searchElement ? prev + 1 : prev),
    0
  );
}
