import './App.css';
import logo from './assets/sown-logo.png'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Categories from './components/Categories';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  const [seedData, setSeedData] = useState([])
  const [userData, setUserData] = useState(false)
  const [zipcodeData, setZipcodeData] = useState(77005)
  const [loginDisplay, setLoginDisplay] = useState(false)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/seeds/`)
          .then(response => setSeedData(response.data.data))
          .then(updateZipcode())
          .catch(error => console.log(error))
    }, [])

    const handleLogoutClick = () => {
      axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/users/logout`)
        .then(response => console.log(response))
        .then(setUserData(false))
        .catch(error => console.log(error))
    }

    const handleLogin = async (data) => {
      await setUserData(data)
      axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/users/login`, {...userData})
        .then((response) => {
          console.log(response)
          if (response.status === 200) {
            toggleLogin()
          }
        })
        .catch(error => console(error))
    }

    const handleRegister = async (data) => {
      await setUserData(data)
      axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/users/register`, {...userData})
        .then(response => console.log(response))
        .catch(error => console(error))
    }

    const updateZipcode = (data) => {
      setZipcodeData(data)
    }

  const loginBtnCheck = () => {
      if (userData) {
          return (
              <button className="nav-btn" onClick={handleLogoutClick}>Logout</button>
          )
      } else {
          return(
              <div>
                  <button className="nav-btn" onClick={toggleLogin}>Login</button>
                  <button className="nav-btn">Register</button>
              </div>
          )
      }
  }

  const toggleLogin = () => {
    loginDisplay ? setLoginDisplay(false) : setLoginDisplay(true)
  }

  return (
    <div className="App"> 
      <header>
        <nav>
            <img src={logo} alt='Sown' className="logo"/>
            <div className="nav-btn-container">
                {loginBtnCheck()}
            </div>
        </nav>
      </header>
      {loginDisplay ? <LoginForm handleLogin={handleLogin} /> : null}
      {/* <RegisterForm handleRegister={handleRegister} /> */}
      <Categories seedData={seedData} />
      <footer className="footer">
        <p>Copyright © {new Date().getFullYear()} Sown App</p>
      </footer>
    </div>
  );
}

export default App;