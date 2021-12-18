import './App.css';
import logo from './assets/sown-logo.png'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Categories from './components/Categories';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ZipcodeForm from './components/ZipcodeForm';
import AddSeedForm from './components/AddSeedForm';

function App() {
  const [seedData, setSeedData] = useState([])
  const [userData, setUserData] = useState(false)
  const [newSeedData, setNewSeedData] = useState([])
  const [zipcodeData, setZipcodeData] = useState(77005)
  const [loginDisplay, setLoginDisplay] = useState(false)
  const [registerDisplay, setRegisterDisplay] = useState(false)
  const [addSeedDisplay, setAddSeedDisplay] = useState(false)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/seeds/`)
          .then(response => setSeedData(response.data.data))
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
            updateZipcode(response.data.data.zip)
          }
        })
        .catch(error => console(error))
    }

    const handleRegister = async (data) => {
      await setUserData(data)
      axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/users/register`, {...userData})
        .then((response) => {
          console.log(response)
          if (response.status === 201) {
            toggleRegister()
          }
        })
        .catch(error => console(error))
    }

    const handleAddSeed = async (data) => {
      await setNewSeedData(data)
      const json = JSON.stringify({'name': newSeedData.name, 
      'category': newSeedData.category,
      'indoor_sow_start': parseInt(newSeedData.indoor_sow_start),
      'indoor_sow_end': parseInt(newSeedData.indoor_sow_end),
      'outdoor_sow_start': parseInt(newSeedData.outdoor_sow_start),
      'outdoor_sow_end': parseInt(newSeedData.outdoor_sow_end),
      'description': newSeedData.description,
      'maturity': newSeedData.maturity})
      axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/seeds`, json
    ) 
      .then((response) => {
          console.log(response)
          if (response.status === 201) {
            toggleAddSeed()
          }
        })
      .catch(error => console.log(error))
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
                  <button className="nav-btn" onClick={toggleRegister}>Register</button>
              </div>
          )
      }
  }

  const toggleLogin = () => {
    if (registerDisplay) setRegisterDisplay(false)
    loginDisplay ? setLoginDisplay(false) : setLoginDisplay(true)
  }

  const toggleRegister = () => {
    if (loginDisplay) setLoginDisplay(false)
    registerDisplay ? setRegisterDisplay(false) : setRegisterDisplay(true)
  }

  const toggleAddSeed = () => {
    setAddSeedDisplay(false)
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
      <ZipcodeForm />
      <Categories seedData={seedData} />
      {loginDisplay ? <LoginForm handleLogin={handleLogin} /> : null}
      {registerDisplay ? <RegisterForm handleRegister={handleRegister} /> : null}
      {addSeedDisplay ? <AddSeedForm handleAddSeed={handleAddSeed} /> : null}
      <button className="btn" onClick={()=> setAddSeedDisplay(true)}>Add New Seed</button>
      <footer className="footer">
        <p>Copyright © {new Date().getFullYear()} Sown App</p>
      </footer>
    </div>
  );
}

export default App;