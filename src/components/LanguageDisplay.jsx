import { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'

const LanguageDisplay = () => {
  const { language } = useContext(LanguageContext) // Obtener el idioma actual desde el contexto

  return <p>Idioma actual: {language === 'es' ? 'Español' : 'Inglés'}</p>
}

export default LanguageDisplay
