// Factory Function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

// Constructor Function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

function showAddress(address) {
  if (typeof address !== "object") return;

  for (const entries of Object.entries(this)) {
    console.log(entries);
  }
}

console.log(new createAddress("marconi", "buenos aires", "1765"));

console.log(new Address("marconi", "buenos aires", "1765"));
