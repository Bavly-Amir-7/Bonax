import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'
import { NavLink } from 'react-router-dom'

const HomeThreeSection1 = () => {
  const { language } = useLanguage()
  
  return (
    <section className="banner-section bg-3">
      <div className="container">
        <div className="banner-content style-two style-three">
          <h1 className="wow fadeInUp delay-0-2s">{translate(language, 'banner.title')}</h1>
          <p className="wow fadeInUp delay-0-4s">{translate(language, 'banner.description')}</p>
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

export default HomeThreeSection1
