import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/globals';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>

      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
