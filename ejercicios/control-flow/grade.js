console.log(calculateGrade([80, 80, 50]));

function calculateGrade(marks) {
  const avgGrade = calculateAverage(marks);

  if (avgGrade < 60) return "F";
  if (avgGrade < 70) return "D";
  if (avgGrade < 80) return "c";
  if (avgGrade < 90) return "B";

  return "A";
}

function calculateAverage(numbers) {
  if (typeof numbers !== "object") return;

  let sum = 0;
  for (const n of numbers) {
    sum += n;
  }

  return sum / numbers.length;
}
