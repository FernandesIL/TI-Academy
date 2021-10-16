//Exercicio

window.onload = function(){

    let veiculos = [ 'ônibus', 'motocicleta', 'patinete'];
    
    const btnBuscar = document.querySelector("#gerarLista");
    const lista = document.querySelector("#veiculos");
    
    btnBuscar.addEventListener('click',()=>{

        //let li = document.createElement('li');

        for( veic of veiculos ){

            let li = document.createElement('li');

            lista.appendChild(li).textContent = veic;

        }

    })        

}