import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './store';
import './index.css';
import { PokedexApp } from './PokedexApp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
       <PokedexApp />
    </Provider>
  </React.StrictMode>
)
