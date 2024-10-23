console.log(sum(10));

function sum(limit) {
  let total = 0;
  for (let index = 3; index <= limit; index++) {
    if (index % 3 === 0 || index % 5 === 0) total += index;
  }

  return total;
}
