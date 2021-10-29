import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './views/Home';
import { VisualizarCliente} from './views/Cliente/Visualizar';
import { Menu} from './componentes/Menu';
import { VisualizarPedido} from './views/Pedido/Visualizar';
import { VisualizarServico} from './views/Servico/Visualizar';



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

        </Switch>
      </Router>
    </div>
  );
}

export default App;
