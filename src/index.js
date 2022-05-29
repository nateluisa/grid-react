import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Container, Column, Row } from './components/Grid';
import { BrowserRouter } from 'react-router-dom';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App>
    
  </App>
  </BrowserRouter>

  
);


