// Padre
function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focused");
};

// Hijo
function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (item) {
    if (!this.items.includes(item)) {
      return;
    }

    this.items.splice(this.items.indexOf(item), 1);
  };
}

HtmlSelectElement.prototype = new HtmlElement(); // Object.create(HtmlElement.prototype) <-- NO FUNCIONA ya que no hereda el método click()
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const s = new HtmlSelectElement();

console.log(s);

s.addItem("1");
s.removeItem("1");
s.click();
