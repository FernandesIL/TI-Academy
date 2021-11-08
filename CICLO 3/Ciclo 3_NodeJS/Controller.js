// chamando os módulos
const express = require('express');
const cors = require('cors');
const {Sequelize} = require('./models');

//Configurando app
const app = express();
app.use(cors());
app.use(express.json());

//reconhecer os models
const models = require('./models');
let cliente = models.Cliente;
let pedido = models.Pedido;
let itempedido = models.ItemPedido;
let servico = models.Servico;

//Criando a porta de acesso back end
let port = process.env.PORT || 3001;
app.listen(port,(req,res) => {  // pode ser por requisição ou resposta
    console.log('Servidor ativo: http://localhost:3001');
});

//Método get permite o bd seja utilizado de forma direta
//Enviando mensagens ao servidor com send()
app.get('/', function(req,res){
    res.send('Olá, Mundo!');
});

// app.get('/servicos', async(req,res) =>{
//     await servico.create({
//         nome: "HTML/CSS",
//         descricao: "Páginas estáticas estilizadas",
//         createAt: new Date(),
//         updateAt: new Date()
//     });
//     res.send('Serviço criado com sucesso!');
// });

// app.get('/clientes', function(req, res){
//     res.send('SEJA BEM VINDO (A) A SERVICESTI.')
// });

// app.post('/servico',async(req,res) => {
//         await servico.create({
//             nome: "NodeJs",
//             descricao: "Desenvolvimento de aplicação back-end",
//             createAt:new Date(),
//             updateAt: new Date()
//         });
//         res.send('O serviço foi criado com sucesso!');
//     });

    // Requisição externa executada por comando interno.
// app.post('/servicos',async(req,res) => {
//     await servico.create({
//         nome: "Delphi",
//         descricao: "Manutenção e Suporte a sistema legados em Delphi"
//     })
//     res.send('O serviço foi criado com sucesso!')
// })

// //Requisição via corpo da página para criar serviços
app.post('/novoservico',async(req,res) => {
    await servico.create(
        req.body
    ).then(function(){ // Após tentar:
        return res.json({
            error: false,
            message: 'O serviço foi criado com sucesso!'
        });
    }).catch(function(erro){ //Caso não funcione
        return res.status(400).json({
            error: true,
            message: 'Foi impossivel conectar ao servidor'
        })
    });
});
     
app.get('/cliente01',async(req,res) => {
        await cliente.create({
            nome : 'João',
            endereco : 'Av. Brasil',
            cidade : 'Maringá',
            uf : 'Pr',
            nascimento : 1990-12-31,
            clienteDesde: new Date(),
            createAt: new Date(),
            updateAt: new Date()
        });
        res.send('Novo cliente cadastrado');
    });

// //Consulta de dados:

// app.get('/listaservicos', async(req, res)=>{
//     await servico.findAll({
//         raw: true
//     }).then(function(servicos){
//         res.json({servicos})
//     });
// });

//Consulta de dados_Aula 9:

app.get('/listaservicos', async(req, res)=>{
    await servico.findAll({
        order: [['nome', 'ASC']]
    }).then(function(servicos){
        res.json({servicos})
    });
});

//Quantidade de serviços disponíveis:
app.get('/ofertaservicos', async(req, res)=>{
    await servico.count('id').then(function(servicos){
        res.json({servicos});
    });
});

 //Visualizar um único serviço:
app.get('/servico/:id', async(req,res)=>{
    await servico.findByPk(req.params.id)
    .then(serv =>{
        return res.json({
            error: false,
            serv
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro: não foi possível conectar!"
        });
    });
});

//Visualizar um único serviço (Aula01/11):
app.get('/servico/:id/pedidos', async(req,res)=>{
    await itempedido.findAll({
        where: {ServicoId: req.params.id}})
    .then(item =>{
        return res.json({
            error: false,
            item
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro: não foi possível conectar!"
        });
    });
});


// //Alteração: Criar uma rota para fazer update
// app.get('/atualizaservico', async(req, res)=>{
//     await servico.findByPk(1)
//     .then(serv =>{
//         serv.nome='HTML/CSS/JS';
//         serv.descricao= 'Páginas estáticas e dinâmicas estilizadas';
//         serv.save();
//         return res.json({serv});
//     });
// });

 //Alteração: Criar uma rota para fazer update com put
app.put('/atualizaservico', async(req, res)=>{
    await servico.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Serviço foi alterado com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro na alteração do serviço."
        });
    });
    
});

//Combinar consulta e edição:
app.get('/pedidos/:id', async(req, res)=>{
    await pedido.findByPk(req.params.id,{include:[{all:true}]})
    .then(ped=>{
        return res.json({ped});
    })
})

//Alterar um item dentro de um pedido:
app.put('/pedidos/:id/editaritem', async(req, res)=>{
    const item= {
        quantidade: req.body.quantidade,
        valor: req.body.valor,
    };

    if(!await pedido.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: 'Pedido não foi encontrado.'
        });
    };

    if (!await servico.findByPk(req.body.ServicoId)){
        return res.status(400).json({
            error: true,
            message: 'Serviço não foi encontrado.'
        });
    };

    await itempedido.update(item, {
        where: Sequelize.and({ServicoId: req.body.ServicoId},
            {PedidoId: req.params.id})
    }).then(function(itens){
        return res.json({
            error: false,
            message: "Pedido foi alterado com sucesso!",
            itens
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro: não foi possível alterar."
        });
    });
    });
    
//Exclusão:

//Encontrando os Clientes:
app.get('/listaclientes', async(rez, res)=>{
    await cliente.findAll({
        raw: true
    }).then(function(clientes){
        res.json({clientes})
    });
});

//Excluindo Clientes:
app.get('/excluircliente/:id', async(req, res)=>{
    await cliente.destroy({
        where: {id:req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cliente excluído com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir o cliente."
        });
    });
});



// Exercício para criar clientes:
app.post('/novocliente',async(req,res) => {
    await cliente.create(
        req.body
    ).then(function(){ // Após tentar:
        return res.json({
            error: false,
            message: 'O cliente foi cadastrado com sucesso!'
        });
    }).catch(function(erro){ //Caso não funcione
        return res.status(400).json({
            error: true,
            message: 'Foi impossivel cadastrar o cliente'
        })
    });
});

// Para criar pedidos:
app.post('/novopedido',async(req,res) => {
    await pedido.create(
        req.body
    ).then(function(){ // Após tentar:
        return res.json({
            error: false,
            message: 'O pedido foi realizado com sucesso!'
        });
    }).catch(function(erro){ //Caso não funcione
        return res.status(400).json({
            error: true,
            message: 'Foi impossivel realizar o pedido'
        })
    });
});

// Pra criar um itempedido:
app.post('/novoitempedido',async(req,res) => {
    await itempedido.create(
        req.body
    ).then(function(){ // Após tentar:
        return res.json({
            error: false,
            message: 'O item pedido foi cadastrado com sucesso!'
        });
    }).catch(function(erro){ //Caso não funcione
        return res.status(400).json({
            error: true,
            message: 'Foi impossivel cadastrar o item pedido'
        })
    });
});

//////////////////////////////////////Sessão do Desafio///////////////////////////////////////////

//Chamar os modelos:
let compra = models.Compra;
let itemcompra = models.ItemCompra;
let produto = models.Produto;

//Compras:

//Cadastrar Compra
app.post('/novacompra',async(req,res) => {
    await compra.create(
        req.body
    ).then(function(){ // Após tentar:
        return res.json({
            error: false,
            message: 'A compra foi cadastrada com sucesso!'
        });
    }).catch(function(erro){ //Caso não funcione
        return res.status(400).json({
            error: true,
            message: 'Foi impossivel cadastrar a compra'
        })
    });
});

//Listar Compras
app.get('/listarcompras', async(req, res)=>{
    await compra.findAll({
        raw: true
    }).then(function(compra){
        return res.json({compra})
    });
});

//Listar uma compra:
app.get('/listarcompra/:id', async(req, res)=>{
    if(!await compra.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: 'Compra não foi encontrada.'
        });
    };
    await compra.findByPk(
        req.params.id
    ).then(function(compra){
        return res.json({
            error: false,
            compra
        })
    }).catch(erro => {
        return res.status(400).json({
            error: true,
            message: "Não foi possível listar!"
        })
    })
});

//Editar Compra
app.put('/atualizarcompra', async(req, res)=>{
    if(!await compra.findByPk(req.body.id)){
        return res.status(400).json({
            error: true,
            message: 'Compra não foi encontrada.'
        });
    };
    await compra.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Compra atualizada com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro na atualização da compra."
        })
    })
    
});

//Excluir Compra
app.get('/excluircompra/:id', async(req, res)=>{
    if(!await compra.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: 'Compra não foi encontrada.'
        });
    };
    await compra.destroy({
        where: {id:req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Compra excluída com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir a compra!"
        });
    });
});

//Produto:

//Cadastrar Produto
app.post('/novoproduto',async(req,res) => {
    await produto.create(
        req.body
    ).then(function(){ // Após tentar:
        return res.json({
            error: false,
            message: 'O produto foi cadastrado com sucesso!'
        });
    }).catch(function(erro){ //Caso não funcione
        return res.status(400).json({
            error: true,
            message: 'Foi impossivel cadastrar o produto!'
        })
    });
});

//Listar Produto
app.get('/listarprodutos', async(req, res)=>{
    await produto.findAll({
        raw: true
    }).then(function(produto){
        return res.json({produto})
    });
});

//Listar um produto:
app.get('/listarproduto/:id', async(req, res)=>{
    if(!await produto.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: 'Produto não foi encontrado.'
        });
    };
    await produto.findByPk(
        req.params.id
    ).then(function(produto){
        return res.json({
            error: false,
            produto
        })
    }).catch(erro => {
        return res.status(400).json({
            error: true,
            message: "Não foi possível listar!"
        })
    })
});

//Editar Produto
app.put('/atualizarproduto', async(req, res)=>{
    if(!await produto.findByPk(req.body.id)){
        return res.status(400).json({
            error: true,
            message: 'Produto não foi encontrado.'
        });
    };
    await produto.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Produto atualizado com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro na atualização do produto."
        })
    })
    
});

//Excluir Produto
app.get('/excluirproduto/:id', async(req, res)=>{
    if(!await produto.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: 'Produto não foi encontrado.'
        });
    };
    await produto.destroy({
        where: {id:req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Produto excluído com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir o produto!"
        });
    });
});

//ItemCompra:

//Cadastrar ItemCompra
app.post('/novoitemcompra',async(req,res) => {
    await itemcompra.create(
        req.body
    ).then(function(){ // Após tentar:
        return res.json({
            error: false,
            message: 'O itemcompra foi cadastrado com sucesso!'
        });
    }).catch(function(erro){ //Caso não funcione
        return res.status(400).json({
            error: true,
            message: 'Foi impossivel cadastrar o itemcompra'
        })
    });
});

//Listar ItemCompra
app.get('/listaritemcompra', async(req, res)=>{
    await itemcompra.findAll({
        raw: true
    }).then(function(itemcompra){
        return res.json({itemcompra})
    });
});

//Editar ItemCompra
app.put('/compra/:id/editaritem', async(req, res)=>{
    const item= {
        quantidade: req.body.quantidade,
        valor: req.body.valor,
    };

    if(!await compra.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: 'Compra não foi encontrada.'
        });
    };

    if (!await produto.findByPk(req.body.ProdutoId)){
        return res.status(400).json({
            error: true,
            message: 'Produto não foi encontrado.'
        });
    };

    await itemcompra.update(item, {
        where: Sequelize.and({ProdutoId: req.body.ProdutoId},
            {CompraId: req.params.id})
    }).then(function(itens){
        return res.json({
            error: false,
            message: "Compra foi alterada com sucesso!",
            itens
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro: não foi possível alterar."
        });
    });
});

//Excluir Compra
app.get('/compra/:id/excluiritem', async(req, res)=>{

    if(!await compra.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: 'Compra não foi encontrada.'
        });
    };
    
    if (!await produto.findByPk(req.body.ProdutoId)){
        return res.status(400).json({
            error: true,
            message: 'Produto não foi encontrado.'
        });
    };
    await itemcompra.destroy({
        where: Sequelize.and(
            {ProdutoId: req.body.ProdutoId},
            {CompraId: req.params.id})
    }).then(function(){
        return res.json({
            error: false,
            message: "ItemCompra excluído com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir o ItemCompra!"
        });
    });
});

//Listar Itens de uma Compra:
app.get('/compra/:id/listaritemcompra', async(req, res)=>{
    if(!await compra.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: 'Compra não foi encontrada.'
        });
    };
    await itemcompra.findAll({
            where:{
                CompraId: req.params.id
            }
        }
    ).then(function(compra){
        return res.json({
            error: false,
            compra
        })
    }).catch(erro => {
        return res.status(400).json({
            error: true,
            message: "Não foi possível listar!"
        })
    })
});

//////////////////////////////////DESAFIO CICLO 4///////////////////////////////////////////
//Listar pedidos:
app.get('/listarpedidos', async(req, res)=>{
    await pedido.findAll({
        raw: true
    }).then(function(pedido){
        return res.json({pedido})
    });
});

//Visualizar único cliente:
app.get('/cliente/:id', async(req,res)=>{
    await cliente.findByPk(req.params.id)
    .then(cli =>{
        return res.json({
            error: false,
            cli
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro: não foi possível conectar!"
        });
    });
});

//Editar Cliente
app.put('/editarcliente', async(req, res)=>{
    if(!await cliente.findByPk(req.body.id)){
        return res.status(400).json({
            error: true,
            message: 'Cliente não foi encontrado.'
        });
    };
    await cliente.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cliente editado com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro na edição do cliente."
        })
    })
    
});

//Pedidos do Cliente:
app.get('/cliente/:id/pedidos', async(req,res)=>{
    await pedido.findAll({
        where: {ClienteId: req.params.id}})
    .then(pedidos =>{
        return res.json({
            error: false,
            pedidos
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro: não foi possível conectar!"
        });
    });
});

// Compras do Cliente:
app.get('/cliente/:id/compras', async(req,res)=>{
    await compra.findAll({
        where: {ClienteId: req.params.id}})
    .then(compras =>{
        return res.json({
            error: false,
            compras
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro: não foi possível conectar!"
        });
    });
});

//Buscar pedidos que tenham serviços;
app.get('/servico/:id/pedidos', async(req,res)=>{
    await itempedido.findAll({
        where: {ServicoId:req.params.id}
    }).then(itens =>{
        return res.json({
            error: false,
            itens
        })
    }).catch(function(erro){
        return res.status(400).json({
            error : true,
            message : "Não foi possível conectar"
        })
    })
})

//Compras que tenham o produto:
app.get('/produto/:id/compras', async(req,res)=>{
    await itemcompra.findAll({
        where: {ProdutoId:req.params.id}
    }).then(itens =>{
        return res.json({
            error: false,
            itens
        })
    }).catch(function(erro){
        return res.status(400).json({
            error : true,
            message : "Não foi possível conectar"
        })
    })
})

