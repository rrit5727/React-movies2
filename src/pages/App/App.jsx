import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import MovieDetailPage from './MoviesDetailPage';
import MoviesListPage from './MoviesListPage';
import ActorsListPage from './ActorListPage';
import LoginPage from './LoginPage';



function App() {

  const [user, setUser ] = useState({});

  function updateUser(user) {
    setUser(user)
  }

  return (
    <>
      <main className='App'>
        { user  ? 
            <>
              <NavBar/>
              <Routes>
                  <Route path='/' element={<MoviesListPage />}/>
                  <Route path='/movies/:movieName' element={<MovieDetailPage />}/>
                  <Route path='/actors' element={<ActorsListPage />}/>
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
