function areEqual(obj1, obj2) {
  if (typeof obj1 !== "object" || typeof obj2 !== "object") return false;

  const obj1Entries = Object.entries(obj1);
  const obj2Entries = Object.entries(obj2);

  if (obj1Entries.length !== obj2Entries.length) return false;

  for (let i = 0; i < obj1Entries.length; i++) {
    for (let p = 0; p <= 1; p++) {
      if (obj1Entries[i][p] !== obj2Entries[i][p]) {
        return false;
      }
    }
  }

  return true;
}

function areSame(obj1, obj2) {
  return obj1 === obj2;
}

console.log(areEqual({ color: "red" }, { color: "red" }));
