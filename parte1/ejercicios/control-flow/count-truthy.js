console.log(countTruthy([]));

console.log(countTruthy([false, "", 1, 2, 0]));

console.log(countTruthy([1, 1, 1, 1, 1, 1]));

function countTruthy(array) {
  if (typeof array !== "object") return 0;

  let counter = 0;
  for (value of array) {
    if (value) counter++;
  }

  return counter;
}
