import { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'

import UserContextProvider from './context/UserContextProvider'  //auto imported

function App() {
  
  return (
    <UserContextProvider>
      <h1>chai with react || react rocks</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
