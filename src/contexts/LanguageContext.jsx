import { createContext, useState } from 'react'

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es') // Estado inicial, español ('es')

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'es' ? 'en' : 'es'))
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
