import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Components/CustomMovie/MovieMain';
import AppRouter from './routers/RouterRgister';
import './Styles/index.css'


ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
