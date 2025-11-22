import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'
import { NavLink } from 'react-router-dom'

const NotFoundSection2 = () => {
  const { language } = useLanguage()
  
  return (
    <section className="error-page-section ptb-100">
      <div className="container">
        <div className="error-page-content text-center">
          <img src="https://images.unsplash.com/photo-1633356122544-f134324331cd?w=400&h=300&fit=crop" alt="Image" />
          <p>{translate(language, 'error.pageNotFound')}</p>
          <NavLink to="/" className="main-btn">
            <span>
              {language === 'ar' ? (
                <>
                  <i className="icofont-arrow-left" />
                  {translate(language, 'error.goToHome')}
                </>
              ) : (
                <>
                  {translate(language, 'error.goToHome')}
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

export default NotFoundSection2
