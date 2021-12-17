import '../App.css'
import React from 'react'
import logo from '../assets/sown-logo.png'

function Header({userData}) {

    const login = () => {
        if (userData) {
            return (
                <button className="nav-btn">Logout</button>
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
                        {login()}
                    </div>
                </nav>
            </header>
    )
}

export default Header
