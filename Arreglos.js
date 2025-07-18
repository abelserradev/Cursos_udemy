//manera incorrecta
//let numeros: number[] = [1, 2, 3, 4,"5"];
//manera correcta
var numeros = [1, 2, 3, 4, 5];
var casados = [true, false, true];
var doble = numeros.map(function (num) { return num * 2; });
numeros.push(6);
console.log(numeros);
console.log(doble);
