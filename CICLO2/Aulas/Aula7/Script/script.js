// Exercício 8:

function verificarMaiorNum(num1,num2){
    if(num1 > num2){
        console.log(" O número " +num1+ " é maior que o número " + num2);
    } else{
        console.log(" O número " +num1+ " é menor que o número " + num2);
    
    }
}

// verificarMaiorNum(1,3);

//Exemplo Aula:

function teste(){
    let disciplina = "Química";
    return disciplina;
}

// console.log(teste()); --> não funciona

// let msg = ()=>{
//     alert("Estou feliz da vida com JS");
// }

// msg();

let msg = (disciplina) => { return disciplina};

// console.log(msg ("Analítica"));

// function teste(){
//     alert("Estou na function teste");
//     return disciplina;
// }

// teste();

// (function(){
//     alert ("Esta função tem vida própria");
// })()

// (function(produto, preço){
//     alert (" O produto é "+ produto + " e o preço é de R$ " +preço);
// })("Biscoito", 2.35)


let valor1= prompt(" Digite o valor 1 ");
let valor2= prompt(" Digite o valor 2 ");


const soma = (valor1, valor2)=>{
    let resultado = parseFloat (valor1) + parseFloat(valor2); //números decimais
    console.log(resultado);
}//para qualquer número, melhor number!

soma(valor1, valor2);
