import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './components/App';
import { CompaniesProvider } from './components/Context/companies';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CompaniesProvider>
    <App />
    </CompaniesProvider>
  </React.StrictMode>
);


