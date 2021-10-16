import { calculartotal, criarlista, adicionaritemcesta, removerprodutos} from './funcoes.js';

window.onload = function(){

//Criar lista:
var produtos=[
    {item: 'Mamão Papaia', preco: 5.15},
    {item: 'Laranja', preco: 3.20},
    {item: 'Manga', preco: 7.50},
    {item: 'Melão', preco: 5.75},
    {item: 'Melancia', preco: 10.50}
];

criarlista(produtos,'produtos');

//Mapeamento:
const ulcesta = document.querySelectorAll("#cestaDoCliente");
const ulprodutos = document.querySelectorAll("#produtos");
const total = document.querySelector("#mostraTotalCompra");

ulprodutos.forEach(function(lista){
    
    lista.addEventListener('click',function(elemento){
        let preco = elemento.target.dataset.preco;
        let item = elemento.target.dataset.item;
        adicionaritemcesta(item, preco, 'cestaDoCliente');
        total.value = calculartotal('cestaDoCliente');
    })     
})

ulcesta.forEach(function(lista){
    
    lista.addEventListener('click',function(elemento){
        removerprodutos('cestaDoCliente');
        total.value = calculartotal('cestaDoCliente');
    })     
 
})



}



