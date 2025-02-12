import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UILayer from './UILayer.tsx'
import './index.css'
import { BrowserRouter } from "react-router";
import AppRoutes from './Routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UILayer>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </UILayer>
  </StrictMode>,
)
