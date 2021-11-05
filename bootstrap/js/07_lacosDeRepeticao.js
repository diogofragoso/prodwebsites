// Objetivo --> Resolver o problema 
// Desafio
// Exiba a palavra aluno 10000 vezes na tela
//Laço For

let aprovados = ["Maria", "Ana", "José", "Atevaldo", "Zigomar", "Petronilha", "Jose", "Pedro", "Thiago"];

for(let cont = 0; cont < aprovados.length; cont++){      
    //   console.log("Parabéns pela aprovação : " + aprovados[cont]); // isso aqui será repetido
  }

for (let j in aprovados){
    // console.log("Aprovador : " + aprovados[j]);
}


// Laço While
let x=0;
while ( x < 5)
{
// console.log(" X ainda é menor que 5");
x++;
}

x=0;

do {
    // console.log("Boa noite");
    x++;
}
while( x < 4);

// Switch ou Caso

let y = 50;


switch(y){
    case 0:
    console.log("Você escolheu a opção 0");
    break;
    case 1:
        console.log("Você escolheu a opção 1");
        break;
    case 2:
        console.log("Você escolheu a opção 2");
        break;
    case 3:
        console.log("Você escolheu a opção 3");
        break;
    default: 
    console.log("Escolha uma opção válida...")
}

// Pedidos de carrinho de lanche
let total=0;

switch(y){
    case 0:
         console.log("Você escolheu um x-bacon valor R$15.90");
         total = total + 15.90;
    break;
    case 1:
        console.log("Você escolheu um x-salada valor R$12.90");
        break;
    case 2:
        console.log("Você escolheu a opção 2");
        break;
    case 3:
        console.log("Você escolheu a opção 3");
        break;
    case 4:
        console.log("Você escolheu Refri de 350ml --> coca-cola R$5.00");
        break;
    case 100:
        console.log("Fim do pedido");
        console.log(total);
        break;

    default: 
    console.log("Escolha uma opção válida...")
}











