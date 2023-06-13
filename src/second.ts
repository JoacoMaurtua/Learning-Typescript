(() => {
  /* Este archivo es sobre todo para ver los tipos de variables propios de Ts y como
  se utilizarian en escenarios reales */

  let mensaje: string = 'Otro mensaje'; //En first.ts hay otra variable llamada mensaje y no hay error

  //Sobre any:

  //Se utiliza en el integrado de bibliotecas externas y en la migraciom gradual de js a ts

  // Función que procesa un conjunto de datos
  function processData(data: any): void {
    if (typeof data === 'number') {
      console.log('Procesando número:', data);
    } else if (typeof data === 'string') {
      console.log('Procesando cadena de texto:', data);
    } else if (typeof data === 'object') {
      console.log('Procesando objeto:', data);
    }
    // Caso por defecto
    else {
      console.log('Dato desconocido:', data);
    }
  }

  const numberData = 42;
  const stringData = 'Hola, mundo';
  const objectData = { name: 'John', age: 30 };
  const unknownData = true;

  // Procesar los datos
  processData(numberData);
  processData(stringData);
  processData(objectData);
  processData(unknownData);

  // Union types: Una variable puede tener la flexibilidad de poder ser uno o mas tipos de dato

  //Problema: Tengo que absover un endpoint en donde los ids de los usuarios son diferentes entre si,
  //algunos son strings y otros numbers decimales, si es string quiero que que lo comvierta a number
  //y luego le elimine los decimales, si es number que le elimine los decimales, implemente la funcion

  function convertId(id: string | number) {
    if (typeof id === 'string') {
      let newId: number = Number(id); //aplicando casting
      return Math.floor(newId);
    } else {
      return Math.floor(id);
    }
  }

  let id_1 = '123.56';

  let id_2 = 113.34;

  console.log(convertId(id_1));
  console.log(convertId(id_2));

  //Alias y tipos literales

  type talla = 'S' | 'M' | 'L' | 'XL'; //--> //Alias

  let shirtSize: talla; // --> Tipo literal

  shirtSize = 'M';

  //Simplificar el ejemplo anterior y aumentarle la talla de camisa:

  type aliasId = number | string;

  function asignarIdyTalla(id: aliasId, shirtSize: talla) {
    if (typeof id === 'string') {
      let newId: number = Number(id); //aplicando casting
      console.log(
        `La talla de la persona con el id ${Math.floor(newId)} es ${shirtSize}`
      );
    } else {
      console.log(
        `La talla de la persona con el id ${Math.floor(id)} es ${shirtSize}`
      );
    }
  }

  asignarIdyTalla(123, 'M');
  asignarIdyTalla('124.34', 'L');

  //Sobre null y undefined, aveces podemos recibir datos que estan vacios o son indefinidos
  //y siempre debemos hacer una bifurcacion para tratar ese caso

  function concatName(name: string | null) {
    let hello = 'Hola';

    hello += name?.toLowerCase() || ' nobody'; //Aqui hacemos uso del conditional chaining para simplificar el condicional

    console.log(hello);
  }

  concatName(' lionel');
  concatName(null);

  //Nota: En Ts, en las funciones podemos utilizar argumentos opcionales con confitional chaining

  let arr = [1, 2, 3, 4, 5, 5, 6, 7];
  const sumaTotal = (arr: number[], init?: number): number => {
    return arr.reduce((acc, i) => acc + i, init || 0);
  };

  console.log(sumaTotal(arr, 10));

  //Objetos en funciones:

  //let products: any[] = []; //-> Muy mala practica, en cambio:

  //Alias objeto, de hecho un alias puede almacenar cualquier estructura de datos compleja
  type Product = {
    name: string,
    price: number,
    size?: string
  };

  let products: Product[] = []; //aregrelo de Productos

  const addProducto = (data:Product) => {
    products.push(data);
  };

  let poloJordan = {
    name: 'Jordan Polo',
    price: 50,
    size: 'L',
  };

  addProducto(poloJordan);

  console.log(products);

})();
