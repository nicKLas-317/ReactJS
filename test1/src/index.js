import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />   {/* Ce qu'on veut afficher */}
  </React.StrictMode>,

  document.getElementById('root')/* Ou on va l'afficher */
);

reportWebVitals();