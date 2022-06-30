import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import ThemeContext from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const DARK_THEME = {
  backgroundColor: "#11001c",
  color: "#AC79C9",
}

root.render(
  <React.StrictMode>
    <ThemeContext.Provider value={DARK_THEME}>
      <App />      
    </ThemeContext.Provider>
  </React.StrictMode>
);
