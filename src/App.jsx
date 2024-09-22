import './App.css'
import { useState } from 'react'

function App() {
  const [isTextVisible, setIsTextVisible] = useState(false)

  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible)
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button
        onClick={toggleTextVisibility}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        {isTextVisible ? 'Ocultar texto' : 'Mostrar texto'}
      </button>

      {isTextVisible && (
        <p style={{ marginTop: '20px', fontSize: '18px' }}>
          ¡Este es el texto que puedes mostrar u ocultar!
        </p>
      )}
    </div>
  )
}

export default App
