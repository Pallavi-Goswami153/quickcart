import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { Provider } from 'react-redux';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store.js';
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  
)
