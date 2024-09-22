import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button onClick={toggleTheme} style={{ padding: '10px', fontSize: '16px' }}>
      Cambiar a {theme === 'light' ? 'tema oscuro' : 'tema claro'}
    </button>
  )
}

export default ThemeToggle
