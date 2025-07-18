//manera incorrecta
//let numeros: number[] = [1, 2, 3, 4,"5"];

//manera correcta
let numeros: number[] = [1, 2, 3, 4, 5];
let casados:Array<boolean> = [true, false, true];
let doble: number[] = numeros.map((num) => num * 2);

numeros.push(6);
console.log(numeros);
console.log(doble);

