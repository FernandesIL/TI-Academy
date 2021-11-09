import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Menu} from './componentes/Menu';
import { Home } from './views/Home';
import { VisualizarCliente} from './views/Cliente/Visualizar';
import { VisualizarPedido} from './views/Pedido/Visualizar';
import { VisualizarServico} from './views/Servico/Visualizar';
import { Item } from './views/Servico/Item';
import { VisualizarCompra} from './views/Compra/Visualizar';
import { VisualizarProduto} from './views/Produto/Visualizar';
import { CadastrarServico } from './views/Servico/Cadastrar';
import { CadastrarCliente} from './views/Cliente/Cadastrar';
import { EditarCliente} from './views/Cliente/Editar';
import { PedidosCliente } from './views/Cliente/Pedidos Cliente';
import { ComprasCliente} from './views/Cliente/Compras Cliente';
import {CadastrarCompra} from './views/Compra/Cadastrar';
import {EditarCompra} from './views/Compra/Editar';
import {ItensCompra} from './views/Compra/Consultar';
import {CadastrarProduto} from './views/Produto/Cadastrar';
import {EditarProduto} from './views/Produto/Editar';
import {ConsultarProduto} from './views/Produto/Consultar';
import {AdicionarItemCompra} from './views/ItemCompra/Adicionar';
import { EditarItemCompra} from './views/ItemCompra/Editar';





function App() {
  return (
    <div >
      <Router>
        <Menu/>
        <Switch>
          <Route exact path= "/" component= {Home}/>
          <Route path= "/visualizar-cliente" component={VisualizarCliente}/>
          <Route path= "/visualizar-pedido" component= {VisualizarPedido}/>
          <Route path= "/visualizar-servico" component= {VisualizarServico}/>
          <Route path= "/ver-pedido/:id" component= {Item}/>
          <Route path= "/visualizar-compra" component= {VisualizarCompra}/>
          <Route path= "/visualizar-produto" component= {VisualizarProduto}/>
          <Route path= "/cadastrarservico" component= {CadastrarServico}/>
          <Route path= "/cadastrar-cliente" component= {CadastrarCliente}/>
          <Route path= "/editar-cliente/:id" component= {EditarCliente}/>
          <Route path= "/cliente/:id/pedidos" component= {PedidosCliente }/>
          <Route path= "/cliente/:id/compras" component= {ComprasCliente}/>
          <Route path= "/cadastrarcompra" component= {CadastrarCompra}/>
          <Route path= "/editar-compra/:id" component= {EditarCompra}/>
          <Route path= "/compra/:id" component= {ItensCompra}/>
          <Route path= "/cadastrarproduto" component= {CadastrarProduto}/>
          <Route path= "/editar-produto/:id" component= {EditarProduto}/>
          <Route path= "/produto/:id" component= {ConsultarProduto}/>
          <Route path= "/itemcompra/:id/adicionaritem" component= {AdicionarItemCompra}/>
          <Route path= "/itemcompra/:id/editaritem/:ProdutoId" component= {EditarItemCompra}/>
          
          
         

        </Switch>
      </Router>
    </div>
  );
}

export default App;
