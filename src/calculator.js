function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function calculateDiscount(price, discountPercent) {
  if (discountPercent > 100) {
    return price;
  }

  return price - (price * discountPercent) / 100;
}

function isAdult(age) {
  return age >= 18;
}
module.exports = {
  add,
  divide,
  calculateDiscount,
  isAdult
};
