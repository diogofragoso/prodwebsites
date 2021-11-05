let nome = "Mario o \"brabo\" ";
// console.log(nome.length);

// Mario "Brabo"
// console.log(nome);

let palavra = "Ana, Maria, João";
let placa = "abc-1234";
let letrasDePlacas = placa.slice(4);
// console.log(letrasDePlacas);

//Substituir 
let palavra2 = " O preço do produto x é R$10.90 e produto y é R$10.90";
let palavra3 = palavra2.replace("10.90","12.90");
 palavra3 = palavra2.replace(/10.90/g,"12.90");
// console.log(palavra3);

// Minúsculas para Maiúsculas  
let min = "aluno";
let mai = min.toUpperCase();
// console.log(mai);
// console.log(mai.toLowerCase());

let primMaiuscula = min[0].toUpperCase() + min.slice(1);
// console.log(primMaiuscula);

// Remover espaços

let palavra4 = "    Efigenia  Da Silva  Matos  ";
let remPalavra4 = palavra4.trim();
// console.log(remPalavra4);

// Pesquisa em strings

let palavra5 = palavra4.indexOf("Da");
// console.log(palavra5);

let ex1 = palavra4.includes("Cloroquina");
// console.log(ex1);
     

 //Template string
 let m1 = "Maria";
 let n20 = 100;
 let cpf = " 123.456.456-78";

//  console.log("O ganhador é : " + m1 +  " CPF: " + cpf + " " + "receba o valor de R$" + n20 );

// // Exemplo 2 -> Interpolação
//  console.log(`O ganhador é ${m1} CPF ${cpf} receba o valor de R$ ${n20 * 2}` );

 let saldo = 547.654687146;
//  console.log(saldo.toFixed(4));

 let str = '5';
//  console.log(Number(str) / 2 );

 let str2 = "2";
//  console.log(str / str2);
//  console.log(str / "maria");

 let numero = 500;
 let strNumero = numero.toString();
//  console.log(typeof(strNumero));

let yz = Number.MAX_VALUE;
console.log(yz);
