// alert("Olá Mundo")

//console.log("Ola Mundo 3.0") alert no console


/*CRIANDO VARIAVEIS
let nome = "Denis";
let idade = 27;
let documento = `Nome: ${nome} Idade: ${idade}`;
console.log ("Nome: " +nome);
console.log ("Idade: " + idade)
//Usando template string.
let documento = `Nome: ${nome} Idade: ${idade}`;

console.log(documento);     */

/*TIPOS DE DADOS
let nome = "Denis"; //string
let idade = 27;   //number
let logado = true; //Booleans;
null & Undfined
let lista = ["ovo, leite, trigo"] //Arrays -Tipo lista
let nomeCompleto = {nome: "Natiely", idade: 27 } //Objeto

exemplo de uso de array:

const meuArray = [{
   nome: "Natiely" ,
   idade : 27,
   Cidade: SP
}, 
{
  nome: "Denis",
  idade: 27,
  Cidade: SP
}]
console.log (meuArray) -> todo conteudo dentro do array
console.log (meuArray[0]) -> todo conteudo do primeiro array (o da natiely)

pode criar com numeros tbm ->
const numerosArray = [20, 55, 44, 47]
console.log (numeroArray[2])  -> retorno do numero 44 .


console.log(typeof nome) //Typeof -Mostra o tipo de dado no console, exemplo: console.log(typeof nome) = retorno: string*/

/*  EXERCICIO DE VARIAVEIS

 1. crie uma var para armazanar o nome
//do carro e ponha o valor Ferrari. E exiba-a.:

let carro = "Ferrari";
console.log (carro)

//2 Crie uma var para armazenar o preço
//do bolo, que custa R$19,99.:

let precodoBolo= 19.99;
console.log(precodoBolo);

//3 Corrija o codigo a seguir (e exiba-a):
//let "cidade" = São Paulo

let cidade = "São Paulo";
console.log (cidade);  */

/*LET, CONST, VAR
//mudando uma variavel :
let nome = "natiely";
nome = "Denis";

console.log(nome) */

/*existe outra forma de criar variavel usando o var
// funciona exatamente igual let e var
var nome = "natiely";
nome = "Denis";

console.log(nome)  */

/*Exixte um 3 item : o const. Valor que NÃO MUDA!
 
const nome = "natiely";

console.log(nome) */

/*OPERAÇÕES EM VARIAVÉIS
s
 let x = 2;

  x = x + 8;

 console.log(x);

 let nome = "Natiely";
 let sobrenome = "Alves";

 let nomeCompleto = nome + ' ' + sobrenome; //  '' é o espaço entre os nomes

 console.log (nomeCompleto);   //Concatenou: Natiely Alves
*/
/* Somas
 let n1 = 15;
 let n2 = 20;

 let soma = n1 + n2;
 console.log(soma);
 
    Sao duas formas de fazer a soma 

let n1 = 15;
let n2 = 20;

console.log(n1 + n2);

  let n1 = 15;
  let n2 = 20;
  let n3 = 10;

  let soma = (n1 + n2) -n3;
  console.log(soma);
  */

/*STRING E TEMPLATE STRING  (diferença)

let nome = "Natiely";
let sobrenome = "Alves"

let nomeCompleto = nome + ' ' + sobrenome;
let nomeCompleto = `Nome: ${nome} ${sobrenome}`;
let nomeCompleto = `${nome} ${sobrenome}`;

console.log("Nome: " +nomeCompleto); */
/*-------------------------------------------------------
  let idade = 95;

let idadestring = `${idade} Anos`;
    Posso concatenar ex:
let idadestring = `Idade: ${idade} Anos`; // = 95 lala Anos (exemplo)
console.log(idadestring); */


/*  CONDICIONAL IF/ ELSE  

let idade = 13;

if (idade > 18) {
  console.log("Voce é Maior de Idade");
} else {
  console.log("Voce é Menor de idade");
}

     //outros tipos de Variaveis exemplo:

let idade = 13;

if (idade == 17) {
  //== sinal de igual
  // >= Maior ou igual
  // <= Menor ou igual
  // != Diferente

  console.log("Voce é Maior de Idade");
} else {
  console.log("Voce é Menor de idade");
} */

/* Condicional == e === 

let idade = 20;

if (idade === 20) {  
    idade = idade + 15;
    console.log("idade adcionada com sucesso");
    console.log(idade);
}

//== verificacao nao tao rigorosa
//=== verificacao rigorosa 
//neste exemplo a variavel precisa ter um number e nao uma string.

  testando exercicios :::::

 let idade = 20;

 if (idade ===20){
    idade = idade + 14;
    console.log("idade adcionada com sucesso");
    console.log(idade)
 }  */

/*     Multi-Condicionais  && e || 
   // (vams fzer um exemplo para saber se é adulto)

   let idade = 10;

   if (idade >= 18 && idade <= 60 ){
    console.log("Voce é adulto") ;
   } else {
        console.log("voce é menor de idade")
   }  */

/*CONDICIONAL DUPLA (if else)

  let idade = 18;
 
  if (idade < 18){
   console.log("voce é Menor de Idade");
  } else if (idade >= 18 && idade < 60){
   console.log("Voce é Adulto");
  } else if (idade >= 60){
   console.log("Voce é Idoso");
  }
  

             praticando
  let idade = 18;

  if (idade < 15){
   console.log("Negado");
  } else if (idade >= 18 && idade < 30){
     console.log("Permitido");
  } else if (idade <= 60){
   console.log("Voce nao é cadastrado");
  }else if (idade > 60){
   console.log("gratuito")
  }

  

  let idade = 30;

  if (idade < 18){
   console.log("negado");
  } else if (idade >= 18 && idade <30){
   console.log("permitido ate 22h");
  } else if(idade >=30 && idade < 60){
   console.log("Permitido ate 2h")
  } 
  let idade = 25 ;

  if (idade < 15){
    console.log("Bola ou Boneca");
  } else if (idade >= 15 && idade < 18){
    console.log("Bicicleta");
  } else if(idade >=18 && idade < 22){
    console.log("Ingresso Filme")
  } else if (idade >=22) {
    console.log("Voce é Adulto, Não tem direito")
  } */

/* Desmitificando o if // ex de boolean true / false

/*let ok = false;  // se for true :  (entra no if)

if (ok) {
console.log("Entrou no If");
} else {
console.log("Nao entrou no if");
}
                  ///// 
let idade = 10;

console.log(idade > 18); 
                   ////
let idade = 36;

let Adulto = idade >= 18 && idade < 60;

if (Adulto){
console.log("é adulto");
} else {
console.log("Nao é adultlo");
}     */

/* Exercicio de Condicional #2


//substitua o @ pela condicional correta para que o
// resultado seja TRUE

let x = 10;
let y = 5;

console.log (x > y);  

       
            
// Substitua  @ pela condicional correta para que
// o resultado seja False

let w = "10";
let z = 10;
console.log (w === z);   //  false pq o w é uma string   



//Substitua o @ pela condioncal correta p que 
// o resultado seja TRUE
let a = 10;
let b = 5;
console.log(a >! b);  //   



//Crie uma condicional para verificar se o preço da
// carne esta barato ou caro, Até 45 esta barato.
let preco = 40.3;  

if (preco <= 45){
console.log("Esta Barato");
} else {
console.log("Esta Caro");
}


//Resultado : true/ false / true / esta barato. */

/* CONDICIONAL TERNÁRIO (é basicamente um if em uma linha só)

let isMember = true;


let shipping = isMember ?  2 : 10;

console.log (isMember ? 'Voce é Membro' : 'Voce não é membro')
console.log("Frete: " + shipping); 


let age = 14;

let isAdult = ((age >= 18 && age < 60) ? 'Sim' : 'Não');

console.log(isAdult); 

let isMember = true;
let frete = isMember ? 'Gratis' : 50;

console.log (isMember ? 'Voce é Membro' : 'Voce nao é Membro')
console.log ("Frete: " + frete)


let aluno = false;
let valor = aluno ? 'gratis' : 100;


console.log (aluno ? 'Voce é aluno' : 'Voce nao é aluno');
console.log ("Valor da  camiseta: " + valor);


let cliente = true;
let desconto = cliente ? 'Desconto de 80%' : 'desconto de 5%';

console.log(cliente ? 'Voce é cliente': 'Voce não é cliente');
console.log ('Desconto: ' + desconto);



let gerente = false; 
let cartao = gerente ? 'Cartao de acesso liberado': 'Negado Sem Cartao de acesso';

console.log (gerente ? 'Liberada entrada' : 'Entrada Proibida');
console.log ('Acesso: ' + cartao);



let universitario = false;
let apostila = universitario ? 'Apostila inclusa' : 'Pagar à parte';


console.log("Apostila: " + apostila);
console.log( universitario ? 'Universitario' : 'O Usuario não se encontra no banco de dados'); */

/*   TIPO DE CONDICIONAL  SWITCH - é uma cond que tem multiplos resultados

let profession = "Estudante" ;

console.log("Profissão: " + profession);

switch (profession) {
case 'Fiscal':
console.log('Sua Camiseta é Azul');
break;

case 'Estudante':
console.log('Sua Camsiseta é Branca com gola Listrados em azuis');
break;

case 'professor':
console.log("Sua Camiseta é Lilás");
break;

case 'Diretor':
console.log('Sua Camiseta é Cinza');
break;
}

// cartas 

let cores = "Rosa" ;

switch (cores) {
case 'laranja':
console.log('Sua carta é Laranja');
break;
case 'Vermelho':
console.log('Sua carta é Vermelha');
break;
case 'Rosa':
console.log('Sua carta é rosa');
break;
case 'Azul':
console.log('Sua carta é azul');
break;
default :
console.log('Voce nao tem cartas');
}
console.log("Cores: " + cores);




let employees = "seguranca";

console.log("Employess: " + employees);

switch (employees) {
case 'Aux Serv Gerais':
console.log("Sua Camiseta é Cinza");
break;

case 'seguranca':
console.log("Sua camiseta é  preta");
break;

case 'caixa':
console.log("Sua camiseta é amarelo");
break;
}


let onibus = "motorista";

console.log ("Quem é voce no onibus: " + onibus);

switch (onibus){
case 'passageiro':
 console.log("PAssageiro que paga 5 reais entrada");
 break;

case 'motorista':
 console.log("Funcao:  dirige o onibus");
 break;

case 'cobrador':
 console.log ("cobrador que cobra sua entrada");
 break;

 default:
   console.log ("caso nenhuma das alternativas se encaixe.")
   break;
}   */

/* INTRODUÇÃO A FUNÇOES
//         DECLARANDO UMA FUNÇÃO

function gravidade () {
   console.log('A gravidade do planeta é:');
   console.log(9.8);
}

console.log('Oi, tudo bem?');

gravidade(); //usando a funçao <-  */

/* 
         COMO USAR UMA FUNÇÃO 

//aqui foi criada a função

function gravidade (){
  console.log('A gravidade da terra é:');
  console.log('9.8')
}
// aqui fazemos de fato o uso da função
gravidade();
console.log('opa,tudo bem?');
gravidade();



  //Passando parâmetros em funções


 function somar(n1, n2) {

    let resultado = n1 + n2;
    console.log('resultado: ' + resultado);
 }

 somar(10, 15);
 


 function nomeCompleto (nome, sobrenome) {
     console.log(`${nome} ${sobrenome}`);
 } 

  nomeCompleto ("Natiely", "Alves");
  nomeCompleto ("Denis", "Magalhaes");



  function information (lastname, surname){
    console.log(`${lastname} ${surname}`);
  }

  information ("Nanhany", "Manoely");
  information("felipe", "everson");
  

  function lanche (bebida, comida){
    console.log(`${bebida} ${comida}`);
  }

  lanche ('lanche: ' + "suco", "Coxinha");




  // AQUI PODEMOS USAR A FUNÇÃO DIVERSAS VEZES

  function almoco ( solido, liquido){
     console.log (`Almoço de hoje: ${solido} ${liquido}`)
  }

  almoco ('Legumes', 'Filé de Peixe');
  almoco('Macarrao','Frango');
  almoco ('Arroz', 'Feijao')  


  function jantar (comida,lanche){
    console.log(`Jantar de hoje é: ${comida} ${lanche}`);
    console.log(`Bom apetite`);
  }

  jantar ('Parmegiana', 'suco de frutas');
  jantar ('Pizza', 'Suco natural');
  jantar ('torta', 'refrigerante');

  */

/*  RETORNO DA FUNÇÃO

function nomeCompleto (nome, sobrenome) {
return(`${nome} ${sobrenome}`);
} 

let completo = nomeCompleto("Natiely", "Alves");
console.log ('Completo: ' + completo);

// ou
// console.log = nomeCompleto("Natiely", "Alves");


function cores (escuro, claro){
return (`${escuro} ${claro}`);
}

let teste = cores ("Preto", "lilás");

console.log('Cores: '+ teste);

//teste

function cores (quentes, frios){
return (`${quentes}, ${frios}`);
}

let teste = cores ("Azul", "branco");
console.log('Cores: ' + teste);
 
//teste
function dados (nome, sobrenome, cpf){
return (`${nome}, ${sobrenome}, ${cpf}`)
}

let information = dados ('Natiely', 'Alves', '4855555');
console.log('Dados: ' + information);  


//teste
function aluno (nome, cadastro, serie){
return (`${nome} ${cadastro} ${serie}`)
}

let information = aluno ('Natiely', 'n. 12345', '2 Semestre');
console.log ('Cadastro: '+ information);

//teste

function  dados (nome, sobrenome, idade){
return (`${nome} ${sobrenome} ${idade}`)
}

let dades = dados ('Denins', 'Magalhaes', '27 anos');
console.log( 'Dados: ' + dades);

//teste
function escola(diretor, professor, estudante){
return (`${diretor} ${professor} ${estudante}`)
}

let kitEstudante = escola ('Diretor ganha 5k', 
'professor ganha 3k', 'aluno estuda');
console.log ('Dados: ' + kitEstudante);   */

/*FUNÇÃO COM RETORNO CONDICIONAL


function maiorDeidade (idade){
if (idade >= 18){
return true;
} else {
return false;
}
}

let verificacao = maiorDeidade (70);
console.log(verificacao);

function  idade (idade){
if (idade >= 15){
return true;
} else {
return false
}
}

let verificacao = idade (14);
console.log (verificacao);


function idade (idade){
if (idade >= 18){
return true;
} else {
return false;
}
}
let teste = idade (14);
console.log (teste)

 // ou pode fazer assim com retorno de boolean + uma msg
 
 function maiordeidade (idade){
if (idade >= 18){
return true;
}else{
return false;
}
}

let idade = 10;
let teste = maiordeidade (idade);

if(teste){
  console.log('é maior de idade');
} else {
  console.log ('é menor de idade');
}
*/


/* 1 EXERCICIO DE FUNÇÕES (CÁLCULO DE % )
   
calcule a % entre 2 numeros.
Exemplo : 25 % de 40 é 10
formula da % : (y / x) * 100
uso da função:

let x= 40;
let y = 10; 
let pct = calcPct (x, y);
console.log (`${pct} % de  ${x} é ${y}`);
    .................. */

/* function calcPct ( y, x){
  return ( x / y) * 100;
}

let x = 40;
let y = 10;
let pct = calcPct ( x, y); 
console.log( `${pct} % de ${x} é ${y}`);  

function calc (y, x){
  return (x / y) * 100;
}

let x = 50;
let y = 10;
let result = calc (x,  y);
console.log (`${result} % de ${x} é ${y}`)  */

/*CORREÇÃO ->


function calcPct (n1, n2) {
  return (n2 / n1) * 100;
}

let x = 40;
let y = 10;
let pct = calcPct(x, y);
console.log (`${pct}% de ${x} é ${y}`); 

 // praticando 


function calc ( x, y){
 let pct  =  (y/ x) *100 ;
 return pct;
}

let x = 40;
let y = 10;
let pct = calc (x, y);

console.log(`${pct}% de ${x} é ${y}` );  */
 /* PRATICANDO

function calcularPorcentagemDevotos (totalVotos, votosCandidato){
  return (votosCandidato / totalVotos)*100;
}
let totalVotos = 1000;
let votosCandidato = 350;

let resultPorcentagem = calcularPorcentagemDevotos (totalVotos, votosCandidato);

console.log(`O candidato recebeu ${resultPorcentagem} % dos votos ( ${votosCandidato} de ${totalVotos})`)  */

/*PRATICANDO 2 


function calcularDesconto (precoOriginal, porcentagemDesconto){
     return (precoOriginal * porcentagemDesconto ) / 100;
}
 
 let precoOriginal = 19.99;
 let porcentagemDesconto = 5;
 let descontoDoProduto = calcularDesconto (precoOriginal, porcentagemDesconto);
  
 console.log(` O v  alor do desconto   é ${descontoDoProduto.toFixed(2)}`);
 */


///    2 EXERCICIO
// Calcule o preço do imovel
 // - m2 = 3.000
//  - Se tiver 1 quarto, o m2 é 1x
//  - Se tiver 2 quartos, o m2 é 1.2x
//  - Se tiver 3 quartos,  o m2 é 1.5 x
 // Uso da função


 /* Praticando exercicios-
 let metragem = 123;
    let quartos = 3;
    let preco = calcularImoveis (metragem, quartos);
    console.log(`A casa custa R$ ${preco}`);  */

 /*
    function calcularImovel (metragem, quartos){
      let m2 = 3.000;
      let preco = 0;

      switch (quartos) {
         case 1 :
          default:
         preco = metragem * m2;
         break;

         case 2:
          preco = metragem * ( m2 * 1.2);
          break;
        case 3:
          preco = metragem * (m2 * 1.5);
          break;
    }
      return preco;
  }

   let metragem = 123;
   let quartos = 3;
   let preco = calcularImovel (metragem, quartos);
   console.log (`A casa custa R$ ${preco}`);


*/
// EXERCICIO DE FUNÇÕES #6


/*  ----  ARROW FUNCTION  -----
//------jeito padrao
  function somar  (x, y) => {
  return x + y;
 }
 console.log(somar (10, 5)); 

// ----Ou podemos usar Arrow function (Erou funxion) 
//----que é basicamente o uso de:  () => {}
//-----exemplo usando const:


const somar = (x, y) =>{
  return x + y;
}
 console.log(somar(10,5));


    //-----O Arrow function tem como ser ainda de forma mais resumida:

 const somar = (x, y) => x + y;

 console.log(somar(10,5));

 //--------Outra forma resumida :

 function sobrenome (sob){
  return 'Bonieky' + sob;
 }

 console.log(sobrenome('Lacerda'));

 //Ou
 const sobrenome = (sob) => 'Bonieky ' + sob;
 
 //ou
 const sobrenome = (sob) => {
  return 'Bonieky ' + sob;
 }

 //ou 
 const sobrenome = (sob) =>{
  let nomeCompleto = 'Bonieky ' + sob;
  return nomeCompleto;
 }

 console.log(sobrenome('Lacerda'));  */

 /*---------- VARIAVÉIS DENTRO DA FUNÇÃO 

// criamos uma var de escopo global
// essa variavel count pode ser usada dentro de qualquer funcao
//ja q ela foi criada fora da função

 function add (){
  count ++;
 }
let count = 0; 
add();
add();

console.log(count);

//---
// Neste exemplo aqui a  preferencia passa a usar 
//a variavel local que esta dentro da funçao, por usar o mesmo nome

let count = 0;

function add (){
  let count =0;
  count ++;
}

add();
add();
console.log (count);

*/
//---- teste de aula
 /*
let idade = 0;
function nome (){
 
  idade ++;
}

nome();
nome();
nome();
console.log(idade); 

let idade = 0;

function exemplo() {
  //let idade = 0;
  idade ++;
}

exemplo();
exemplo();

console.log(idade) */

/*------------FUNÇOES DENTRO DAS FUNÇOES

function square (x){
  return x * x;
}

function addSquare (a, b){
  let sqrA = square (a);
  let sqrB = square (b);
  return sqrA + sqrB;
}

console.log (addSquares(2, 3)); 

const somar = (x, y) => x * y;

console.log (somar (20, 5)); */

/*Introdução a Array -----------

let meusArrays = ['blue', 'red', 'green'];

console.log (meusArrays[0]); //retorno -> blue 

//ARRAY DENTRO DE UM ARRAY ->

let numeros = [
  20, 30, 40, 
  [
    'red',
     'blabla',
     'lala'
  ]]
  //posso organizar da forma q eu quiser. :)
console.log (numeros [3][2]); //return lala */

  /* ------- OPERAÇÕES BÁSICAS DO ARRAY

let bolo = [
  'Trigo',
   'Ovos',
    'Leite',
     'Manteiga',
     'Açucar'
    ];

console.log (`Total de ingredientes: ${bolo.length}`);  */

// O USO DE .LENGTH FAZ A CONTA DE QUANTOS ITENS TEM DENTRO DO SEU ARRAY
//return :Total de ingredientes:5
//----------------

/*
let bolo = [
  'Trigo',
   'Ovos',
    'Leite',
     'Manteiga',
     'Açucar'
    ];


   bolo.push('Fermento')//Usando .push ele adciona +1 item na sua lista

   console.log (bolo);
   //return: (6) ['Trigo', 'Ovos', 'Leite', 'Manteiga', 'Açucar', 'Fermento']
   console.log (`Total de ingredientes: ${bolo.length}`);
   //Result Retorno: Total de ingredientes:6 

   //veja a diferença de retorno do console o 1 retorna
   // quantidade e todo item adcionado, o 2 retorno apenas quantidade   

   let bolo = [
    'Trigo',
     'Ovos',
      'Leite',
       'Manteiga',
       'Açucar'
      ];
           // obs: Observaçoes do array
        // length um numero q é a quantidade de itens no array usado no console
       // .pop = REMOVER o ULTIMO     ex:  bolo.pop()   - O Uso do pop remove o ultimo item da lista 
      // .shift = REMOVER o PRIMEIRO  ex:  bolo.shift()
     // .push - Para ADCIONAR um item push  ex:  bolo.push('item')
    // o uso de length no console é para saber a quantidade de item no array
    //Para mudar o valor de algum item do array ex : bolo[3]= ('novoitem');
     bolo.push('cebola');
     console.log (bolo);
     console.log(`Total de Ingredientes: ${bolo.length}`)
     //retornando => Total de Ingredientes: 4
    //PRATICANDO- as funçoes do array  
 
     let familia = [
      'nanhany',
      'Rose',
      'Felipe',
      'Naty',
      'Denis',
      'manoel'
     ]

     familia.pop()
     familia.shift ()
     familia.push ('Maria', 'joao', 'lala', 'babab',
     'ana', 'hahah', 'teste', 'teste2');

     //familia[4]= ('bolota'); //Modificar o item de numero x

     console.log(familia);
     console.log (`quantidade de Pessoas na Familia: ${familia.length}`);
   

    let cadastro = [
      'Denis',
      '27',
      'São Paulo',
      'Nana',
      '25',
      'São Paulo' ]
    

    console.log(cadastro);
    console.log( `Quantidade de Cadastro: ${cadastro.length}`) */


    // exercicio do array 

    /*
     1- no array abaixo qual numero pega a ferrari?

    let carros = ['BMW', 'Ferrari', 'Mercedes'];

    let x= 1;
    console.log('1. ' + carros[x]);

    2-  Troque ferrari por audi

    console.log ('2. Lista com Audi:');
    console.log(carros);

    3-Adcione o Volvo a lista

    console.log('3. Lista com Volvo:');
    console.log(carros);

    4- Exiba quantos itens tem no array
      console.log('4. Itens no array:');  




      let carros = ['BMW', 'Ferrari', 'Mercedes'];

      
      let x= 1;
      carros [1]= ('Audi');
      carros.push('Volvo');

      
      console.log('1. ' + carros[x]);
      console.log ('2. Lista com Audi:');
      console.log('4. Itens no array:');
      console.log(carros)
      console.log(`Quantos itens tem no Array ${carros.length}`);
      */
//---------------------------------------------------------------------------
      /*O QUE SÃO OBJETOS?

      let identificacao ={
        nome: 'Mary',
        age: 30,
        city: 'SP' ,
        characteristics: {
          heigth: 1.65,
          hair: 'black',
          eyes: 'greens',
        }
      }

      console.log(`${identificacao.nome} has ${identificacao.age}`);
      console.log(identificacao.characteristics.hair);
      console.log(`${identificacao.nome} has eyes ${identificacao.characteristics.eyes}`);
      console.log(`A altura de ${identificacao.nome} é ${identificacao.characteristics.heigth}`);


      const menu ={
        massa: 'Macarrao',
        fibra: 'arroz',
        carne: ['Salmao', 'Frango','Churrasco'],
        bebida: {
          comalcool: 'caipirinha',
          semalcool: 'Suco Natural',
        }
      }

      console.log (`O prato de hoje é ${menu.massa} com ${menu.carne[2]} acompanhado de 
       ${menu.bebida.semalcool}`);

       //aqui usamos array dentro do objeto, e puxamos no console com efeito 
       //cascata também 

       const familia = {
        nome:'Manoel',
        mae:'Rose',
        irma:'Nay',
        irmao:'lipe',
        Conjugue: 'Denis',
        Pet: ['Harry','Oliver', 'Dylan'],
        endereço:{
          PaisDenis: 'Guaianases',
          Meuspais: 'Itaquera',
          Moradia: 'analia franco'
        }
       }

       console.log(`Na minha familia o nome da minha mãe é ${familia.mae}
       e do meu irmao mais velho é ${familia.irmao} ,o nome da minha irma mais nova 
       é ${familia.irma}`);

       console.log(`Meu namorado se chama ${familia.Conjugue}, ele tem um cachorro chamado 
       ${familia.Pet[1]} mas ele mora em ${familia.endereço.PaisDenis}`);

       console.log(`Eu tenho um pet chamado ${familia.Pet[0]} e também ja tive uma calopsita chamado ${familia.Pet[2]}`);

       console.log(`Meu namorado e eu moramos em ${familia.endereço.Moradia}`);

       console.log(`Minha mae com meus irmaos moram em ${familia.endereço.Meuspais}`);

*/
       /*ACESSANDO E ALTERANDO OBJETOS

       let personagem = {
        nome: 'Manoel',
        idade:90,
        olhos: ['preto','azul'],
        caracteristicas: {
         forca: 20,
         magia: 5,
         stamina: 15
        }
       }

        ex: conforme codigos anteriores

        personagem.nome = 'Pedro';
        console.log(personagem.nome)

      (aqui estou acessando e alterando o nome, note q no código anterior
        o "nome: 'Manoel' era manoel e agr vc alterou para 'Pedro' ")
       
       personagem.caracteristicas.forca += 5;
       console.log(`Forca: ${personagem.caracteristicas.forca}`);

       Aqui note que no nosso objeto a forca do personagem é 20
       mas nós aumentamos com 5 de forca totalizando 25 neste exemplo.
       
       personagem.olhos.push('verde');
       console.log(personagem.olhos);

       o retorno será : preto, azul, verde (que foi o que vc adcionou.)
       neste caso usamos o push para adcionar pq se trata de um array usado no obejto

       */


       /* let personagem ={
        nome:'Natiely',
        idade: 90,
        carros: [
          {modelo: 'fiat', cor: 'preto'},
          {modelo: 'Ferrari', cor: 'vermelho'},
          {modelo: 'Captiva', cor: 'branco'}
        ]
       }
       personagem.carros[1].modelo= 'Fusca';

       console.log(personagem.carros[1].modelo);
       console.log(personagem.carros[0].cor);
       console.log(personagem.carros[2].modelo); 
  
        Nesta Situação, criamos um objeto, nele note-se que 
       criamos um array, e dentro do array criamos um objeto para 
       criar modelos de carros diferentes. No console acima mostra
       a forma correta de acessar.
       usamos tambem alteracao do modelo ferrari neste exemplo para fusca.
                    HORA DE PRATICAR O QUE VOCE APARENDEU:   */



                  /*  FUNCTION DENTRO DE UM OBJETO

                    let personagem = {
                      nome: 'Harry',
                      sobrenome:'Biesarck',
                      idade:90,
                      olhos: ['preto','azul'],
                      caracteristicas: function (){
                        return `${this.nome} ${this.sobrenome}`; 
                      }
                    }
                  
                    console.log(personagem.caracteristicas ());  */

                            /*Praticando função dentro do objeto
                    let cadastro ={
                      rg: 123456,
                      cpf: 654321,
                      nome: 'lacerda',
                      informacoes: function () {
                        return `${this.rg} ${this.cpf}`;
                      }
                    }
                     console.log(cadastro.informacoes());
                         

                     let anime ={
                      shoujo: 'Toradora',
                      terror: 'Another',
                      acao: 'atack on titan',
                      liveaction: function (){
                        return `Anime de Terror bom é ${this.terror} e de acao é ${this.acao}`
                      }
                     }

                     console.log(anime.liveaction());

                     //obs: neste exemplo  podemos usar arrow function
                     // que é ()=> { }   porem nao podemos ter acesso ao this
                     //nao vamos ter acesso ao propio objeto vai ser undefined
                     //para ter acesso ao this crie uma function normal

                     // Function normal

                         function exemplo (){
                        return `${ }`
                     }
                     

                     // Arrow Function() => { } ex:

const somar = (x, y) => {
  return x + y;
}
console.log(somar(10, 5)); */


/*O LOOP FOR - for (){}- é quando vc quer que um codigo seja executado diversas vezes

for (let x = 1; x <= 50; x++) {
  for (let y = 1; y <= 50; y++) {
    console.log(`${x}* ${y} =  ${x * y}`);
  }
}  */

/*Criamos uma tabuada  loop for

for (let n= 0; n <= 50; n++ ){
  for(let d= 0; d <= 50; d++){
    console.log(`${n}*${d}= ${n*d}`);
  }
}

for ( let a=0; a <= 20; a++){
  for (let b=0; b <=20; b++){
    console.log(`${a}+${b}= ${a+b}`);
  }
}

for (let a=0; a<=5; a++){
for(let b=0; b<=5; b++){
  console.log(`${a}*${b} = ${a*b}`);
}
}

for (let conta =1; conta <= 10; conta++){
 for (let tabuada=1; tabuada <=10; tabuada++){
  console.log(`${conta}-${tabuada}= ${conta-tabuada}`);
 }
}
*/

/* DANDO UM LOOP EM ARRAYs
        // length um numero q é a quantidade de itens no array usado no console
      // .pop = REMOVER o ULTIMO     ex:  bolo.pop()   - O Uso do pop remove o ultimo item da lista 
     // .shift = REMOVER o PRIMEIRO  ex:  bolo.shift()
    // .push - Para ADCIONAR um item push  ex:  bolo.push('item')


    //vamos fazer um loop do seguinte exemplo:
    //lembrando que podemos fazer e varias maneiras ::::

    
let cores = ['preto', 'azul','Vermelho','Branco','Verde'];
cores.push('amarelo'); //adcionando

//1) 
for (let a=0; a<=10; a++){
 console.log(cores [a]); } 
 
 //neste exemplo ele pegou os itens, mas rodou valor a mais do que os itens que tem no array
 //ex: eu tenho 6 itens de cores, mas ele rodou 10 vzs. pra isso nao acontecer::

//b)
for (let n=0; n < cores.length; n++){  //length -um numero q é a quantidade de itens no array usado no console
 console.log(cores [n]);
} 
//neste caso o seu loop vai executar conforme a quantidade  de itens que vc tem automaticamenente.
//se caso eu der um cores.push('item') este item vai automaticamente aparecer na lista.


//c) - uma forma mais facil usando in :::


let paleta = [
 {nome: 'preto', qt: 10},
 {nome:'azul', qt:5},
 {nome:'vermelho', qt: 7}
]


for (let i in cores){
 console.log(cores [i].nome);
}
aqui acessa o objeto nome

//neste ex. pegamos a chave let  i e usamos a chave pra acessar o item que queremos
//alem de ser mais simples ele vai executar a quant de cores tiver de itens.
//e assim executa o mesmo resultado.


//D)--
//Tem também uma outra forma de fazer com o mesmo resultado usando of.::
//ja neste exemplo pegamos o valor e cor e usamos como  propio valor
//sem precisar fazer console.log(cores[cor]) e sim Console.log(cor)  ::


for(let cor of cores){
  console.log(cor);
} 
//vamos criar um exemplo usando o of

let paleta = [
 {nome: 'preto', qt: 10},
 {nome:'azul', qt:5},
 {nome:'vermelho', qt: 7}
]


//criamos um array com objetos
//para acessar os objetos :::

for(let water of paleta) {
 console.log (`Nome: ${water.nome}- ${water.qt}`);
} 

//Podemos usar o loop para por exemplo alterar alguma informação
//ex Para deixar tudo com nome maiusculo ::::

for (let i in paleta){
 paleta[i].nome = paleta [i].nome.toUpperCase();
}

console.log(paleta); */

/*O LOOP WHILE 

let numero =0;

while (numero <10) {
  console.log (`O número da vez é ${numero}`);
  numero++;
}

*/

/*Exercicio de loops
// 1. Faça um Loop que mostre todas as frutas

let fruits = ['maça','Uva', 'Banana'];
 for (let a in fruits) {
  console.log(fruits[a]);
 }
 

 //2. Conte de 1 até 100 através de um WHILE

 let number = 0;

 while (number < 100) {
  console.log (`o number is ${number}`);
  number++;
 }

*/

 /*FUNÇOES DE ARRAY
 

 let fruits =['maça','banana','uva', 'manga'];

fruits.push('Laranja'); //adciona item
fruits.pop();  //remover ultimo array
fruits.shift(); //remover o primeiro item
fruits[0]='Pera'; //substitui o index 0 ou qualquer outro index-(numeraçaode item que quiser)
fruits.sort(); //Aqui deixa os itens do array em ordem alfabetica
fruits[fruits.length - 1] ='mamao'; // aqui modifica o ultimo item do array e para saber qual o numero do ultimo, usamos o lenght - 1
console.log(fruits.join('----'));// (comando join) junta os itens do array ou adciona o que vc quiser entre seus itens do array


console.log(fruits);
 console.log(fruits.length); //retorna em numero seus itens do array  */

 /*-----------ORDENAÇÃO DE ARRAY (do menor para o maior)


 let fruits =['maça','banana','uva', 'manga'];

 fruits.sort(); // deixa os itens em ordem alfabetica
fruits.reverse(); // aqui reverte seus itens do ultimo para os primeiros e os primeiros para os ultimos (ñ organizado em ordem alfabetica)

//mas se usado os dois juntos o  fruits.sort(); e 
   //                            fruits.reverse(); 
   //o retorno vai ser dos itens em ordem alfabetica sendo do Z ao A. (sendo organizado)

 console.log(fruits) 


 let cars =[
  {brand: 'Fiat', year:2022},
  {brand:'Bmw', year: 2018},
  {brand: 'Ferrari', year: 2020}
 ]

 cars.sort((a, b) => {
  if (a.year > b.year) {
    return 1;
  } else if (a.year < b.year) {
    return -1;
  } else{
    return 0;
  }
 });   
 // ------------------
 //Neste caso usamos o if else, de modo explicativo::
 //se a.year (2002) for maior que b.year (2018) o return vai ser 1 caso contrario sera -1 e assim
 //sussesivamente, independe do ano. ele vai fazer o retorno automaticamente 
 //trazendo os numeros menos pra frente.
 //sendo assim o retorno do console fica: 2018, 2020,2022  ---------------
 
 

     //UMA FORMA MAIS SIMPLIFICADO
 cars.sort((a, b) =>{
  return a.year - b.year;
 }); 
 
 // neste exemplo fizemos uma conta de: 2022 - 2018 =4 .Quanto maior o resultado mais vai ficando abaixo, sendo assim 2018 vem primeiro na lista ordenada

 //SEGUNDA FORMA SIMPLICADA 
 
 cars.sort((a, b) => a.year - b.year); 

 console.log(cars); 

 //uma opção de fazer revertido do maior para o menor é:
 cars.sort((a, b) => b.year - a.year);  

 console.log(cars);

 ////neste exemplo apenas invertemos  a e b. retornando assim:
 //2022, 2020, 2018.
*/


 /*---------------ITERAÇÃO DE ARRAY 1

 let fruits =['Maça','Banana',"Abacaxi", "Laranja","Uva"];
 


 let bigFruits = fruits.filter((value)=> value.length > 4); //como so temos uma linha de codigo podemos fazer assim.
   //------------------^^^^^^ filterrr
 // (forma simplificada ja q retorna true or false): 
   // return item.length > 4;
  //Mas geralmente a forma completa é:

  if(item.length > 4){
      return true;
    } else {
      return false;
    }
 
 
 console.log(bigFruits);
 //retorno do console -> banana, abacaxi laranja, pq sao maiores que 4 letras.
 //a funçaofilter ela gera um novo array, entao precisamos salvar em algum lugar por issom criamos o let bifruits = fruits.filter....


 //PROXIMA FUNÇÃO QUE RETORNA POSITIVO OR FALSO

 let fruits =['Maça','Banana',"Abacaxi", "Laranja","Uva"];

 let ok= fruits.every((value)=>{   // <-----------every
     return value.length > 3;   //forma simplificada
  
  
     //podemos usar esta forma ou a forma simplificada acima
     if(value.length > 3){
      return true;
     } else {
      return false;
     } 
 });

 if (ok) {
  console.log ('Todos São maiores que 3');
 } else {
  console.log('Não são Todos maiores que 3');
 }
  
 //Neste caso TODOS OS ITENS que sforem maior que 3 serao filtrados.

 // ha eu quero que pegue se alguns forem maior que tres. meste caso usamos some  nolugar do every,ex

 let fruits =['Maça','Banana',"Abacaxi", "Laranja","Uva"];

 let ok = fruits.some((value) =>{
     return value.length > 3;   //<------- some
  });

    if (ok) {
     console.log ('Algum item é maior que 3');
    } else {
     console.log('Nenhum Item é  maior que 3');
    }

    //Nesta aula vimos o filter, every e some
    //a diferença do some para o every é que o some
    // quando um ja é o suficiente ele ja fica satisfeto diferente do every
    // que precisa que todos sejam satisfatorios

    //vamos aprender mais um::
    //ex: como saber se eu tenho uma determinada fruta? exemplo ::

    let fruits =['Maça','Banana','Abacaxi', 'Laranja','Uva'];

    if (fruits.includes ('Uva')) {
      console.log('tem uva sim');
    } else {
      console.log('Não tem uva...');
    }
//retorno do console: tem uva sim


*/



/*-----------O QUE É DOM??

// Aula 1) -- DOM=  document Object Model

//aprendendo a selecionar tag:
//no console da pagina web: digitar:
//document.getElementsbyTagName("h1") enter
// vai mostrar todas suas tag h1 no console


//Aula2)) -- selecionar ID do html
//document.getElementById("teste")  //observe que element esta no singular.
//pq id nao pode ser usada duas vzs
//OBS: Sempre lembrar de colocar letra Maiuscula nas primeiras letras

//Selecionar Class do html

//document.getElementsByClassName("botao")

//OBS: Voltamos ao plural pq a class pode ser utilizada diversas vzs

//tem uma foprma que voce pode utilizar de forma simplificada. vejamos:

//document.querySelector("#teste") ------>id

//document.querySelector(".botao") -----class

//document.querySelector("h1") --- pela tag

//igual usado no css o ponto . o # e a tag diretamente pra estilizar algo.

//vamos em outro ex: como faço para pegar todos os itens da minha <li>? >

//document.querySelectorAll("li")   --neste exemplo o all significa todos

//mas e se eu tiver uma outra div com uma outra lista? 
// vamos acessar a primeira lista:
//document.querySelectorAll (" #teste ul li")  o retorno vai ser a primeira lista note q acessamos o id primeiro
//obs: quando se usa document.querySelectorAll o console retorna um array por uso do all mas se usar document.querySelector retorna comum.
*/

/*EVENTOS DE CLIQUE AULA 2----------
//no html eu criei uma funcao no button e na pag js -->

function clicou(){
  console.log("Clicou no botão");
}
//podemos fazer de duas maneiras. 1- no html usando onclick="clicou()" ou no propio javascript >>

let botao = document.querySelector('.botao'); // podemos fazer assim ou criar uma variavel usando let botao = ... neste exemplo usaremos a variavel pra ficar mais organizado
botao.addEventListener("click", () => {     //addEventListener significa olheiro     
  clicou();
});

 //PRATICANDO:

function titulo (){
  console.log('cliquei no Titulo c:')
}

let teste = document.querySelector(".titulo")
teste.addEventListener ("click", ()=>{
  titulo();
})



function item (){
  console.log('Cliquei no item 3');
}

let iniciante = document.querySelector(".i3")
iniciante.addEventListener("click", () => {
  item ();
})

function item1 (){
  console.log('Cliquei no Item 1')
}

let variavel = document.querySelector (".i1")
variavel.addEventListener ("click", () => {
  item1 ();
})

function botao (){
  console.log("Cliquei no botão")
}

let lalala = document.querySelector(".botao")
lalala.addEventListener ("click", ()=> {
  botao ();
})


function i2 () {
  console.log('Cliquei no Item 2')
}

let n2 = document.querySelector(".i2");
n2.addEventListener("click", ()=>{
  i2();
});

function i4 (){
  console.log("Cliquei no Item 4");
}

let n4 = document.querySelector(".i4")
n4.addEventListener ("click", ()=>{
  i4 ();
}) */


/*MANIPULANDO ELEMENTOS 1

//Para alterar alguma coisa o 1 passo é selecionar o elemento -->
//obs: lembrando que vamos deixar ativo a função no html no botao. que a função so
//vai funcionar ao clicar determminado item com o --- onclick="clicou ()"    <-- esta é a funçao

function clicou (){  // selecionamos a funcao clicou do html
  const teste = document.querySelector('#teste')  //aqui vamos selecionar a div teste
  console.log(teste);
}

// uma das coisas que podemos fazer é ver o que tem dentro desse elemento que foi selecionado

function clicou (){  
  const teste = document.querySelector('#teste')  
  console.log(teste.children);  //children = filhos imediatos. (Primeiros filhos)
}
//usando o .children o retorno no console mostra os elementos filhos neste caso exibe um lemento 1ul e 1strong
//mas e se tivermos mais itens dentro do ul, como acessar? --->

function clicou (){  
  const teste = document.querySelector('#teste')  
  console.log(teste.children[0].children);  // pela logica, como é um array podemos acessar da seguinte maneira teste.children[0].children > um filho acessando outro elemento filho. efeito cascata
}


//o [0] indica que vc vai acessar o primeiro filho lembrando que temos dois filhos nesta explicação um ul e um strong
// o retorno no console vai mostrar que tem dois li
//Até aqui identificamos o que tem em um elemento . vamos prosseguir :


//A seguir vamos ver como visualizar todos os itens de um elemento incluindo seus elementos filhos e filhos dos filhos.(ou seja todos itens)

function clicou (){  
  const teste = document.querySelector('#teste')
  const ul =teste.querySelector('ul')  //usando uma forma facil para selecionar o elemento filho

  //console.log(ul.innerHTML); //se usarmos inner.HTML o retorno no console mostra os elementos em formato de texto
  //ul.innerHTML = "<li>Item modificado </li>"
  // }
//o retorno do console mostra todos os filhos de um elemento..(todos os itens)
//console.log(ul.innerHTML); --mostrar em formato de texto

// Mas se usado desta maneira ao inves de-- console.log(ul.innerHTML); --- podemos modificar nosso conteudo  usando :::
 // ul.innerHTML = "<li>Item modificado </li>"
 // }


//Ou se nao quer alterar e apenas adcionar ::
//ul.innerHTML += "<li>Item modificado </li>" //adciona o sinal de + ou concatena  ul.innerHTML = ul.innerHTML+ "<li>Item modificado</li>
//ul.children[0].innerHTML = "item <strong> alterado</strong>"; //este é um modo mais eficiente de alterar algum item dentro de um elemnto podendo usar html
//}                                                             // tbm temos o inner.text -- ele retorna como texto
console.log(ul.outerHTML); } 
//retorna todo conteudo no console levando em consideração o propio elemento tbm
*/

/*MANIPULANDO ELEMENTOS 2

function clicou (){  
  const teste = document.querySelector('#teste')
  const ul =teste.querySelector('ul');

  ul.children[0].append("(alterado)");
}

//usando o append nós estaremos adcionando algo ao nosso elemento, 
//alem de alterar ele adciona sem excluir o nosso item e sem mexer na memória.

//exemplo no retorno do console o primeiro  item da li ficará -> Item 1 (alterado)
// ou seja o item 1 + o item adcionado através do append.
// a diferença de uso do innerHTML para o append é que, o innerHTML se for uisado para adcionar
// ele excluira da memoria todo conteudo e adcionara tudo novmente mais o item adcionado de alteração.
//vamos supor que eu preciso adcionar um item de uma longa lista. e uso o inner..
// ele vai excluir todo meus itens pra depois adcionar estes itens novamente + o itenm que eu queria adcionar ,muito trabalho não?


//Pra adcionar um elemento usando o appendchild:
//primeiro precisa criar o elemento na memoria pra depois usar o appendchild:

function clicou (){  
  const teste = document.querySelector('#teste')
  const ul = teste.querySelector('ul');

  let newLi = document.createElement("li"); // agora tem um elemnto criado um li sem nada
   newLi.innerText = "Item adcionado"; //adcionando conteudo dentro dele. ate aqui criamos um elemento
   
   ul.appendChild(newLi);
  }
//Outro metodo é :

function clicou (){  
  const teste = document.querySelector('#teste')
  const ul = teste.querySelector('ul');

  ul.innerHTML += "<li> Item Adcionado</li>";

}
// porém como explicado anteriormente, ele passa por um p´rocesso de exclusao para aadcicionar todos os itens novamente indivualmente.
//com poucos itens nao faz muita diferença, mas se for o caso de mil itens, a diferença vai ser bem relativa.
//entao a forma correta para adcionar um elemento é usando o appenChild :)

let newLi = document.createElement("li"); 
newLi.innerText = "Item adcionado"; 
ul.append(newLi);
}

//OBS: Quando usamos appendChild -> é adciona um item no final da lista 
//mas e se eu quiser adcionar como primeiro?
//sendo assim usamos prepend :

ul.prepend(newLi);
}

//OBS2= O append adiciona um 'texto' no final do elemento selecionado, já o appendChild adiciona um 'elemento' no final do elemento 'pai' selecionado.
*/

/*MANIPULANDO ELEMENTO 3

function clicou (){  
  const teste = document.querySelector('#teste')
  const ul = teste.querySelector('ul');


  const newButton = document.createElement('button');
  newButton.innerHTML = "Botão"

  ul.before(newButton);

  const newTitle = document.createElement('h1');
  newTitle.innerHTML = "title";

  ul.after(newTitle);



  const newDiv = document.createElement('div');
  newDiv.innerHTML ="Nova Div";

  ul.after(newDiv);

}

// QUE TAL CRIAR UM NOVO ELEMENTO exemplo o  <li> uma lista? 
// pra isso  QUE TAL USAR O LOOP, para criar esta lista?
//let's go!!


function clicou (){  
  const teste = document.querySelector('#teste')
  const ul = teste.querySelector('ul');



  let newUl = document.createElement('ul');   //cria primeiro o elemento

  for (let i = 0; i < 5; i++) {              // depois oq vai ter dentro
    let newLi =document.createElement('li');
    newLi.innerHTML ="item add " + i;
    newUl.append(newLi);
  }
  ul.after(newUl);   // chama o elemento criado. 
}

*/


/*MANIPULANDO ATRIBUTOS

//criamos no html um input com 3 atributos quais irei manipular..

function clicou (){
  const input =document.querySelector('input');
//console.log (input.getAttribute ('placeholder'));  //aqui é só para confirmar o que tem dentro do placeholder


//vamos começar a pegar os atributos dos elementos.
//os atributos sao as propiedades de um elemento ex: type, placeholder, name ...

   //   console.log(input.getAttribute('type')); // no lugar de type colocamos o atributo que queremos saber
  //   }
//na linha acima vimos se tem um atributo ou o que tem dentro do atributo type.
//neste caso com o retorno : text 

//como saber se este input tem placeholder?

if (input.hasAttribute('placeholder')){
  console.log('Tem placeholder sim');
} else{
  console.log('Não tem placeholder');
}
}
//neste caso o retorno é: tem placeholde sim  


// Agora vejamos o uso do setAttribute que é utilizado para adcionar um atributo ou se já existir, ele altera.
function clicou (){
  const input =document.querySelector('input');

 // input.setAttribute('placeholder', 'Placeholder alterado'); }

//quando clica no botao mostra sua alteraçao no placeholder

//vamos fazer uma brincadeira. vamos trocar no html o clique aqui para mostrar senha
//vamos alterar os parametros, sendo assim o type  para text mas antes disso
//mudar o type text do html para type password. obg: mudamos o placeholder para digite sua senha.(ante era clique aqui).
input.setAttribute('type', 'text');
}

//no retorno, nos digitamos nossa senha, mas ao clicar no botao, ele retorna em texto

// agora vamos fazer a  troca de indo e voltando

function clicou (){
  const input =document.querySelector('input');
  if (input .getAttribute ('type') === 'text'){
     input.setAttribute('type', 'password');
  } else {
    input.setAttribute('type', 'text');
  }
}


//ao clicar no botao, ele mostra sua senha. clicando novamente ele esconde a senha.

//vamos trocar o texto do botão:

function clicou (){
  const input =document.querySelector('input');
  const botao = document.querySelector('.botao');

  if (input .getAttribute ('type') === 'text'){
     input.setAttribute('type', 'password');
     botao.innerText = "mostrar Senha";
  } else {
    input.setAttribute('type', 'text');
    botao.innerText = "Ocultar senha"; //innerText é o texto dentro do elemento
  }
}
//o retorno ao clicar o digitar a senha e clicar no botao é mostrar a senha
//e mudar o texto do botao para "ocultar senha." sendo assim
//ao clicar novamente ele oculta a senha... fizemos aqui o efeito de vai e vem. :)
*/

/*MANIPULANDO O CSS :)

function clicou (){
  const li = document.querySelector('li');

  li.style.backgroundColor = '#00f';
  li.style.fontSize = '15px';
  li.style.color = '#ccc';
}

//Aqui usamos o style para estilizar com o elemento à frente qual vai ser alterado. 
//E uma observação, nao usamos o - como Font-size. usamos a palavra junta e a primeira letra da segunda palavra em Maiuscula.

*/


/*TRABALHANDO COM CLASSES

function clicou (){
  const button =document.querySelector('button');

  button.classList.add('Azul');     //adc
 // button.classList.remove('verde');   //remove

 //  para verificar quais class existem em um elemento usamos : console.log(button.classList);
}

//Agora vamos fazer uma brincadeira, que ao clicar vai adc uma class e ao clicar novamente vai remover.

function clicou (){
  const button =document.querySelector('button');

  if (button.classList.contains('azul')){ //Se o elemento button contém a class azul..
    button.classList.remover('azul');  // iráa remover o azul e add o verde
    button.classList.add('verde');
  } else{
    button.classList.add('azul');        //caso contrario (ao clicar o botao novamente) vai add azul e remover o verde :D
    button.classList.remove('verde');
  }

}

//Existe outra função que simplifica este código de adc e remover:

function clicou (){
  const button =document.querySelector('button'); 

  button.classList.toggle('Azul');
}

//podemos só trocar a class usando replace :
function clicou (){
  const button = document.querySelector('button'); 

  if(button.classList.contains('amarelo')){
    button.classList.replace('amarelo', 'vermelho');
  }else {
    button.classList.replace('vermelho', 'amarelo');
  }

}
//usando o replace de modo mais simplificado do que usar o add e remove :)  */

/*EVENTOS DE TECLADO 1

//existem duas formas de colocar estes eventos, 1 no html e 2- no javascript.
//vamos ver a primeira forma utilizada no html: (no input)

function apertou(){
  console.log("APERTOU");
}
function segurou(){
  console.log("SEGUROU");
}
function soltou(){
  console.log("SOLTOU");
}

//toda vez que voce no input digita, digita segura e solta, vai mostrar no console quantas vzs vc fez.
//agora vamos colocar o evento em todo documento usando o JS.

const input = document.querySelector ('input');
input.addEventListener()  //forma de colocar no input

document.addEventListener('keyup', soltou);
//neste exemplo usamos o evento Keyup, quando digitamos sem precisa clicar no input ele tem um retorno no console.

*/

/*EVENTOS DE TECLADO 2

//vamos seguir com o conteudo anterior, porem usaremos no input:

function soltou(event){
    console.log(event.code); // quando usa o code ele mostra detalhadamente qual tecla foi clicada ex: shiftright
}                //tambem tem o key sendo mais simplorio, se clico shift, ele nao mostra qual shift eu cliquei se foi a direita ou da esquerda.

const input = document.querySelector('input');
 input.addEventListener('keyup', soltou);
 // quando o keyup executa ele sempre vai mandar no parametro dessa função
 // o event tem detalhes do que aconteceu. pode ser event ou apenas e que funciona.
 // ao clicar no input o retorno no console mostra qual tecla foi clicada.


 //pra saber se determinada tecla estava sendo pressionada, faremos assim: ele retornara um boolean:

 function soltou(event){
  console.log('TECLA PRESSIONADA: '+ event.code); // tanto o code quanto o key servem para saber o que aconteceu..
  console.log('SHIFT?'+ event.shiftKey);   // e esses sao os auxiliares pra saber se determianada tecla foi ou nao pressionada.
  console.log('ALT?' + event.altkey);
  console.log('CTRL?' + event.ctrlkey);  //posso fazer com qualquer tecla
  console.log('--');

 }
 const input = document.querySelector('input');
 input.addEventListener('keyup', soltou);

 //Retorno : TECLA PRESSIONADA: KeyH
          // javaScript.js:2031 SHIFT?true
//aqui se eu clico e solto o shift retorna como false, mas se eu pressiono e seguro ele retorna como true, mas ao soltar ele retorna um outro evento como false.
*/

/*EXERCICIO : LISTA DE TAREFAS SIMPPLES


//crie uma lista, que ao digitar atraves do input o texto e clicar o
// botao enviar, o texto envie para a lista :

//Primeiro selecionando os elementos-
const input = document.querySelector('input')
const lista = document.querySelector ('ul')

//criamos as funçoes dos elementos

function  handleKeyup (event){
   if (event.key === 'Enter') {
    //Adcionar Elemento LI na lista
    const newLi =document.createElement('li');
    newLi.innerHTML = input.value;
    lista.appendChild(newLi);

    // Limpar o campo de texto
    input.value = '';
   }
}
 //Eventos
input.addEventListener('keyup', handleKeyup);
*/

/*O QUE É OO ?  (Orientação à objetos) - OOP

A Orientação a Objetos(OOP, sigla em inglês para Object - Oriented 
  Programming) é um paradigma de programação que se baseia no conceito de
"objetos".Ela é um dos principais paradigmas de programação utilizados
 na criação de software atualmente.A ideia fundamental por trás da OOP
 é organizar o código de uma maneira 
que se assemelha à maneira como as coisas funcionam no mundo real. 
*/

/*POO no JavaScript

-Programação Orientada a Objetos (POO - OOP)
-Programação funcional 
- Programação Funcional (PF - FP) (Functional Programming Paradigm)

-CLASSES
-FUNÇÕES/ OBJETOS  */

