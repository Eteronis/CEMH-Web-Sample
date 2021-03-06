import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';

// IMPORTING COMPONENTS
import Navigator from './modules/Navigator';
import Landingpage from './modules/Landingpage';
import Historiadelcentro from './modules/Historiadelcentro';
import Misionfilosofia from './modules/Misionfilosofia';
import Footer from './modules/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navigator />
        <Router>
          <div>
            <Route exact path="/" component={Landingpage} />
            <Route path="/historiadelcentro" component={Historiadelcentro} />
            <Route path="/misionfilosofia" component={Misionfilosofia} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
