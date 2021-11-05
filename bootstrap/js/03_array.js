//ARRAY

const aluno = ["proibida", "E-mail","Contato"];
// console.log(aluno[1]);

let str = "ola tarde noite proibida";
// console.log(str.includes(aluno[0])); //60%

const nomes = [];
nomes[0] ="João";
nomes[1] = "Maria";
nomes[2]= "Pedro";

// console.log(nomes[0]);

// Métodos para arrays
// Remover o último elemento do array pop()
nomes.pop();
nomes.pop();
//Adicionar um elemento ao array
nomes.push("Dagoberto");
nomes.push("Roberto");
nomes.push("Joana");

// Remover o primeiro elemento
nomes.shift();

// Adiciona um elemento no início
nomes.unshift("Tiago");

// Adicionar novos elementos  em qualquer posição usamos splicing
// neste caso 1 significa a posição que o novo elementro será inserido
//2 significa quantos elementos serão removidos

nomes.splice(2,0,"Nabuco");
// console.log(nomes);

// Ordenação
nomes.sort();
// console.log(nomes);

const num = [41,54,1,2,98,74,200,300,500,999];
num.sort();
// num.reverse();
// console.log(num.length);
let maior = ( num.length) - 1 ;
console.log(" O maior número é " + num[maior]);
