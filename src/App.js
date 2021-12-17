import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Categories from './components/Categories';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  const [seedData, setSeedData] = useState([])
  const [userData, setUserData] = useState(false)

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

    const handleLoginClick = async (data) => {
      await setUserData(data)
      axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/users/login`, {...userData})
        .then(response => console.log(response))
        .catch(error => console(error))
    }

    const handleRegisterClick = async (data) => {
      await setUserData(data)
      axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/users/register`, {...userData})
        .then(response => console.log(response))
        .catch(error => console(error))
    }

  return (
    <div className="App">
      <Header userData={userData} handleLogout={handleLogoutClick}/>
      {/* <LoginForm handleLogin={handleLoginClick}/> */}
      <RegisterForm handleRegister={handleRegisterClick}/>
      <Categories seedData={seedData}/>
      <footer className="footer">
        <p>Copyright © 2022 Sown App</p>
      </footer>
    </div>
  );
}

export default App;