// Aula 8:

let str = `Qualquer conteúdo`;

let str2 = `Outra string ${str}`;

// Com sinal de adição (+):

// let str = ` Qualquer conteúdo `;
// let str2 = ` Outra string ` + str;

// console.log(str2);

//Arrays = coleção de dados.

// O array é constítuido por elementos:

// const frutas = ["Uva", "Melancia", "Melão" ,"Caqui"]; //4 elementos

// let eugosto = `Minhas frutas preferidas ${frutas[3]}`;

// console.log (frutas[0]); //Uva
// console.log (frutas[1]); //Melancia
// console.log (frutas[2]); //Melão
// console.log (frutas[3]); //Caqui

// console.log(eugosto);


const pessoa =[
    "Ingrid",
    29,
    "casada",
    "Futsal",
    1.70,
    cores = ["azul", "preto", "verde", "branco", "ciano"]

];

let key = 3;

key++; //4

console.log(pessoa.length); //tamanho do array
console.log("Ingrid".length); //tamanho da string
console.log(pessoa[5][key]); // array bidmensional

// const Ingrid= `Meu nome é ${pessoa[0]} eu tenho ${pessoa[1]} anos, sou ${pessoa[2]} e gosto de jogar ${pessoa[3]}. Minha altura é de ${pessoa[4]}`
  
// (function(p){
//     const Ingrid= `Meu nome é ${pessoa[0]} eu tenho ${pessoa[1]} anos, sou ${pessoa[2]} e gosto de jogar ${pessoa[3]}. Minha altura é de ${pessoa[4]}`
//     alert(Ingrid);
//     // document.write(Ingrid);
// })(pessoa)

// console.log(Ingrid);