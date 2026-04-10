import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log('Laguru App Initializing...');

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>,
    );
  } catch (error) {
    console.error('Laguru Render Error:', error);
    rootElement.innerHTML = `
      <div style="background: #09090b; color: white; height: 100vh; display: flex; align-items: center; justify-content: center; font-family: sans-serif; padding: 20px;">
        <div style="text-align: center; max-width: 500px;">
          <h1 style="color: #f97316;">Launch Error</h1>
          <p style="margin: 20px 0; opacity: 0.8;">We encountered an issue starting the app. Please try refreshing.</p>
          <pre style="background: #18181b; padding: 15px; border-radius: 8px; text-align: left; font-size: 12px; overflow: auto;">${error}</pre>
        </div>
      </div>
    `;
  }
}

