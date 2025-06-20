import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Initialize app with BrowserRouter for navigation
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    < HashRouter>
      <App />
    </ HashRouter>
  </StrictMode>
);