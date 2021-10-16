import { dadosCep} from './funcoes.js';

window.onload = function(){
//Mapeamento:

const cep = document.querySelector('#cep');
const logradouro = document.querySelector('#logradouro');
const bairro = document.querySelector('#bairro');
const localidade = document.querySelector('#localidade');
const uf = document.querySelector('#uf');
const buscar = document.querySelector('#buscar');

buscar.addEventListener('click', function(){

    dadosCep(`${cep.value}`);
})

}



           