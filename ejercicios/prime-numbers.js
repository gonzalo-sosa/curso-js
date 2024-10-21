showPrimes(10);

function showPrimes(limit) {
  for (let n = 2; n <= limit; n++) {
    if (isPrime(n)) console.log(n);
  }
}

function isPrime(n) {
  for (let f = 2; f < n; f++) {
    if (isDivisibleBy(n, f)) return false;
  }
  return true;
}

function isDivisibleBy(a, b) {
  return a % b === 0;
}
