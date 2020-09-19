import React from 'react';
import './App.css';
import Application from './Component/SilverMine';
import { Provider as StoreProvider } from 'react-redux';
import store from './Store';

const App = () =>
  <StoreProvider store={store}>
    <Application />
  </StoreProvider>

export default App;
