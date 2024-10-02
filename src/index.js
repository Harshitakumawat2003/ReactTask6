import React from 'react';
import ReactDOM from 'react-dom/client'; // Change here
import App from './App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // Change here

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
