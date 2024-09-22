import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import ThemedBox from './components/ThemedBox'

function App() {
  return (
    <ThemeProvider>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Clickea el boton para ver el cambio de tema</h1>
        <ThemeToggle />
        <ThemedBox />
      </div>
    </ThemeProvider>
  )
}

export default App
