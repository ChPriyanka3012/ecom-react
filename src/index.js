import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import App from './App';
import Estoreheader from './Estoreheader';
//import Estorebody from './Estorebody';
import Block from './Block';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Estoreheader />
    <Block />
    
  </React.StrictMode>
);
//<Estorebody />

