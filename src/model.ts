//En Typescript se trabaja con modulos a traves de los archivos

export type Talla = 'S' | 'M' | 'L' | 'XL';

export type Product = {
  name: string,
  price: number,
  size?: string,
  stock: number,
};
