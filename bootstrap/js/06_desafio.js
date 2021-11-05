let n1 = 20;
let n2 = 20;
let n3 = 21;
let n4 = 4;
let n5 = 15;
let n6 = 6;
let v1 = 0;
let v2 = 0;

// if (n1 > n2 && n1 > n3) {
//     v1=n1;
//     // console.log("O maior número é : " + n1);
// } else {
//     if (n2 > n3) {
//         v1=n2;
//         // console.log("O maior número é : " + n2);
        
//     } else{
//         v1=n3;
//         // console.log("O maior número é : " + n3);        
//     }
// }


// if (n4 > n5 && n4 > n6) {
//     v2=n4;
//     // console.log("O maior número é : " + n4);
// } else {
//     if (n5 > n6) {
//         v2=n5;
//         // console.log("O maior número é : " + n5);
        
//     } else{
//         v2=n6;
//         // console.log("O maior número é : " + n6);        
//     }
// }

// if(v1 > v2){
//     console.log("O maior número é ", + v1);
// }else{
//     console.log("O maior número é ", + v2);    
// }




// // Desafio palavras proibidas
// Insira neste array as palavras proibidas
 let proibidas = ["ruim", "porcaria", "lixo","merda","aparelho"];
 let stg = "Comprei o aparelho mas infelizmente é uma -----,qualidade ruim muito ruim mesmo, estou arrependdido de comprar este lixo. verdadeikra merda";
 
var corretor="";
for(let i=0; i <= proibidas.length; i++ ){    
    // corretor += stg;
    if(stg.includes(proibidas[i])){        
        let regex = new RegExp(proibidas[i],"g");
        corretor =  stg.replace(regex,"-----");
        stg = corretor;          
    }    
}
console.log(corretor);



