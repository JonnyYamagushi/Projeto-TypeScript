"use strict";
//string
let nome = 'João';
console.log(nome);
//numbers
let idade = 24;
//não existe diferença de int e decimal
idade = 24.5;
console.log(idade);
//booleanos (true ou false)
let estaChovendo = true;
console.log(estaChovendo);
//Tipos explicitos
let minhaIdade;
minhaIdade = 24;
console.log(typeof minhaIdade);
minhaIdade = 'idade é 24';
console.log(typeof minhaIdade);
//array
let hobbies = ["Cozinhar", "Video Games", "Praticar Esportes"];
console.log(hobbies[1]);
console.log(hobbies);
console.log(typeof hobbies);
hobbies = [100];
console.log(hobbies);
//tuplas
let endereco = [272, 'Avenida Pedroso de Morais', 'Pinheiros'];
console.log(endereco);
//Enums
var Cor;
(function (Cor) {
    Cor[Cor["Preto"] = 0] = "Preto";
    Cor[Cor["Branco"] = 1] = "Branco";
    Cor[Cor["Vermelho"] = 2] = "Vermelho";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 10] = "Laranja"; //Não limita a valores distintos
})(Cor || (Cor = {}));
let corFavorita = Cor.Preto;
console.log(corFavorita);
