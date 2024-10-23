function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };

  this.render = function () {};
}

HtmlElement.prototype.focus = function () {
  console.log("focused");
};

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

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

HtmlSelectElement.prototype.render = function () {
  const options = this.items
    .map((item) => `\t<option>${item}</option>`)
    .join("\n");

  return "<select>\n" + options + "\n</select>";
};

function HtmlImageElement(src = "") {
  this.src = src;
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

HtmlImageElement.prototype.render = function () {
  return `<img src="${this.src}" />\n`;
};

const s = new HtmlSelectElement(["1", "2", "3"]);
const img = new HtmlImageElement("https://");

const elements = [s, img];

for (let e of elements) {
  console.log(e.render());
}
