import { useState } from 'react'
import './App.css'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import NavBar from './Components/NavBar';
import Landing from './Components/Landing';
import HomePage from './Components/HomePage';
import Detail from './Components/Detail';
import NewGame from './Components/NewGame';
import Error from './Components/Error';

const App = () => {

  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div>
      {pathname !== "/" && <NavBar/>}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/create' element={<NewGame/>} />
        <Route path='*' element ={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App
