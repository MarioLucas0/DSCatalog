import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ProductDetails from 'pages/ProductDetails'
import Navbar from './components/Navbar/index'
import Admin from './pages/Admin'
import Catalog from './pages/Catalog/catalog'
import Home from './pages/Home/index'

const Rotas = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Catalog />} />
      <Route path="/products-details" element={<ProductDetails />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
    <Routes />
  </BrowserRouter>
)

export default Rotas
