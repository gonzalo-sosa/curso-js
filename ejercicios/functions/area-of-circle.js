const circle = {
  radius: 2,
  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  },
};

console.log((circle.radius = 3));
console.log(circle.area);
