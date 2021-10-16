//for

// let i=0;  //var global
// for(let x=0; x<10; x++){
//     console.log(` O valor de interação é ${x} o x mais ele mesmo ${i++}`);
// }

// fot in

// let Pessoas={
//     nome: "Steven Roger",
//     idade: 40,
//     profissão: "Capitão América",
// }

// for(let propriedades in Pessoas){
//     console.log(Pessoas.nome),
//     console.log(Pessoas.idade),
//     console.log(Pessoas.profissão)
// }


// console.log(Pessoas.nome);


//array associativo: arr=["nome" => "Ingrid"]
// arr=[nome]


//fot off

// let Objetos=["caderno", "celular","lápis", "not"];

// for(let nomeObjeto of Objetos){
//     console.log(nomeObjeto);
// }


let Herois=[
     {
         identidadeSecreta: "Steven Roger",
         heroi: "Capitão América",

},
{
    identidadeSecreta: "Tonny Stark",
    heroi: "Homem de Ferro",

}
    
];

Herois.push({identidadeSecreta:"Diana", heroi: "Mulher Maravilha"})

// let marvel= Herois[0].identidadeSecreta;

// console.log(marvel);

for( let marvel of Herois){
    // console.log(marvel)
    for(let m in marvel){
        console.log(`${m} -> ${marvel[m]}`);
    }
}