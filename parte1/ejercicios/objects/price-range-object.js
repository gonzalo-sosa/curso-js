/**
 * @param label - the display for user
 * @param toolTip - name of the range
 * @param min - min price
 * @param max - max price
 */
function PriceRange(label, toolTip, min, max) {
  this.label = label;
  this.toolTip = toolTip;
  this.min = min;
  this.max = max;
}

let priceRanges = [
  new PriceRange("$", "Inexpensive", 0, 10),
  new PriceRange("$$", "Moderate", 11, 20),
  new PriceRange("$$$", "Expensive", 21, 50),
];

console.log(priceRanges);
