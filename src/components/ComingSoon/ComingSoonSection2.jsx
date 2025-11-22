import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'

const ComingSoonSection2 = () => {
  const { language } = useLanguage()
  
  return (
    <section className="coming-soon-newsletter pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="newsletter-box">
              <h3 className="title">{translate(language, 'comingSoon.getNotified')}</h3>
              <form className="newsletter-form">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder={translate(language, 'comingSoon.enterEmail')}
                  />
                  <button type="submit" className="theme-btn">
                    {translate(language, 'comingSoon.notifyMe')}
                  </button>
                </div>
              </form>
              <p className="text">
                {translate(language, 'comingSoon.noSpam')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComingSoonSection2
