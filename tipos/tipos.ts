//string
let nome: string = 'João'
console.log(nome)

//numbers
let idade: number = 24
//não existe diferença de int e decimal
idade = 24.5
console.log(idade)

//booleanos (true ou false)
let estaChovendo: boolean = true
console.log(estaChovendo)

//Tipos explicitos
let minhaIdade: any
minhaIdade = 24
console.log(typeof minhaIdade)
minhaIdade = 'idade é 24'
console.log(typeof minhaIdade)

//array
let hobbies: any[] = ["Cozinhar", "Video Games", "Praticar Esportes"]
console.log(hobbies[1]);
console.log(hobbies);
console.log(typeof hobbies);

hobbies = [100]
console.log(hobbies);

//tuplas
let endereco: [number, string, string] = [272, 'Avenida Pedroso de Morais', 'Pinheiros']
console.log(endereco);

//Enums
enum Cor {
    Preto, //0
    Branco, //1
    Vermelho, //2
    Azul = 10, // passa a ser 10
    Laranja = 10 //Não limita a valores distintos
}

let corFavorita: Cor = Cor.Preto;
console.log(corFavorita)