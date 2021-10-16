//Exercicio 14

let frutas = [
    {fruta: "Maçã", preco: 3.36},
    {fruta: "Melão", preco: 6.36},
]



function listaFrutas(f){
 let total=0;
    for( let produto of f){
        for( let p  in produto){
            console.log(` ${p} -> ${produto[p]}` );
            if(produto[p] == produto.preco){
                total+= produto.preco;
            }
        }
    }    
  console.log(total)
}

listaFrutas( frutas );

