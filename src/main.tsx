import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Global error catcher for production debugging
window.onerror = function(message, source, lineno, colno, error) {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="background: #09090b; color: white; height: 100vh; display: flex; align-items: center; justify-content: center; font-family: sans-serif; padding: 20px;">
        <div style="text-align: center; max-width: 500px;">
          <h1 style="color: #f97316;">System Error</h1>
          <p style="margin: 20px 0; opacity: 0.8;">A critical error occurred while loading the application.</p>
          <div style="background: #18181b; padding: 15px; border-radius: 8px; text-align: left; font-size: 12px; overflow: auto; color: #ef4444;">
            ${message}<br/>
            at ${source}:${lineno}:${colno}
          </div>
          <button onclick="window.location.reload()" style="margin-top: 20px; background: #f97316; color: black; border: none; padding: 10px 20px; border-radius: 5px; font-weight: bold; cursor: pointer;">Try Again</button>
        </div>
      </div>
    `;
  }
  return false;
};

console.log('Laguru App Initializing...');

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

