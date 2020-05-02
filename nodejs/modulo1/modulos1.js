class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = 'Luan';
const sobrenome = 'Portugal'

module.exports = {
    nome, 
    sobrenome,
    Pessoa
};

exports.outraCoisa = 'Outra Coisa'