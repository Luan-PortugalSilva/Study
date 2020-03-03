/*let a = 'A' // B
let b = 'B' // C
let c = 'C' // A

const letras = [b, c, a];
[a, b, c] = letras

console.log(a, b, c)*/

//               0  1  2  3  4  5  6  7  8
const numeros = [
    [1, 2, 2], // 0  0-1-2 
    [4, 5, 6], // 1  0-1-2
    [7, 8, 9]  // 2  0-1-2
]

const [,[,,seis]] = numeros
// console.log(numeros[0][2])