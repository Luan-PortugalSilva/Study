const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: '30',
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
}

/*const nome = pessoa.nome
const { nome } = pessoa // Atribuição via desestruturação
console.log(nome)*/

const { nome, ...resto } = pessoa
console.log(nome, resto)