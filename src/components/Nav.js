import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../auth/auth'
import './Nav.modules.css'
import logo from '../img/logo.png'
import Dashboard from '../pages/Dashboard'
import Products from '../pages/Products'
import { useState } from 'react'

const Nav = () => {

    const [menu, setMenu] = useState('')
    const handleBtnMenuClickClose = () => {
        setMenu('none')
      }
   
    return (
        <div className="container">
            <aside style={{display: `${menu} `}} className='aside-menu'>
                {
                    //! ASIDE
                }
                <div className="top">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                        <h2 className="text-muted">EGA<span className="danger">TOR</span></h2>
                        <div onClick={handleBtnMenuClickClose} className="close" id="close-btn">
                            <span className="material-icons-sharp">close</span>
                        </div>
                    </div>
                </div>

                <div className="sidebar">

                    <Link to="#" className='active'>
                        <span className="material-icons-sharp">grid_view</span>
                        <h3>Dashboard</h3>
                    </Link>

                    <Link to="#">
                        <span className="material-icons-sharp">receipt_long</span>
                        <h3>Inventario</h3>
                    </Link>


                    <Link to="#">
                        <span className="material-icons-sharp">insights</span>
                        <h3>Análisis</h3>
                    </Link>

                    <Link to="#">
                        <span className="material-icons-sharp">inventory</span>
                        <h3>Products</h3>
                    </Link>

                    <Link to="#">
                        <span className="material-icons-sharp">settings</span>
                        <h3>Settings</h3>
                    </Link>


                    <Link to="#">
                        <span className="material-icons-sharp">add</span>
                        <h3>Add Product</h3>
                    </Link>

                    <Link to="/">
                        <span className="material-icons-sharp" onClick={() => logout()}>logout</span>
                        <h3>Logout</h3>
                    </Link>

                </div>
            </aside>
            <Dashboard/>
            <Products setMenu={setMenu}/>
        </div>
    )
}

export default Nav