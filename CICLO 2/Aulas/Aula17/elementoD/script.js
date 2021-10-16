//Elemento Dinâmico:

window.onload= function(){

    let produtos=[
        {descricao: 'Biscoito Maizena', preco: 2.20},
        {descricao: 'Goiabada', preco: 5.50},
        {descricao: 'Monster', preco: 7.50},

    ]

    const listaprodutos= document.querySelector("#listadeprodutos");
    const Total = document.querySelector("#total");

    (()=>{
        let inicial=0;
        for(let pro of produtos){
            const filholi= document.createElement('li');

            for(listaP in pro){
                if( listaP == 'preco'){
                    listaprodutos.appendChild(filholi).setAttribute(`data-preco`, pro[listaP])
                    inicial += pro[listaP];
                } else{
                    listaprodutos.appendChild(filholi).textContent= `${pro[listaP]}`;
                }
                
                // console.log(pro[listaP])
            }
        }
        Total.value= inicial.toFixed(2);
    })(produtos)
    

}