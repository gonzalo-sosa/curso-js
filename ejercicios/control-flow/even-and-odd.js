showNumbers(10);

function showNumbers(limit) {
  for (let index = 0; index <= limit; index++) {
    const message = index % 2 === 0 ? "EVEN" : "ODD";
    console.log(index, message);
  }
}
