import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProductListing from './pages/ProductListing/ProductListing';
import ProductView from './pages/ProductView/ProductView';

function App() {
  
  return( 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/productos" element={<ProductListing />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/products/:id" element={<ProductView />} />
    </Routes>
  </BrowserRouter>
  );

  
}

export default App;
