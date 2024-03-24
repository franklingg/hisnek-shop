import React from 'react';
import 'react-native-gesture-handler';

import Routes from './src/routes';
import {CartProvider} from '~/contexts/cartContext';

const App = () => {
  return (
    <CartProvider>
      <Routes />
    </CartProvider>
  );
};

export default App;
