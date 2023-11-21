import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import AppRoutes from '~/services/routing'

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
