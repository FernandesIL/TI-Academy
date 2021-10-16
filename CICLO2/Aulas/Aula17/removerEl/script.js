window.onload = function(){

   //calcular
   function calcular( idProduto, resultado){

      const preco          = document.querySelectorAll(`#${idProduto} > li`);
      const valorResultado = document.querySelector(`#${resultado}`);
      let totalzinho=0;

      for( let i of preco ){
         totalzinho += Number(i.dataset.preco);
         //console.log( i.dataset.preco)
      }

      valorResultado.value = totalzinho;


   }
   
   function removerProdutos(id){

      const lista = document.querySelectorAll(`#${id} > li`);

      for(let produto of lista){
console.log(produto)
             produto.addEventListener('click',function(){
             produto.remove();
             calcular('produtos','Somatotal');

             });
      }

   }

   removerProdutos('produtos');
   calcular('produtos','Somatotal');

}



