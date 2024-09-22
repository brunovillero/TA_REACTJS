import './App.css'
import { useState } from 'react'
import Input from './components/Input.jsx'

function App() {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Introduce el texto a mostrar:</h2>
      <Input value={inputValue} onChange={handleInputChange} />

      <p style={{ marginTop: '20px' }}>
        <strong>Texto ingresado:</strong> {inputValue}
      </p>
    </div>
  )
}

export default App
