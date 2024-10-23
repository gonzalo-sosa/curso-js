const numbers = [1, 2, 3, 4];

const output = except(numbers, [1, 2, 4, 1, 1, 1, 1, 1]);

console.log(output);

function except(arr, excluded) {
  if (!Array.isArray(arr) || !Array.isArray(excluded)) return false;

  const res = [];

  arr.forEach((element) => {
    if (!excluded.includes(element)) {
      res.push(element);
    }
  });

  return res;
}
