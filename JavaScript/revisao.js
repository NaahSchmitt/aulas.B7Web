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