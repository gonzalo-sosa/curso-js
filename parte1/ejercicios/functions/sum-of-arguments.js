// sum(1,2,3,4) -> 10

console.log(sum([1, 2, 34]));

function sum(...args) {
  if (args.length === 1 && Array.isArray(args[0])) {
    args = [...args[0]];
  }

  return args.reduce((prev, curr) => prev + curr);
}
