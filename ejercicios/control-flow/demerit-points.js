// speed limit = 70
// 5 -> 1 point

checkSpeed("70");
checkSpeed(74);
checkSpeed(75);
checkSpeed(76);
checkSpeed(100);
checkSpeed(180);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  const pointsLimit = 12;

  if (typeof speed !== "number") return NaN;

  if (speed < speedLimit + kmPerPoint) {
    console.log("Ok");
    return;
  }

  const points = Math.floor((speed - speedLimit) / kmPerPoint);

  if (points >= pointsLimit) console.log("License suspended", points);
  else console.log("Points", points);
}
