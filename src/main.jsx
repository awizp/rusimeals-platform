import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App.jsx';
import { MealsProvider } from "./context/MealsContext";

createRoot(document.getElementById('root')).render(
  <MealsProvider>
    <App />
  </MealsProvider>
);
