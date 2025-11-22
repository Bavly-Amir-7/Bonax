import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'

const FaqSection4 = () => {
  const { language } = useLanguage()
  
  return (
    <section className="testimonial-section ptb-100">
      <div className="container">
        <div className="main-section-title-wrap">
          <div className="row">
            <div className="col-lg-6 wow fadeInLeft delay-0-2s">
              <div className="main-section-title left-title">
                <span className="up-title">{translate(language, 'testimonial.ourTestimonial')}</span>
                <h2>{translate(language, 'testimonial.title')}</h2>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight delay-0-2s">
              <p>{translate(language, 'testimonial.description')}</p>
            </div>
          </div>
        </div>
        <div className="testimonial-slider owl-carousel owl-theme">
          <div className="main-testimonial-item">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" alt="Image" />
            <p>{translate(language, 'testimonial.testimonialText')}</p>
            <h3>Juhon Dew</h3>
            <span>{translate(language, 'team.founder')}</span>
            <ul>
              <li>
                <i className="icofont-star"></i>
              </li>
              <li>
                <i className="icofont-star"></i>
              </li>
              <li>
                <i className="icofont-star"></i>
              </li>
              <li>
                <i className="icofont-star"></i>
              </li>
              <li>
                <i className="icofont-star"></i>
              </li>
            </ul>
          </div>
          <div className="main-testimonial-item">
            <img src="https://images.unsplash.com/photo-1502685457733-3b37ad9d18d0?w=100&h=100&fit=crop" alt="Image" />
            <p>{translate(language, 'testimonials.itemDescription')}</p>
            <h3>Adam Dew</h3>
            <span>{translate(language, 'testimonials.founder')}</span>
            <ul>
              <li>
                <i className="icofont-star"></i>
              </li>
              <li>
                <i className="icofont-star"></i>
              </li>
              <li>
                <i className="icofont-star"></i>
              </li>
              <li>
                <i className="icofont-star"></i>
              </li>
              <li>
                <i className="icofont-star"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqSection4
