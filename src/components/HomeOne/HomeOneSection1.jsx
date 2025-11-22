import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'
import { NavLink } from 'react-router-dom'

const HomeOneSection1 = () => {
  const { language } = useLanguage()
  
  return (
    <section className="banner-section bg-1">
      <div className="container">
        <div className="banner-content">
          <h1 className="wow fadeInUp delay-0-2s">{translate(language, 'banner.title')}</h1>
          <p className="wow fadeInUp delay-0-4s">{translate(language, 'banner.description')}</p>
          <ul className="wow fadeInUp delay-0-6s">
            <li>
              <i className="icofont-tools-bag"></i>
              <h3>{translate(language, 'banner.improveConstruction')}</h3>
            </li>
            <li>
              <i className="icofont-gears"></i>
              <h3>{translate(language, 'banner.approachConstruction')}</h3>
            </li>
          </ul>
          <NavLink to="/contact" className="main-btn wow fadeInUp delay-0-8s">
            <span>
              {language === 'ar' ? (
                <>
                  <i className="icofont-arrow-left" />
                  {translate(language, 'common.getQuote')}
                </>
              ) : (
                <>
                  {translate(language, 'common.getQuote')}
                  <i className="icofont-arrow-right" />
                </>
              )}
            </span>
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default HomeOneSection1
