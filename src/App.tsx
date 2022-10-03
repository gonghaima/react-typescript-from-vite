import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { LoginCallback, SecureRoute } from '@okta/okta-react';
import Home from './components/Home';
import Converter from './components/Converter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/converter">Converter</Link>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <SecureRoute path="/converter" component={Converter} />
          <Route path="/callback" component={LoginCallback} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
