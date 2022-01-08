import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/nuevo">
          <h1> Producto Nuevo</h1>
        </Route>
        <Route path="/">
          <Link to="/nuevo"> Producto </Link>
          <h1> Productos</h1>
        </Route>
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
