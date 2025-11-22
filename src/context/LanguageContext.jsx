import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const saved = localStorage.getItem('bonax-lang')
    if (saved === 'en' || saved === 'ar') {
      setLanguage(saved)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = language === 'ar' ? 'ar' : 'en'
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    localStorage.setItem('bonax-lang', language)

    // تبديل Bootstrap CSS بناءً على اللغة
    const bootstrapLink = document.querySelector('link[href*="bootstrap"]')
    if (bootstrapLink) {
      if (language === 'ar') {
        bootstrapLink.href = '/assets/css/bootstrap.rtl.min.css'
      } else {
        bootstrapLink.href = '/assets/css/bootstrap.min.css'
      }
    }
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)