import './css/layout.css'
import './css/App.css';

import Home from './components/Categorys/Home';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CategoryMen from './components/Categorys/CategoryMen';
import CategoryWoman from './components/Categorys/CategoryWoman';
import ProductDetail from './components/Categorys/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/category/men" element={<CategoryMen />} />
        <Route path="/category/woman" element={<CategoryWoman />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
