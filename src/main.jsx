import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {NoticiasProvider} from "./context/NoticiasProvider"

ReactDOM.render(
  <React.StrictMode>
  <NoticiasProvider>
    <App />
  </NoticiasProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
