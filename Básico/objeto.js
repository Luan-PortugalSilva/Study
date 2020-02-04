/* const array = [1, 2, 3]
array.push(4)
array[0] = 'Luiz'
console.log(array ) */

/* function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Luan', 'Portugal', 19)
console.log(pessoa1.nome) */

const pessoa1 = {
    nome: 'Luan',
    sobrenome: 'Portugal',
    idade: 19,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`)
    },
    incrementaIdade() {
        this.idade++;
    }
}

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()