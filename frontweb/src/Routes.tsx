import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar/index'
import Home from './pages/Home/index'

const Rotas = () => (
  <BrowserRouter>
    <Navbar />
    <Home />
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
    <Routes />
  </BrowserRouter>
)

export default Rotas
