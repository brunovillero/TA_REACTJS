import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  useEffect(() => {
    document.title = `Contador: ${count}`;
  }, [count]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Contador: {count}</h1>

      <button
        onClick={handleIncrement}
        style={{ padding: '10px 20px', marginRight: '10px', fontSize: '16px' }}
      >
        Aumentar
      </button>

      <button
        onClick={handleDecrement}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Disminuir
      </button>
    </div>
  )
}

export default App
