// street
// city
// zipCope
// showAddress(address) - mostrar propiedades y valores

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
  this.showAddress = function () {
    for (const entries of Object.entries(this)) {
      if (entries[0] !== "showAddress") console.log(entries);
    }
  };
}

const address = new Address("marconi", "buenos aires", "1765");

address.showAddress();
