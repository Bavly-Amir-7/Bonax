import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'

const TeamDetailsSection3 = () => {
  const { language } = useLanguage()
  
  return (
    <section className="video-section ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="video-content wow fadeInLeft delay-0-2s">
              <span className="up-title">{translate(language, 'video.ourWatchVideo')}</span>
              <h2>{translate(language, 'video.title')}</h2>
              <p>{translate(language, 'video.description')}</p>
              <button className="main-btn">
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
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-center wow fadeInRight delay-0-2s">
              <div className="video-btn">
                <a href="https://www.youtube.com/watch?v=qEp9p85TFHM&ab_channel=TechFreeze" className="popup-youtube">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <i className="icofont-play-alt-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamDetailsSection3
