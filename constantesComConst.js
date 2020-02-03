/* Regras para VARIÁVEIS com const

* Não podemos criar constantes com palavras reservadas, ex: let if, let se ....

* Constantes precisam ter nomes significativos, ex: nomeCliente = 'João'....

* Não pode começar o nome de uma constante com um número, ex: let 1nome, let 43casa...

* Não podem conter espaços ou traços, ex: let nome-cliente...

* Utilizamos camelCase, ex: let nomeCompleto, let nomeCliente...

* Case-sensitive, ex: let nomeCliente ! let nomecliente ...

* Não pode modificar um valor de uma constante

* Não UTILIZE VAR, UTILIZE CONST.

*/

const nome = 'João'

const primeiroNumero = 5
const segundoNumero = 10
const resultado = primeiroNumero * segundoNumero
const resultadoDuplicado = resultado * 2
let resultadoTriplicado = resultado * 3
resultadoTriplicado += + 5

console.log(typeof resultadoTriplicado)