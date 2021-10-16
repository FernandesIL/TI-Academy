//Data Atributos

window.onload = function(){

    const botaoBuscar = document.querySelector("#botaoBuscar");
    const txtNomeCli = document.querySelector("#nomeCliente");

    botaoBuscar.addEventListener('click', function(){
        let dataSetCliente= txtNomeCli.dataset.codigo;
        console.log(dataSetCliente);

    })

}