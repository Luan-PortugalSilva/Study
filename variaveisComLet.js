let nome = 'João' // String

console.log(nome,'nasceu em 1984.')
console.log('Em 2000', nome,'conheceu Maria.')
console.log(nome,'casou-se com Maria em 2012.')
console.log('Maria teve 1 filho com', nome, 'em 2015')
console.log('O filho de', nome, 'se chama Eduardo.')

let nome2; // Declarou a variável
nome2 = 'Qualquer Valor' // Inicializando a variável
console.log(nome2)

/* Regras para VARIÁVEIS let

* Não podemos criar variáveis com palavras reservadas, ex: let if, let se ....

* Variáveis precisam ter nomes significativos, ex: nomeCliente = 'João'....

* Não pode começar o nome de uma variável com um número, ex: let 1nome, let 43casa...

* Não podem conter espaços ou traços, ex: let nome-cliente...

* Utilizamos camelCase, ex: let nomeCompleto, let nomeCliente...

* Case-sensitive, ex: let nomeCliente ! let nomecliente ...

* Não podemos redeclarar variáveis com let, ex: let nomecliente == let nomecliente (NÃO PODE)

* Não UTILIZE VAR, UTILIZE LET.

*/