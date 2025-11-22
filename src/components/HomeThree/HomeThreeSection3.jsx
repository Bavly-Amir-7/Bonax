import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'
import { NavLink } from 'react-router-dom'

const HomeThreeSection3 = () => {
  const { language } = useLanguage()
  
  return (
    <section className="services-section bg-2 bg-color-f7f8f9 pt-100 pb-70">
      <div className="container">
        <div className="main-section-title wow fadeInUp delay-0-2s">
          <span className="up-title">{translate(language, 'services.ourBestServices')}</span>
          <h2>{translate(language, 'services.title')}</h2>
        </div>
        <div className="row">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="col-lg-4 col-md-6">
              <div className="main-services-item style-two wow fadeInUp delay-0-2s">
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
                <img src="/assets/images/services-card-shape-2.png" className="services-card-shape" alt="Image" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <img src="/assets/images/services-bg-shape.png" className="services-bg-shape" alt="Image" />
    </section>
  )
}

export default HomeThreeSection3
