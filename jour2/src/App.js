import './App.css';
import Inputcpn from './tp_villes/Components/Inputdata';
import InputNico from './tp_villes/Components/InputNico';
import Navbar from './Router/Components/Navbar';
import Products from './Router/Components/Products';
import About from './Router/Components/About';
import Collection from './Router/Components/Collection';
import Homepage from './Router/Components/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <Inputcpn/> */}
      {/* <InputNico/> */}
      <Router>
        <Navbar />
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/Products">
          <Products />
        </Route>

        <Route exact path="/About">
          <About />
        </Route>

        <Route exact path="/Collection">
          <Collection />
        </Route>

      </Router>
    </div>
  );
}

export default App;
