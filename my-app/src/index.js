import React from 'react';
import ReactDOM from 'react-dom/client';
// import Cardsjs from './components/Cards/Cards';
// import Cards from './components/Cards/Cards';
// import './index.css';
import App from './App';
// import Cards from './components/Cards/Cards.js';
// import { BrowserRouter as Router } from 'react-router-dom';
// import AppProvider from './NetflixCard/Context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* //   <AppProvider> */}
  {/* //   <Router> */}
    <App />
  {/* //   </Router> */}
  {/* //   </AppProvider> */}
  </React.StrictMode>
);
