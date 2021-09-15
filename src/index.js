import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Launches from './components/Launches';
import Details from './components/Details';
import reportWebVitals from './reportWebVitals';
import {
  Route, 
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/' component={Launches}/>
        <Route path='/launch/details' component={Details}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
