import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import AppRoutes from './Routes';
import { GlobalProvider } from './components/utils/GlobalContext';


createRoot(document.getElementById('root')!).render(
  <GlobalProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </GlobalProvider>
)
