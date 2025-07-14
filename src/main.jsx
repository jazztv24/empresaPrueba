
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import Principal from './Principal'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Principal></Principal>
  </BrowserRouter>
)
