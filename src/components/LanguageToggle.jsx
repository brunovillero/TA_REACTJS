import { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'

const LanguageToggle = () => {
  const { language, toggleLanguage } = useContext(LanguageContext)

  return (
    <button onClick={toggleLanguage} style={{ padding: '10px', margin: '10px' }}>
      Cambiar a {language === 'es' ? 'Inglés' : 'Español'}
    </button>
  )
}

export default LanguageToggle
