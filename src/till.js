function Till (products, basket) {
  this.products = products;
  this.basket = basket;
  this.transactions = [];
};


Till.prototype.scan = function (barcode) {
  return this.products.find((product) => {
    return product.barcode === barcode;
  });
};

Till.prototype.addToBasket = function (product) {
  this.basket.push(product);
};

Till.prototype.totalPrice = function () {
  return this.basket.reduce((total, product) => {
    return total + product.price;
  }, 0);
};

Till.prototype.removeFromBasket = function (barcode) {
  const product = this.scan(barcode);
  const index = this.basket.indexOf(product);
  this.basket.splice(index, 1);
};

Till.prototype.closeSale = function () {
  const transaction = {
    total: this.totalPrice(),
    products: this.basket
  };

  this.transactions.push(transaction);
  this.basket = [];
};

module.exports = Till;