import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { App } from 'components/App/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/Common/Theme'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
