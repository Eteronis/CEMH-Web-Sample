import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';

// IMPORTING COMPONENTS
import Navigator from "./modules/Navigator";
import Landingpage from "./modules/Landingpage";

class App extends Component {
  render() {
    return (
      <div>
        <Navigator />
        <Router>
          <div>
            <Route exact path="/" component={Landingpage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
