import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './LoginPage';
import MovieDetailPage from './MoviesDetailPage';
import MoviesListPage from './MoviesListPage';
import NavBar from '../../components/NavBar/NavBar'
import ActorsListPage from './ActorListPage';



function App() {

  const [user, setUser] = useState(null);

  function updateUser(user) {
    setUser(user)
  }

  return (
    <>
      <main className='App'>
        {
          user ? 
            <>
              <NavBar user={user}/>
              <Routes>
                <Route path="/" element={<MoviesListPage />}/>
                <Route path="/movies/:movieName" element={<MovieDetailPage />}/>
                <Route path="/actors" element={<ActorsListPage />}/>
              </Routes>
            </>
            :
            <LoginPage updateUser={updateUser}/>
        }        
      </main>
    </>
  )
}

export default App
