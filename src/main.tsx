import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@google/model-viewer';
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App';
import ARViewer from './pages/AR';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/ar" element={<ARViewer />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
