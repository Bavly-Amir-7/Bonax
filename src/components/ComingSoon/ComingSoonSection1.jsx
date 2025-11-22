import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'

const ComingSoonSection1 = () => {
  const { language } = useLanguage()
  
  return (
    <section className="coming-soon-section pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <span className="sub-title">{translate(language, 'pages.comingSoon')}</span>
            <h1 className="title">{translate(language, 'comingSoon.title')}</h1>
            <p>{translate(language, 'comingSoon.description')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComingSoonSection1
