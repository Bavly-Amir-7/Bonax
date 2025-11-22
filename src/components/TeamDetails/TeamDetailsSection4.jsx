import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'
import { NavLink } from 'react-router-dom'

const TeamDetailsSection4 = () => {
  const { language } = useLanguage()
  
  return (
    <section className="team-section bg-1 bg-color-f2f3f5 pt-100 pb-70">
      <div className="container">
        <div className="main-section-title-wrap">
          <div className="row">
            <div className="col-lg-6 wow fadeInLeft delay-0-2s">
              <div className="main-section-title left-title">
                <span className="up-title">{translate(language, 'team.ourTeamMember')}</span>
                <h2>{translate(language, 'team.title')}</h2>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight delay-0-2s">
              <p>{translate(language, 'team.description')}</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {[1, 2, 3].map((item) => (
            <div key={item} className="col-lg-4 col-md-6">
              <div className="main-team-item wow fadeInUp delay-0-2s">
                <NavLink to="/team-details" className="team-img">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" alt="Image" />
                </NavLink>
                <div className="team-content hover-style">
                  <div className="inner-border">
                    <h3>
                      <NavLink to="/team-details">Jhuhon Dew</NavLink>
                    </h3>
                    <span>{translate(language, 'team.founder')}</span>
                    <div className="team-social-link">
                      <button className="controller">
                        <i className={language === 'ar' ? 'icofont-arrow-left' : 'icofont-arrow-right'}></i>
                      </button>
                      <ul className="social-link">
                        <li>
                          <a href="https://www.facebook.com/" target="_blank">
                            <i className="icofont-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com/" target="_blank">
                            <i className="icofont-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/" target="_blank">
                            <i className="icofont-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.vimeo.com/" target="_blank">
                            <i className="icofont-vimeo"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamDetailsSection4
