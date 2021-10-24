import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './views/Home';
import { Visualizar} from './views/Cliente/Visualizar/index';

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path= "/" component= {Home}/>
          <Route path= "/visualizar-cliente" component={Visualizar}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
