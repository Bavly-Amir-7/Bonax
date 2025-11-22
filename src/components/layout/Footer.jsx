import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'

const Footer = () => {
  const { language } = useLanguage()
  
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY || document.documentElement.scrollTop
      const backToTop = document.querySelector('.back-to-top')
      if (backToTop) {
        if (scrolled > 300) {
          backToTop.classList.add('active')
        } else {
          backToTop.classList.remove('active')
        }
      }
    }

    const handleClick = (e) => {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    window.addEventListener('scroll', handleScroll)
    const backToTopBtn = document.querySelector('.back-to-top')
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', handleClick)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (backToTopBtn) {
        backToTopBtn.removeEventListener('click', handleClick)
      }
    }
  }, [])
  
  const handleScrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  return (
   <section className="footer-section pt-100 pb-70 ">
      <div className="container">
        <div className="back-to-top text-center" onClick={handleScrollToTop} style={{ cursor: 'pointer' }}>
          <i className="icofont-simple-up"></i>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="main-footer-item wow fadeInUp delay-0-2s">
              <NavLink to="/" className="footer-logo">
                <img src="/assets/images/logo/logo1.png" alt="Image" />
              </NavLink>
              <p>{translate(language, 'footer.description')}</p>
              <ul className="footer-social-content">
                <li>
                  <a href="#" target="_blank">
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="icofont-youtube-play"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="icofont-pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="main-footer-item wow fadeInUp delay-0-4s">
              <h3>{translate(language, 'footerLinks.service')}</h3>
              <ul className="import-link">
                <li>
                  <NavLink to="/services">{translate(language, 'footerLinks.whyChooseUs')}</NavLink>
                </li>
                <li>
                  <NavLink to="/projects">{translate(language, 'footerLinks.ourSolutions')}</NavLink>
                </li>
                <li>
                  <NavLink to="/team">{translate(language, 'footerLinks.partners')}</NavLink>
                </li>
                <li>
                  <NavLink to="/services">{translate(language, 'footerLinks.coreValues')}</NavLink>
                </li>
                <li>
                  <NavLink to="/projects">{translate(language, 'footerLinks.ourProjects')}</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="main-footer-item wow fadeInUp delay-0-6s">
              <h3>{translate(language, 'footerLinks.quickLink')}</h3>
              <ul className="import-link">
                <li>
                  <NavLink to="/services">{translate(language, 'footerLinks.residents')}</NavLink>
                </li>
                <li>
                  <NavLink to="/projects">{translate(language, 'footerLinks.business')}</NavLink>
                </li>
                <li>
                  <NavLink to="/services">{translate(language, 'footerLinks.onlineService')}</NavLink>
                </li>
                <li>
                  <NavLink to="/about">{translate(language, 'footerLinks.visiting')}</NavLink>
                </li>
                <li>
                  <NavLink to="/team">{translate(language, 'footerLinks.employment')}</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="main-footer-item wow fadeInUp delay-0-8s">
              <h3>{translate(language, 'footerLinks.ourContact')}</h3>
              <ul className="contact-info">
                <li>
                  <i className="icofont-clock-time"></i>
                  <span>{translate(language, 'footerLinks.openHours')}</span>
                </li>
                <li>
                  <i className="icofont-location-pin"></i>
                  <span>{translate(language, 'footerLinks.address')}</span>
                </li>
                <li>
                  <i className="icofont-phone"></i>
                  <a href="tel:+099-695-695-35">+099 695 695 35</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer