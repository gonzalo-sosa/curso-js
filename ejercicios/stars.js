showStars(4);
// *
// **
// ***
// ****
function showStars(rows) {
  const star = "*";
  for (let i = 0; i < rows; i++) {
    let output = "";
    for (let j = 0; j <= i; j++) {
      output += star;
    }
    console.log(output);
  }
}
