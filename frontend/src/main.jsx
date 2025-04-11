import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { CartProvider } from './context/CartContext';
import { FavouriteProvider } from './context/FavouriteContext';
import { AuthProvider } from './context/AuthContext'; // 👈 assuming this is your auth file

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <FavouriteProvider>
          <App />
        </FavouriteProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
