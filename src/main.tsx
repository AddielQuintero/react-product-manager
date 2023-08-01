import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '@/routes'
import '@/index.scss'
import '@/sass/App.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
