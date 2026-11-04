import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/bebas-neue'
import '@fontsource-variable/geist'
import '@fontsource-variable/geist-mono'
import './styles/global.css'
import App from './App.jsx'
import { LangProvider } from './i18n.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <LangProvider>
    <App />
  </LangProvider>,
)
