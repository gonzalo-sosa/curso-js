const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

// Obtener todas las películas de 2018 con rating mayor a 4

// Ordenarlas por rating

// Orden descendente

// Obtener el título

const res = movies
  .filter(({ year, rating }) => year === 2018 && rating > 4)
  .sort(({ rating: ratingA }, { rating: ratingB }) => ratingB - ratingA)
  .map((m) => m.title);

console.log(res);
