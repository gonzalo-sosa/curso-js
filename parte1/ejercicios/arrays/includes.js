const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 5));

// Recrear includes

function includes(arr, val) {
  if (typeof arr !== "object") return false;

  for (let e of arr) {
    if (e === val) return true;
  }

  return false;
}
