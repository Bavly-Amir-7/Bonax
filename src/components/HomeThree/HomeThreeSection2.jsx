import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'
import { NavLink } from 'react-router-dom'

const HomeThreeSection2 = () => {
  const { language } = useLanguage()
  
  return (
    <section className="about-us-section ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-us-img style-two me-15 wow fadeInLeft delay-0-2s">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=600&fit=crop" alt="Image" />
              <div className="experience">
                <div className="experience-bg">
                  <span>{translate(language, 'about.experienceYears')}</span>
                </div>
              </div>
              <div className="about-img-child">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content style-two ms-15 wow fadeInRight delay-0-2s">
              <span className="up-title">{translate(language, 'about.ourAboutUs')}</span>
              <h2>{translate(language, 'about.title')}</h2>
              <p>{translate(language, 'about.description')}</p>
              <div className="progress-bars style-two" data-percentage="72%">
                <h4 className="progress-title-holder">
                  <span className="progress-title">{translate(language, 'about.successfulConstruction')}</span>
                  <span className="progress-number-wrapper">
                    <span className="progress-number-mark">
                      <span className="percent"></span>
                    </span>
                  </span>
                </h4>
                <div className="progress-content-outter">
                  <div className="progress-content"></div>
                </div>
              </div>
              <div className="progress-bars style-two" data-percentage="72%">
                <h4 className="progress-title-holder">
                  <span className="progress-title">{translate(language, 'about.successfulConstruction')}</span>
                  <span className="progress-number-wrapper">
                    <span className="progress-number-mark">
                      <span className="percent"></span>
                    </span>
                  </span>
                </h4>
                <div className="progress-content-outter">
                  <div className="progress-content"></div>
                </div>
              </div>
              <div className="progress-bars style-two mb-0" data-percentage="72%">
                <h4 className="progress-title-holder">
                  <span className="progress-title">{translate(language, 'about.successfulConstruction')}</span>
                  <span className="progress-number-wrapper">
                    <span className="progress-number-mark">
                      <span className="percent"></span>
                    </span>
                  </span>
                </h4>
                <div className="progress-content-outter">
                  <div className="progress-content"></div>
                </div>
              </div>
              <NavLink to="/contact" className="main-btn">
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
        </div>
      </div>
    </section>
  )
}

export default HomeThreeSection2
