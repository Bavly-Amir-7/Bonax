import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'
import { NavLink } from 'react-router-dom'

const ServicesSection2 = () => {
  const { language } = useLanguage()
  
  return (
    <section className="services-section ptb-100">
      <div className="container">
        <div className="main-section-title wow fadeInUp delay-0-2s">
          <span className="up-title">{translate(language, 'services.ourBestServices')}</span>
          <h2>{translate(language, 'services.title')}</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
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
          <div className="col-lg-4 col-md-6">
            <div className="main-services-item style-two wow fadeInUp delay-0-4s">
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
              <img src="/assets/images/services-card-shape-2.png" className="services-card-shape" alt="Image" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="main-services-item style-two wow fadeInUp delay-0-6s">
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
              <img src="/assets/images/services-card-shape-2.png" className="services-card-shape" alt="Image" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="main-services-item style-two wow fadeInUp delay-0-2s">
              <i className="icofont-world"></i>
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
          <div className="col-lg-4 col-md-6">
            <div className="main-services-item style-two wow fadeInUp delay-0-4s">
              <i className="icofont-dart"></i>
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
              <img src="/assets/images/services-card-shape-2.png" className="services-card-shape" alt="Image" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="main-services-item style-two wow fadeInUp delay-0-6s">
              <i className="icofont-gears"></i>
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
              <img src="/assets/images/services-card-shape-2.png" className="services-card-shape" alt="Image" />
            </div>
          </div>
        </div>
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link">
                <i className={language === 'ar' ? 'icofont-simple-right' : 'icofont-simple-left'}></i>
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link" aria-current="page">1</a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link active">2</a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">3</a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">4</a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                <i className={language === 'ar' ? 'icofont-simple-left' : 'icofont-simple-right'}></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <img src="/assets/images/services-bg-shape.png" className="services-bg-shape" alt="Image" />
    </section>
  )
}

export default ServicesSection2
