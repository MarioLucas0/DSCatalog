import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

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
      <Route path="/products/:productId" element={<ProductDetails />} />

      <Route
        path="/admin"
        element={<Navigate replace to="/admin/products" />}
      ></Route>

      <Route path="/admin" element={<Admin />}>
        <Route path="/admin/products" element={<h1>products Crud</h1>}></Route>
        <Route path="/admin/category" element={<h1>Category Crud</h1>}></Route>
        <Route path="/admin/user"></Route>
      </Route>
    </Routes>
    <Routes />
  </BrowserRouter>
)

export default Rotas
