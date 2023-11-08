interface Humano {
    nome: string,
    idade?: number,
    [Prop: string]: any,
    saudar(sobrenome: string): void
}

function SaudarComOla(pessoa: {nome: string}){
    console.log("Olá, ", pessoa.nome.toString())
}

function MudarNome(pessoa: Humano){
    pessoa.nome = 'Leide'
}

const pessoa:Humano = {
    nome: 'João',
    idade: 24,
    saudar(sobrenome: string){
        console.log("Olá, meu nome é " + this.nome + ' ' + sobrenome)
    }
}

SaudarComOla(pessoa)
pessoa.saudar("Passos")
MudarNome(pessoa)
SaudarComOla(pessoa)

//MudarNome({nome: 'Roque', idade: 45, altura: 1.75})

//Usando Classes
class Cliente implements Humano{
    nome: string = ''
    ultimaCompra: Date = new Date
    saudar(sobrenome: string): void {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`)
    }
}

const MeuClient = new Cliente()
MeuClient.nome = 'Han'
SaudarComOla(MeuClient)
MeuClient.saudar('Solo')
console.log(MeuClient.ultimaCompra)

//Interface Função
interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, exp: number): number {
    return Array(exp).fill(base).reduce((t, a) => t * a)
}

console.log(potencia(3, 11))