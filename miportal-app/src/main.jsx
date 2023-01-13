import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Impresiones } from './assets/Impresiones'
import './index.css'
import './estilos.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Impresiones />
  </React.StrictMode>,
)
