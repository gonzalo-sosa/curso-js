// divisible 3 -> fizz
// divisible 5 -> buzz
// divisible 3 y 5 -> fizzbuzz
// no divisible entonces parametro
// no es número -> 'Not a number'

console.log(fizzBuzz(3));

console.log(fizzBuzz(5));

console.log(fizzBuzz(15));

console.log(fizzBuzz(4));

console.log(fizzBuzz("4"));

function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;

  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";

  if (input % 3 === 0) return "Fizz";

  if (input % 5 === 0) return "Buzz";

  return input;
}
