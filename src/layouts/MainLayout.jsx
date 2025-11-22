import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const MainLayout = ({ children }) => {
  const location = useLocation()

  useEffect(() => {
    // Initialize WOW.js for animations after scripts are loaded
    const initWOW = () => {
      if (typeof window !== 'undefined' && window.WOW) {
        // Destroy existing WOW instance if any
        if (window.wowInstance) {
          window.wowInstance = null
        }
        
        // Create new WOW instance
        const wow = new window.WOW({
          boxClass: 'wow',
          animateClass: 'animated',
          offset: 0,
          mobile: false,
          live: true,
          scrollContainer: null
        })
        wow.init()
        window.wowInstance = wow
      } else {
        // Retry if WOW is not loaded yet
        setTimeout(initWOW, 100)
      }
    }

    // Wait for scripts to load
    if (document.readyState === 'complete') {
      initWOW()
    } else {
      window.addEventListener('load', initWOW)
      // Also try after a short delay
      setTimeout(initWOW, 500)
    }

    // Re-initialize on route change
    return () => {
      if (window.wowInstance) {
        window.wowInstance = null
      }
    }
  }, [location.pathname])

  return (
    <>
      <Header />
      <div className="page-wrapper">{children}</div>
      <Footer />
    </>
  )
}

export default MainLayout