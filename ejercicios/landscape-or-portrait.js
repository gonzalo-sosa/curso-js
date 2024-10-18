function isLandscape(width, height) {
  if (typeof width === "number" && typeof height === "number") {
    return width > height;
  }
  return NaN;
}

console.log(isLandscape("a", 100));

console.log(isLandscape(300, 600));

console.log(isLandscape(600, 300));
