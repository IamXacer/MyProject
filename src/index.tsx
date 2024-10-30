import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

if (rootElement !== null) {
  const root = ReactDOM.createRoot(rootElement); // TypeScript теперь знает, что rootElement не может быть null
  root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}

reportWebVitals();
