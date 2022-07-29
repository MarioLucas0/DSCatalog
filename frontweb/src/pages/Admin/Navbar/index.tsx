import './style.css'

const Navbar = () => {
  return (
    <nav className="admin-nav-container">
      <ul>
        <li>
          <a href="" className="admin-nav-item active">
            <p>Produto</p>
          </a>
        </li>
        <li>
          <a href="" className="admin-nav-item">
            <p>Categoria</p>
          </a>
        </li>
        <li>
          <a href="" className="admin-nav-item">
            <p>Usuario</p>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
