import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import ThemeToggle from './components/ThemeToggle'
import ThemedBox from './components/ThemedBox'
import LanguageDisplay from './components/LanguageDisplay'
import LanguageToggle from './components/LanguageToggle'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1>Clickea el boton para ver el cambio de tema</h1>
          <ThemeToggle />
          <ThemedBox />
          <LanguageDisplay />
          <LanguageToggle />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
