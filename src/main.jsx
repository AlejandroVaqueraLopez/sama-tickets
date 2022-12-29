import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './main/App';
import './styles/index.css';
import "./config/config";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
