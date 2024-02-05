/*
// operaçoes em variavéis


let x = 65;

x = x / 7 ;

console.log(x)

let nome = "naah"
let surname = "Alves"

let completename= nome + surname;

console.log(completename)


let docmt = "Denis"
let rg = 12345;
let regiao = "Sao paulo"

console.log (`My name is ${docmt} my document is 
${rg} I'm from ${regiao}`);
//usando string para separar as palavras


let n1 = 350;
let n2 = 8;


let conta = n1 / n2;

console.log(conta);

let conta1 = 98;
let conta2= 74;
let conta3= 12;

let somarr = (conta1+ conta2) / conta3;

console.log(somarr)

//template string
//podemos fazer operaçoes matematica usando o template string :)

let idade= 26;

let idadeString = `${idade + 21} anos`;

console.log(idadeString);

//REVISAO CONDICIONAL IF / ELSE

let id = 11;

if (id >17) {
    console.log('Voce é Maior de idade');
} else {
    console.log('Voce é Menor de idade');
}


let idd = 66;

if( idd <=50){
    console.log('Voce é jovem');
} else {
    if(idd >60);
    console.log('Voce é velho');
}
// ==
const iee = 15;

if (iee ==10){
    console.log('Voce é de Menor');
}else{
    console.log('Voce é de maior');
}

// !=
var id1 = 38;
var id2 = 35;

if (id1 != id2){
    console.log('os numeros são diferentes')
}else {
    console.log('os numeros são iguais')
}


// > maior que
// < menor que
// == igual
//=== mais preciso
// >= maior ou igual
// <=menor ou igual
//!= diferente


//CONDICIONAL == e ===

let ex = "20" //string

if(ex == 20){
    console.log('Voce tem 20 anos'); 
}
//passa por uma verificacao nao tao restrita
//note q usei uma string e me deu retorno de qe tinha 20 anos
//porém se estamos trabalhando com uma condicional number 20
//eu quero q o retorno seja de um number 20. e nao string
// por este motivo usamos  o ===
/*
let ex1 = "20";

if (ex1 === 20){
    console.log('voce tem 20 anos')
} else {
    console.log('voce n tem 20 anos')
}
// o === é mais restritivo. 

//ah mas 20 é 20
//entao que tal adcionarmos mais 15 anos a nossa idade?


let year = "20";

if (year == 20) {
    year = year + 15;
    console.log('Idade adcionada com sucesso');
    console.log(year);
}
//o retorno deu 2015. pq ele nao passou por uma analise restrititiva
// simplesmente juntou a string com a nova idade.

//Multi-condicionais (&& e ||)

let la = 14;

if (la >= 18 && la < 60){
        console.log("voce é adulto");
} 
*/

//Condicionsl (if else)-Revisao

let idade =  35;

if (idade < 18){
    console.log('Voce é Menor de idaade');
} else if (idade <=18 && idade < 60){
    console.log('Voce é um Adulto');
} else if (idade >= 60){
    console.log('Voce é idoso');
}

const estudante = 25;

if (estudante < 10){
    console.log('Ensino Fundamental');
}  else if (estudante >= 10 && estudante <= 18){
    console.log('Ensino Médio');
} else if (estudante >18 && estudante <=20){
    console.log('Ensino Técnico');
} else if (estudante >=20){
    console.log('Graduação')
}

//retorno = graduaçao

//DESMITIFIANDO O IF - boolean





let age = 10;

let adulto = age >=18 && age < 60; //adulto é um boolean

if (adulto){
    console.log("É Adulto");
} else{
    console.log("Não é Adulto")
}



//aqui tbm usamos um boolean
let age1 = 14;

console.log(age1 > 18);


// exercicio de condicional

let a = 10;
let b = 5;
console.log(a > b); //true

let c = "10"
let d = 10;
console.log(c === d);  //false

let e = 10;
let f = 5;
console.log(e != f); //true


let preco = 40.3;

if (preco <= 45){
    console.log("Está Barato")
} else {
    console.log('Está caro');
}


//Condicional ternário

let isMember = false;

let shipping = isMember ? 2 : 10;

console.log(isMember ? "Voce é membro" : "voce nao e membro");
console.log (`Frete: ${shipping}`);


let age2 = 9;

let isAdult = age2 >= 18 ? true : false;
// let is adult = age2 >= 18 ? 'sim' : 'nao';   -> outra forma de fazer

console.log(isAdult);

//SWITCH

let profession ="fiscal";

switch (profession){
    case 'fiscal' :
        console.log ('sua camisa será verde');
        break;
    case 'bombeiro':
        console.log('sua camiseta sera azul');
        break;
        default:
            console.log('sua camisa sera preta')
}