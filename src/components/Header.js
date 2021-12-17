import '../App.css'
import React from 'react'
import logo from '../assets/sown-logo.png'

function Header({userData, handleLogout}) {

    const logout = () => {
        handleLogout()
    }

    const loginBtnCheck = () => {
        if (userData) {
            return (
                <button className="nav-btn" onClick={logout}>Logout</button>
            )
        } else {
            return(
                <div>
                    <button className="nav-btn">Login</button>
                    <button className="nav-btn">Register</button>
                </div>
            )
        }
    }
    return (
            <header>
                <nav>
                    <img src={logo} alt='Sown' className="logo"/>
                    <div className="nav-btn-container">
                        {loginBtnCheck()}
                    </div>
                </nav>
            </header>
    )
}

export default Header
