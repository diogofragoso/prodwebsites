/* 
Variáveis do tipo let //
 1 - Não podem ser redeclaradas
 2 - Segue o contexto de bloco

Variáveis do tipo var
 1 - podem ser redeclaradas
 2 - Não respeita o contexto de bloco !!!!! CUIDADO !!!!!!!!!!! 
 
 Constantes
 1 - Não podem ser redeclaradas/redefinidas
 2 - Não podemos mudar o conteúdo 
 */


 //Operadores
 /*
    + - Adição
    - -> Subtração
    * -> Multiplicação
    ** -> Exponenciação
    / -> Divisão
    % -> Módulo
    ++ -> Incremento
    -- -> Decremento
 */
 
let nome10="Joãozinho";
let n1=10;
let n2=10;
let n3=10;
let n4=10;
let result = 64;
let raiz = Math.sqrt(result);

let media = (n1 + n2 + n3 + n4) / 4;


// console.log(" A média do aluno " + nome10 + " é " + media);

let carro = {
    modelo: "GOl GTS",
    cor:"Amarelo",
    marca:"fiat",
    ano:"2021",
} 

// console.log("Modelo: " + carro.modelo + "\n" + "Cor: " + carro.cor + "\n" + 
// + "Marca: " + carro.marca);

// Funções
// 1 - Como criar uma função
 function soma (x,y){
    return x + y;
 }
 
function sub (x, y){
return x - y;
}
function div (x, y){
return x / y;
}
function mult (x, y){
return x * y;
}

// Para invocar a função use nome da função mais argumentos
n1 = 10;
n2 = 5;
let xy = soma(n1,n2);


//  console.log(" O resultado é : " + div(n1,n2));
function bomDia(){
    console.log("Primeiramente bom dia !!!");
}

function saudacao () {
    console.log("Boa noite !!!");
    bomDia();
}

// saudacao();

/* DESAFIO*/
//Crie uma função que calcule a média de 4 notas


function media2(x1,x2,x3,x4){

    let resultado = (x1 + x2 + x3 + x4) / 4;
    console.log(" A média do aluno é " + resultado)

}


let n10 = 5;
let n12 = '5';
console.log(typeof(n12));





 




