import { NavLink } from 'react-router-dom'
import './style.css'

const Navbar = () => {
  return (
    <nav className="admin-nav-container">
      <ul>
        <li>
          <NavLink to="/admin/products" className="admin-nav-item active">
            <p>Produto</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/category" className="admin-nav-item">
            <p>Categoria</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/user" className="admin-nav-item">
            <p>Usuario</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
