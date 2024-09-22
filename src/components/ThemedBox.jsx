import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const ThemedBox = () => {
  const { theme } = useContext(ThemeContext)

  // Estilos para tema claro y oscuro
  const lightStyle = {
    backgroundColor: '#fff',
    color: '#000',
    padding: '20px',
    margin: '20px',
    borderRadius: '10px',
  }

  const darkStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    margin: '20px',
    borderRadius: '10px',
  }

  return (
    <div style={theme === 'light' ? lightStyle : darkStyle}>
      Este es un componente con tema {theme === 'light' ? 'claro' : 'oscuro'}.
    </div>
  )
}

export default ThemedBox
