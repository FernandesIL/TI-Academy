//Funções:

//Criar Lista dinâmica:
function criarlista (produtos, id){
    const listaprodutos= document.querySelector(`#${id}`);

    for(let pro of produtos){
        const li= document.createElement('li');
        for(let listaP in pro){
            if( listaP == 'preco'){
                listaprodutos.appendChild(li).setAttribute(`data-preco`, pro[listaP]);
            } else{
                listaprodutos.appendChild(li).textContent= `${pro[listaP]}`;
                listaprodutos.appendChild(li).setAttribute(`data-item`, pro[listaP]);
            }
        }
    }
}

//Adicionar item:
function adicionaritemcesta (item, preco, id){
    const itenscesta = document.querySelectorAll(`#${id} > li`);
    const listacesta= document.querySelector(`#${id}`);

    for(let produto of itenscesta){
        if( produto.dataset.item == item){
            alert(`O item ${produto.dataset.item} já foi selecionado`);
            return;
        }
    }

    if(!isNaN(Number(preco))){
        let li= document.createElement('li');
        listacesta.appendChild(li).setAttribute(`data-preco`, preco);
        listacesta.appendChild(li).setAttribute(`data-item`, item);
        listacesta.appendChild(li).textContent= `${item}`;
    }
}

function calculartotal (id){
    const itenscesta = document.querySelectorAll(`#${id} > li`);
    let valor= 0;
    for(let produto of itenscesta){
        valor = valor + Number(produto.dataset.preco); 
    }
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

//Remover itens da cesta:
function removerprodutos(id){
    const lista = document.querySelectorAll(`#${id} > li`);

    for(let produto of lista){
           produto.addEventListener('click',function(){
           produto.remove();
        });
    }
}

export { calculartotal, criarlista, adicionaritemcesta, removerprodutos };
