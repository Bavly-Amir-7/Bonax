import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'
import { NavLink } from 'react-router-dom'

const TeamSection1 = () => {
  const { language } = useLanguage()
  
  return (
    <section className="page-banner-section bg-4">
      <div className="container">
        <div className="page-banner-content">
          <h2>{translate(language, 'teamPage.pageTitle')}</h2>
          <ul>
            <li>
              <NavLink to="/">{translate(language, 'breadcrumb.home')}</NavLink>
            </li>
            <li>{translate(language, 'nav.team') || 'Team'}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default TeamSection1
