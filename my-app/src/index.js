import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import { NewsProvider } from '/Users/admin/React/my-app/src/NewsApp/Context.jsx';
// import Context from '/Users/admin/React/my-app/src/NewsApp/Context.jsx'
import { BrowserRouter } from 'react-router-dom';
// import {Routes, Route} from 'react-router-dom'
// import Cards from './components/Cards/Cards.js';
// import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
