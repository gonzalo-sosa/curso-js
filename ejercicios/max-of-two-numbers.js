function max(n1, n2) {
  if (typeof n1 === "number" && typeof n2 === "number") {
    return n1 > n2 ? n1 : n2
  }
  return NaN
}

console.log(max("a", 2))

console.log(max(1, 2))

console.log(max(3, 2))