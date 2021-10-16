//Inserir Elementos;

window.onload = function(){

    const cxproduto= document.querySelector("#produto");
    const botaocadastar = document.querySelector("#cadastrar");
    const lista= document.querySelector("#listadeprodutos")

    botaocadastar.addEventListener('click',function(){

        let li= document.createElement('li');
            lista.appendChild(li).setAttribute('class', 'listadefrutas')
            lista.appendChild(li).textContent= cxproduto.value;

    })

}