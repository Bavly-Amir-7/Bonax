import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'
import { NavLink } from 'react-router-dom'

const ServicesDetailsSection2 = () => {
  const { language } = useLanguage()
  
  return (
    <section className="project-details-section pt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="project-details-img mt-0">
            </div>
          </div>
          <div className="col-lg-4">
            <div className="project-left-sidebar">
              <h3>{translate(language, 'blogDetails.allServices')}</h3>
              <ul>
                <li>
                  <NavLink to="/projects">Folat This Clening.</NavLink>
                </li>
                <li>
                  <NavLink to="/projects">Professional Cleaning.</NavLink>
                </li>
                <li>
                  <NavLink to="/projects">Reasonable Service.</NavLink>
                </li>
                <li>
                  <NavLink to="/projects">Embarrassing Clening..</NavLink>
                </li>
                <li>
                  <NavLink to="/projects">Variations Clening.</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project-details-cntent ptb-50">
          <p>{translate(language, 'services.serviceDescription')}</p>
          <p>{translate(language, 'services.serviceDescription')}</p>
        </div>
      </div>
    </section>
  )
}

export default ServicesDetailsSection2
