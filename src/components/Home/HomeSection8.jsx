import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'

const HomeSection8 = () => {
  const { language } = useLanguage()
  
  return (
  <section className="counter-section pt-100">
  <div className="container">
  <div className="counter-wrap pt-100 pb-70">
  <div className="row">
  <div className="col-lg-3 col-sm-6">
  <div className="main-counter-item wow fadeInUp delay-0-2s">
  <h2 className="counter">3567</h2>
  <h2 className="point">+</h2>
                <h3>{translate(language, 'counter.projectDone')}</h3>
  </div>
  </div>
  <div className="col-lg-3 col-sm-6">
  <div className="main-counter-item wow fadeInUp delay-0-4s">
  <h2 className="counter">547</h2>
  <h2 className="point">+</h2>
                <h3>{translate(language, 'counter.happyClient')}</h3>
  </div>
  </div>
  <div className="col-lg-3 col-sm-6">
  <div className="main-counter-item wow fadeInUp delay-0-6s">
  <h2 className="counter">7067</h2>
  <h2 className="point">+</h2>
                <h3>{translate(language, 'counter.clientSatisfied')}</h3>
  </div>
  </div>
  <div className="col-lg-3 col-sm-6">
  <div className="main-counter-item wow fadeInUp delay-0-8s">
  <h2 className="counter">3567</h2>
  <h2 className="point">+</h2>
                <h3>{translate(language, 'counter.trustedClient')}</h3>
  </div>
  </div>
  </div>
  </div>
  </div>
  </section>
  )
}

export default HomeSection8
