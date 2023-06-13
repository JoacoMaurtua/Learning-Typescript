(() => {
  //Esta funcion aninima, limita el alcance y ahora si se pueden repetir nombres de variables al declararlas
  //Sobre los tipos de variables

  let mensaje: string = 'Hola mundo'; //Declaracion del tipo de variable

  let boolean: boolean = false;

  let animales: string[] = ['leon', 'perro', 'gato'];

  let numeros: number[] = [3, 6, 9, 12];

  //  Crear mis propios tipos de datos basados en otros tipos

  type mixto = string | number | boolean | string[];

  let datosMixtos: mixto[] = ['texto', 10, ['uno', 'dos']];

  // mapas, objetos o diccionarios

  let jugadores: { [key: number]: string } = {
    //declaro un objeto cuyas keys seran numeros y cuyos values seran string
    10: 'Messi',
    7: 'Cristiano Ronaldo',
  };

  //Record nos permite mapear rapidamente de un valor a otro

  let paises: Record<string, string> = {
    EC: 'Ecuador',
    MX: 'Mexico',
    PE: 'Peru',
  };

  let data: Record<string, string[]> = {
    'Juan Rivera': ['juanrivera@gmail.com', 'juanjoR99'],
    'Marco Paz': ['marcopaz@gmail.com', 'pazMT94'],
  };

  console.log(data);

  // Constantes

  const pi = 3.14; //Igual que en js

  // Operadores son los mismos que en js

  // Condicionales iguales a js

  type autorizado = false | true; //union: crear un tipo que puede aceptar muchos tipos

  let autorizado1: autorizado = true;

  if (autorizado1) {
    console.log('Puede entrar');
  } else {
    console.log('No puede entrar');
  }

  // Casting, cambio de un tipo de variable a otro

  let valor: any = 123;
  let longitud_cadena: number = String(valor).length;

  console.log(longitud_cadena);

  // Otra aplicacion mas real de casting

  interface Usuario {
    //interface: estructura esperada para un objeto
    id: number;
    nombre: string;
    edad: Number;
  }

  const datosApi: any = {
    //any: acepta cualquier tipo de dato
    id: 1,
    nombre: 'Joaco M',
    edad: 24, //Se ajustara a tipo number
    profesion: 'actor',
  };

  const usuario: Usuario = datosApi as Usuario; //casting

  console.log(usuario.edad);

  //console.log(usuario.profesion) --> No considera el key profesion porque no esta definida en la interfaz

  const sum = (a: number, b: number): number /* retorna un numero */ => {
    return a + b;
  };

  function imprime_nombre(name: string): void /* funcion que no retorna nada */ {
    console.log(`Hola ${name}`);
  }

  console.log(sum(2, 3));

  imprime_nombre('Joaquin');

  //Bucles son igual que en js

  let num_primos: number[] = [1, 2, 3, 5, 7, 11];

  let primos_cuadrado = num_primos.map((numero) => numero * numero);

  console.log(primos_cuadrado);

  //programacion orientada a objetos

  interface Lang {
    name: string;
    year?: number;
    description: Function;
  }

  let javascript: Lang = {
    name: 'Typescript',
    year: 2012,
    description: function () {
      console.log(`${this.name} was created in ${this.year}`);
    },
  };

  javascript.description();

  //Sobre clases

  //El ejemplo de arriba se puede simplificar creando una clase

  class Lenguaje implements Lang {
    name: string;
    year: number;

    constructor(name: string, year: number) {
      this.name = name;
      this.year = year;
    }

    description() {
      console.log(`${this.name} was created in ${this.year}`);
    }
  }

  // Ahora puedo declarar multiples objetos

  let cplusplus = new Lenguaje('C++', 1985);
  cplusplus.description();

  let sql = new Lenguaje('SQL', 1986);
  sql.description();

})(); // Importante colocar esos parentesis
