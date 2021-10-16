//Criando objetos:

// function Pessoa(nome){
//     this.nome = nome;
//     // // this.msg = function(){
//     // //     alert("OIE")
//     // }
// }

// Pessoa.prototype.msg = function(){
//     alert(" Eae? " + this.nome);
// }

// let NovaPessoa= new Pessoa(" Ingrid ");
// let OutraPessoa= new Pessoa(" Cleverton ");

// NovaPessoa.msg();
// OutraPessoa.msg();
// // console,log(NovaPessoa.nome);

// console.log(NovaPessoa);


// let Fulano = {
//     'nome':'',
//     'idade':''
// }

// // console.log(Fulano);
// Fulano.__proto__.msg= function(){
//     alert(" Olá " + Fulano.nome);
// }
// let P= Fulano;
// P.nome= " Ingrid ";
// P.msg();
// console.log(P);


let Ciclano= [
    {
        'nome': 'Ingrid',
        'idade': 29,   //0
        'sexo': 'F'
    },
    {
        'nome': 'Cleverton',
        'idade': 29,   //1
        'sexo': 'M'
    },
    {
        'nome': 'Alisson',
        'idade': 22,   //2
        'sexo': 'M'
    },
]

let Outro= Ciclano;
console.log(` Existem ${Outro.length} pessoas cadastradas`)

console.log(Outro[1].nome);

