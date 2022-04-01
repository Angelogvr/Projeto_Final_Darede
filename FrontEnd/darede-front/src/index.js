import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Redirect ,Switch } from 'react-router-dom';
import './index.css';
import App from './screens/telaCadastro';
import reportWebVitals from './reportWebVitals';

import telaCadastro from './screens/telaCadastro'
import telaLogin from './screens/telaLogin'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


const routing = (
  <Router>
    <div>
      <Switch>
        <Route path="/cadastro" component={telaCadastro} /> {/* Cadastro */}
        <Route path="/login" component={telaLogin} /> {/* Cadastro */}
      </Switch>
    </div>
  </Router>

);

ReactDOM.render(
  routing,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
