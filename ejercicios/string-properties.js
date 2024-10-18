showProperties({ title: "spiderman", rating: 4.5 });

function showProperties(obj) {
  if (typeof obj !== "object") return;

  for (key in obj) {
    if (typeof obj[key] === "string") console.log(key, obj[key]);
  }
}
