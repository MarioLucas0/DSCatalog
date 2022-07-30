import { Route, Routes, Link, Outlet } from 'react-router-dom'
import Navbar from './Navbar/index'
import './style.css'

const Admin = () => {
  return (
    <>
      <div className="admin-container">
        <Navbar />

        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Admin
