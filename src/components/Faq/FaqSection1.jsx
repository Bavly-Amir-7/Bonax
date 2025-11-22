import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'
import { NavLink } from 'react-router-dom'

const FaqSection1 = () => {
  const { language } = useLanguage()
  
  return (
    <section className="page-banner-section bg-6">
      <div className="container">
        <div className="page-banner-content">
          <h2>{translate(language, 'pages.faqPage')}</h2>
          <ul>
            <li>
              <NavLink to="/">{translate(language, 'breadcrumb.home')}</NavLink>
            </li>
            <li>{translate(language, 'pages.faqPage')}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default FaqSection1
