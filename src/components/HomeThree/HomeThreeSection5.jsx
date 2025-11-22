import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'

const HomeThreeSection5 = () => {
  const { language } = useLanguage()
  
  return (
    <section className="faq-section ptb-100">
      <div className="container">
        <div className="main-section-title-wrap">
          <div className="row">
            <div className="col-lg-6 wow fadeInLeft delay-0-2s">
              <div className="main-section-title white-title left-title">
                <span className="up-title">{translate(language, 'faq.title')}</span>
                <h2>{translate(language, 'faq.subtitle')}</h2>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight delay-0-2s">
              <p className="p-style">{translate(language, 'faq.description')}</p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <i className="icofont-check"></i>
                    {translate(language, 'faq.question1')}
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>{translate(language, 'faq.answer')}</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <i className="icofont-check"></i>
                    {translate(language, 'faq.question2')}
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>{translate(language, 'faq.answer')}</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <i className="icofont-check"></i>
                    {translate(language, 'faq.question3')}
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>{translate(language, 'faq.answer')}</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    <i className="icofont-check"></i>
                    {translate(language, 'faq.question4')}
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>{translate(language, 'faq.answer')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq-img">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeThreeSection5
