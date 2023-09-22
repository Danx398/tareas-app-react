//Exportaciones por defecto
import React from 'react'
import ReactDOM from 'react-dom/client'
//Genero un objeto el cual necesita ser desesctruturado
import {App} from './App.jsx'
//Para inportar Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
