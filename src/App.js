import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Categories from './components/Categories';
import Header from './components/Header';

function App() {
  const [seedData, setSeedData] = useState([])
  const [userData, setUserData] = useState(false)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/seeds/`)
            .then(response => setSeedData(response.data.data))
    }, [])

  return (
    <div className="App">
      <Header userData={userData}/>
      <Categories seedData={seedData}/>
      <footer className="footer">
        <p>Copyright © 2022 Sown App</p>
      </footer>
    </div>
  );
}

export default App;