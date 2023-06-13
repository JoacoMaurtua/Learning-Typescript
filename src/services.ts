import { Product} from './model';

export const products: Product[] = [];

//Este metodo es una simulacion basica de un controler
export const addProducto =(data:Product)=>{
  products.push(data)
};

export const calcStock =():number=>{
  let total = 0;
  products.forEach((item)=>{
    total += item.stock;
  });

  return total;
}
