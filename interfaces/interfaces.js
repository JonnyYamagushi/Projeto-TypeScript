"use strict";
function SaudarComOla(pessoa) {
    console.log("Olá, ", pessoa.nome.toString());
}
function MudarNome(pessoa) {
    pessoa.nome = 'Leide';
}
const pessoa = {
    nome: 'João',
    idade: 24,
    saudar(sobrenome) {
        console.log("Olá, meu nome é " + this.nome + ' ' + sobrenome);
    }
};
SaudarComOla(pessoa);
pessoa.saudar("Passos");
MudarNome(pessoa);
SaudarComOla(pessoa);
//MudarNome({nome: 'Roque', idade: 45, altura: 1.75})
//Usando Classes
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }
}
const MeuClient = new Cliente();
MeuClient.nome = 'Han';
SaudarComOla(MeuClient);
MeuClient.saudar('Solo');
console.log(MeuClient.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(3, 11));
