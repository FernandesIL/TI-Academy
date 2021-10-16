//concat() "junta" dois ou mais arrays.
// let nomes= ["Ingrid", "Cleverton", "Alisson","Você", "Nós todos"];
// let nomes2 = ["João", "Maria", "José", "Marina"];

// let todososnomes= nomes.concat(nomes2);

// console.log(nomes);
// console.log(nomes2);

// console.log(todososnomes);

// let qtdarraynome = `O array nomes possui ${nomes.length} elementos`;
// console.log(qtdarraynome);

//indexof() Procura um determinado elemento de um array, 
//retorna uma posição.

// let nomes2 = ["João", "Maria", "José", "Marina"];

// let buscanome= "Ana"

// if( nomes2.indexOf(buscanome) != (-1)){
//     alert(`Eu encontrei o nome ${buscanome} e está na posição ${nomes2.indexOf(buscanome)}`);
// } else{
//     alert(`Não encontrei o nome ${buscanome}`);
// }

// console.log(nomes2.indexOf("Maria"));

//join() Transforma elementos de um array em uma string.

// let nomes2 = ["João", "Maria", "José", "Marina"];

// console.log(nomes2);
// console.log(nomes2.join());

//push() insere elementos no fim do array.

// let frutas = ["uva","maçã","banana","jaca"];
// frutas.push("Maçã", "Laranja");
// frutas.push("Laranja");
// console.log(frutas.indexOf("Jaca"));

// let colocarfruta= "melancia";

// if(frutas.indexOf(colocarfruta) == -1){
//     console.log(`A fruta ${colocarfruta} não esta na lista`);
//     frutas.push(colocarfruta);
// } else{
//     console.log(`A fruta ${colocarfruta} esta na lista`)
// }

// console.log(frutas);

//pop() Remove o último elemento de um array.

// let frutas = ["uva","maçã","banana","jaca"];

// frutas.pop();

// console.log(frutas);


//reverse() Inverte a ordem dos elementos de um array.

// let frutas = ["uva","maçã","banana","jaca"];

// frutas.reverse();

// console.log(frutas);

// console.log(frutas[0]);

//shift() Remove o primeiro elmento de um array.

// let frutas = ["uva","maçã","banana","jaca"];
// frutas.shift();

// console.log(frutas);

//sort() Ordena elementos de um array em ordem crescente.

// let numeros = [200,1,2,137,67];
// let alfa = [`a`,`j`, `n`, `z`];

// numeros.sort();

// console.log(numeros);

//toString() Converte um array em uma string e retorna esta string

// let frutas = ["uva","maçã","banana","jaca"];

// console.log(frutas.toString());

//unshift() Insere um elemento no inicio do array


//splice() corta ou remove um elemento de um array em um ponto indicado
// agrupar com indexof

// let nomes= ["Maria", "Paty", "Xuxa", "Goku"];

// let indice= nomes.indexOf("Goku");
// let novalista = nomes.splice(0,2);

// console.log(nomes);



//Exercício para calcular IMC:

function valorIMC(nome, altura, peso){

    altura = Number(altura);
    peso= Number(peso);
    let imc = peso/ (altura*2);

    console.log(" Nome...: ", nome);
    console.log(" Altura...: ", altura);
    console.log (" Peso...: ", peso);
    console.log(" IMC...: ", imc);

}

pesopessoa = prompt(" Digite seu peso ");
alturapessoa= prompt(" Digite sua altura");
nomepessoa= prompt(" Digite seu nome ");

valorIMC(nomepessoa, alturapessoa, pesopessoa);