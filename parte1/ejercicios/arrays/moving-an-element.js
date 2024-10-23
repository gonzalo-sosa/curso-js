const numbers = [1, 2, 3, 4];

const output = move(numbers, 3, -1);

console.log({ numbers });
console.log({ output });

function move(array, index, offset) {
  if (!Array.isArray(array)) return;

  if (typeof index !== "number" || typeof offset !== "number") return;

  if (index >= array.length) return;

  const position = index + offset;

  if (Math.abs(offset) > index || position >= array.length) {
    console.error("Invalid offset.");
    return;
  }

  const res = [...array];
  const [val] = res.splice(index, 1);

  res.splice(index + offset, 0, val);

  return res;
}
