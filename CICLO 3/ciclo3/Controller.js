// chamando os módulos
const express = require('express');
const cors = require('cors');
// const {Sequelize} = require('./models');

// //Configurando app
const app = express();
app.use(cors());
app.use(express.json());

// //reconhecer os models
// const models = require('./models');
// let cliente = models.Cliente;
// let pedido = models.Pedido;
// let itempedido = models.ItemPedido;
let servico = models.Servico;

// //Criando a porta de acesso back end
let port = process.env.PORT || 3001;
app.listen(port,(req,res) => {  // pode ser por requisição ou resposta
    console.log('Servidor ativo: http://localhost:3001');
});

app.get('/', function(req, res){
    res.send('OLÁ, MUNDO!')
});

app.get('/servicos', async(req,res) =>{
    await servico.create({
        nome: "HTML/CSS",
        descricao: "Páginas estáticas estilizadas",
        createAt: new Date(),
        updateAt: new Date()
    });
    res.send('Serviço criado com sucesso!');
});

// app.get('/clientes', function(req, res){
//     res.send('SEJA BEM VINDO (A) A SERVICESTI.')
// });

