import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ConsoleButton from './components/ConsoleButton.jsx'
import AlertButton from './components/AlertButton' 

function App() {
  

  return (
    <>
      <ConsoleButton></ConsoleButton>
      <ConsoleButton consoleText= "something"/>
      <AlertButton></AlertButton>
      <AlertButton alertText={"Me!"}/>    
      </>
  )
}

export default App
