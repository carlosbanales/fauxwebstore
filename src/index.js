import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { AuthProvider } from './context/AuthProvider';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
			<App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
