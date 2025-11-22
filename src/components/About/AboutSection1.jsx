import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'
import { NavLink } from 'react-router-dom'

const AboutSection1 = () => {
  const { language } = useLanguage()
  
  return (
    <section className="page-banner-section bg-1">
      <div className="container">
        <div className="page-banner-content">
          <h2>{translate(language, 'pages.aboutPage')}</h2>
          <ul>
            <li>
              <NavLink to="/">{translate(language, 'common.home')}</NavLink>
            </li>
            <li>{translate(language, 'common.about')}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutSection1
