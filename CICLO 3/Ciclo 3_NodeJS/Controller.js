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


// //Exercicios Aula09
// //Liste todos os clientes
// app.get('/A09E01', async function (req,res){
//     await cliente.findAll({
//         raw: true
//     }).then(clientes =>{
//         return res.json({
//             message : "Lista dos Clientes",
//             clientes
//         })
//     })
// })

// //Liste todos os clientes por tempo de cadastro
// app.get('/A09E02', async function (req,res){
//     await cliente.findAll({
//         order: [['createdAt','DESC']] //ASC=menor -> maior;DESC=maior -> menor
//     }).then(clientes =>{
//         return res.json({
//             message : "Lista dos Clientes por tempo de cadastro",
//             clientes
//         })
//     })
// })

// //Liste todos os pedidos
// app.get('/A09E03', async function (req,res){
//     await pedido.findAll({
//         raw: true
//     }).then(pedidos =>{
//         return res.json({
//             message : "Lista dos Pedidos",
//             pedidos
//         })
//     })
// })

// //Busque o número de clientes no banco de dados
// app.get('/A09E05', async function (req,res){
//     await cliente.count('id')
//     .then(numeroclientes =>{
//         return res.json({
//             message : "Número de Clientes",
//             numeroclientes
//         })
//     })
// })

// //Busque o número de pedidos no banco de dados
// app.get('/A09E06', async function (req,res){
//     await pedido.count('id')
//     .then(numeropedidos =>{
//         return res.json({
//             message : "Número de Pedidos",
//             numeropedidos
//         })
//     })
// })

//Exercícios Aula 12
//Buscar serviços de clientes usando ClienteId
// app.get('/A12/E01/:id', async function (req,res){
//     await cliente.findByPk(req.params.id, {include: servico})
//     .then(retorno => {
//         return res.json({
//             error : false,
//             message : "Lista de Serviços solicitados pelo Cliente",
//             retorno
//         })
//     }).catch(retorno => {
//         return res.json({
//             retorno
//         })
//     })
// })











//DUVIDAS
// Aula 09 - Visualize o pedido por ordem de valor