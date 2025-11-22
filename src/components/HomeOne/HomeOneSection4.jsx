import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'
import { NavLink } from 'react-router-dom'

const HomeOneSection4 = () => {
  const { language } = useLanguage()
  
  return (
    <section className="services-section bg-color-251f1a ptb-100">
      <div className="container">
        <div className="main-section-title white-title wow fadeInUp delay-0-2s">
          <span className="up-title">{translate(language, 'services.ourBestServices')}</span>
          <h2>{translate(language, 'services.title')}</h2>
        </div>
        <div className="services-slider owl-carousel owl-theme">
          <div className="main-services-item wow fadeInUp delay-0-2s">
            <i className="icofont-building-alt"></i>
            <h3>
              <NavLink to="/services-details">{translate(language, 'features.presentationBuilding')}</NavLink>
            </h3>
            <p>{translate(language, 'services.serviceDescription')}</p>
            <NavLink to="/services-details" className="main-detail-btn">
              {language === 'ar' ? (
                <>
                  <i className="icofont-plus"></i>
                  {translate(language, 'common.readMore')}
                </>
              ) : (
                <>
                  <i className="icofont-plus"></i>
                  {translate(language, 'common.readMore')}
                </>
              )}
            </NavLink>
            <img src="/assets/images/services-card-shape.png" className="services-card-shape" alt="Image" />
          </div>
          <div className="main-services-item wow fadeInUp delay-0-4s">
            <i className="icofont-industries"></i>
            <h3>
              <NavLink to="/services-details">{translate(language, 'features.industriesPollution')}</NavLink>
            </h3>
            <p>{translate(language, 'services.serviceDescription')}</p>
            <NavLink to="/services-details" className="main-detail-btn">
              {language === 'ar' ? (
                <>
                  <i className="icofont-plus"></i>
                  {translate(language, 'common.readMore')}
                </>
              ) : (
                <>
                  <i className="icofont-plus"></i>
                  {translate(language, 'common.readMore')}
                </>
              )}
            </NavLink>
            <img src="/assets/images/services-card-shape.png" className="services-card-shape" alt="Image" />
          </div>
          <div className="main-services-item wow fadeInUp delay-0-6s">
            <i className="icofont-under-construction-alt"></i>
            <h3>
              <NavLink to="/services-details">{translate(language, 'features.underConstruction')}</NavLink>
            </h3>
            <p>{translate(language, 'services.serviceDescription')}</p>
            <NavLink to="/services-details" className="main-detail-btn">
              {language === 'ar' ? (
                <>
                  <i className="icofont-plus"></i>
                  {translate(language, 'common.readMore')}
                </>
              ) : (
                <>
                  <i className="icofont-plus"></i>
                  {translate(language, 'common.readMore')}
                </>
              )}
            </NavLink>
            <img src="/assets/images/services-card-shape.png" className="services-card-shape" alt="Image" />
          </div>
          <div className="main-services-item wow fadeInUp delay-0-2s">
            <i className="icofont-building-alt"></i>
            <h3>
              <NavLink to="/services-details">{translate(language, 'features.presentationBuilding')}</NavLink>
            </h3>
            <p>{translate(language, 'services.serviceDescription')}</p>
            <NavLink to="/services-details" className="main-detail-btn">
              {language === 'ar' ? (
                <>
                  <i className="icofont-plus"></i>
                  {translate(language, 'common.readMore')}
                </>
              ) : (
                <>
                  <i className="icofont-plus"></i>
                  {translate(language, 'common.readMore')}
                </>
              )}
            </NavLink>
            <img src="/assets/images/services-card-shape.png" className="services-card-shape" alt="Image" />
          </div>
          <div className="main-services-item wow fadeInUp delay-0-4s">
            <i className="icofont-industries"></i>
            <h3>
              <NavLink to="/services-details">{translate(language, 'features.industriesPollution')}</NavLink>
            </h3>
            <p>{translate(language, 'services.serviceDescription')}</p>
            <NavLink to="/services-details" className="main-detail-btn">
              {language === 'ar' ? (
                <>
                  <i className="icofont-plus"></i>
                  {translate(language, 'common.readMore')}
                </>
              ) : (
                <>
                  <i className="icofont-plus"></i>
                  {translate(language, 'common.readMore')}
                </>
              )}
            </NavLink>
            <img src="/assets/images/services-card-shape.png" className="services-card-shape" alt="Image" />
          </div>
          <div className="main-services-item wow fadeInUp delay-0-6s">
            <i className="icofont-under-construction-alt"></i>
            <h3>
              <NavLink to="/services-details">{translate(language, 'features.underConstruction')}</NavLink>
            </h3>
            <p>{translate(language, 'services.serviceDescription')}</p>
            <NavLink to="/services-details" className="main-detail-btn">
              {language === 'ar' ? (
                <>
                  <i className="icofont-plus"></i>
                  {translate(language, 'common.readMore')}
                </>
              ) : (
                <>
                  <i className="icofont-plus"></i>
                  {translate(language, 'common.readMore')}
                </>
              )}
            </NavLink>
            <img src="/assets/images/services-card-shape.png" className="services-card-shape" alt="Image" />
          </div>
        </div>
      </div>
      <img src="/assets/images/services-bg-shape.png" className="services-bg-shape" alt="Image" />
    </section>
  )
}

export default HomeOneSection4
