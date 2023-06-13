import {products, addProducto, calcStock} from './services'

let poloJordan = {
  name: 'Jordan Polo',
  price: 150,
  size: 'M',
  stock: 10,
};

let poloAdidas = {
  name: 'Adidas Polo',
  price: 120,
  size: 'L',
  stock: 5,
};

let poloPuma = {
  name: 'Puma Polo',
  price: 100,
  size: 'XL',
  stock: 12,
};

addProducto(poloJordan)
addProducto(poloAdidas)
addProducto(poloPuma)

console.log(products);

const total = calcStock();

console.log(total)
