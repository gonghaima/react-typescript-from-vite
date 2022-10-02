import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
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
          <Route path="/converter" component={Converter} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
