"use strict";

var CART = [{
  title: 'Хліб тостовий',
  price: 36.8,
  qty: 1
}, {
  title: 'Молоко',
  price: 42.00,
  qty: 1
}];

var getEl = function getEl(id) {
  return document.getElementById(id);
};

function submitHandler() {
  event.preventDefault();
  var title = getEl('product_title').value;
  var price = getEl('product_price').valueAsNumber;
  var qty = getEl('product_qty').valueAsNumber;

  if (title === '') {
    toast.error('Enter product title');
    return false;
  }

  if (isNaN(price) || price <= 0) {
    toast.error('Enter product price');
    return false;
  }

  if (isNaN(qty) || qty <= 0) {
    toast.error('Enter product quantity');
    return false;
  }

  addTocard(title, price, qty);
  return false;
}

function addTocard(title, price, qty) {
  var findedEl = CART.find(function (el) {
    return el.title === title;
  });

  if (findedEl) {
    findedEl.qty += qty;
  } else {
    CART.push({
      title: title,
      price: price,
      qty: qty
    });
  }
}