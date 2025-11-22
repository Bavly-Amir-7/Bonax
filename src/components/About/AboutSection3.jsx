import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'

const AboutSection3 = () => {
  const { language } = useLanguage()
  
  return (
    <section className="features-section pt-100 pb-70">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-lg-3 col-sm-6">
            <div className="main-features-item wow fadeInUp delay-0-2s">
              <i className="main-icon icofont-building-alt"></i>
              <i className="shape-icon icofont-building-alt"></i>
              <h3>{translate(language, 'features.presentationBuilding')}</h3>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="main-features-item wow fadeInUp delay-0-4s">
              <i className="main-icon icofont-calculations"></i>
              <i className="shape-icon icofont-calculations"></i>
              <h3>{translate(language, 'features.calculationsBarar')}</h3>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="main-features-item wow fadeInUp delay-0-6s">
              <i className="main-icon icofont-industries"></i>
              <i className="shape-icon icofont-industries"></i>
              <h3>{translate(language, 'features.industriesPollution')}</h3>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="main-features-item wow fadeInUp delay-0-8s">
              <i className="main-icon icofont-under-construction-alt"></i>
              <i className="shape-icon icofont-under-construction-alt"></i>
              <h3>{translate(language, 'features.underConstruction')}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection3
