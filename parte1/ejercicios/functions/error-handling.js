const numbers = [1, 2, 3, 3, 3, 3, 3, 4, 1];

try {
  const count = countOccurrences(null, 3);
  console.log(count);
} catch (error) {
  console.error(error);
}

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("Not an array.");

  return array.reduce(
    (prev, curr) => (curr === searchElement ? prev + 1 : prev),
    0
  );
}
