import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);

    // Limpiar el temporizador cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Temporizador</h1>
      <p>Segundos: {timer}</p>
    </div>
  );
};

export default App
