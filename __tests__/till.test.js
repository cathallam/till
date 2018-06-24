const Till = require('../src/till');

const apple = {
  barcode: 123,
  price: 5,
};

const banana = {
  barcode: 456,
  price: 6
};

const orange = {
  barcode: 789,
  price: 7,
};

const pineapple = {
  barcode: 5367,
  price: 80,
};

const kiwi = {
  barcode: 765,
  price: 25,
};

const products = [
  apple,
  banana,
  orange,
  pineapple,
  kiwi, 
];

describe('constructor', () => {
  const till = new Till(products, []);

  it('returns an object', () => {
    expect(till).toBeInstanceOf(Object);
  });

  it('has initial products array', () => {
    expect(till.products).toEqual(expect.arrayContaining(products));
  });

  it('has initial basket array', () => {
    expect(till.basket).toEqual(expect.arrayContaining([]));
  });
});

describe('scan', () => {
  const till = new Till(products, []);
  it('finds an item by its barcode', () => {
    expect(till.scan(456)).toEqual(banana);
  });
});

describe('addToBasket', () => {
  it('adds an item to the basket', () => {
    const till = new Till(products, []);
  
    till.addToBasket(kiwi);
  
    expect(till.basket).toContain(kiwi);
  });
});

describe('totalPrice', () => {
  it('gets the total price of items in the basket', () => {
    const basket = [orange, orange, pineapple];
    const till = new Till(products, basket);
  
    expect(till.totalPrice()).toEqual(94);
  });
});

describe('removeFromBasket', () => {
  it('removes the item with the given barcode from the basket', () => {
    const basket = [kiwi, orange, pineapple];
    const till = new Till(products, basket);
  
    till.removeFromBasket(789);
  
    expect(till.basket).not.toContain(orange);
  });
});