import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'

const TestimonialsSection2 = () => {
  const { language } = useLanguage()
  
  return (
    <section className="testimonial-section ptb-100">
      <div className="container">
        <div className="main-section-title">
          <span className="up-title">{translate(language, 'testimonial.ourTestimonial')}</span>
          <h2>{translate(language, 'testimonial.title')}</h2>
        </div>
        <div className="row">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="col-lg-6 col-md-6">
              <div className="main-testimonial-item style-box">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop" alt="Image" />
                <p>{translate(language, 'testimonial.testimonialText')}</p>
                <h3>Juhon Dew</h3>
                <span>{translate(language, 'team.founder')}</span>
                <ul>
                  <li><i className="icofont-star"></i></li>
                  <li><i className="icofont-star"></i></li>
                  <li><i className="icofont-star"></i></li>
                  <li><i className="icofont-star"></i></li>
                  <li><i className="icofont-star"></i></li>
                </ul>
              </div>
            </div>
          ))}
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
    </section>
  )
}

export default TestimonialsSection2
