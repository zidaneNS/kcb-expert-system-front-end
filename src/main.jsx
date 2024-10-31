import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './context/AuthContext.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/*' element={<App />}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
