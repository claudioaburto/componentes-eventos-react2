import { useState } from 'react'
import './App.css'
import Registro from './components/Registro'

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState("");
  return (
    <>
      <Registro color={color} setColor={setColor} error={error} setError={setError}></Registro>
      
    </>
  )
}

export default App
