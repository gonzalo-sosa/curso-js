console.log(arrayFromRange(-10, -4));

function arrayFromRange(min, max) {
  if (max > min) return null;
  const arr = [];
  for (let i = min; i <= max; i++) arr.push(i);
  return arr;
}
