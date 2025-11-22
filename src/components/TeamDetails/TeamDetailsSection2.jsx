import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'

const TeamDetailsSection2 = () => {
  const { language } = useLanguage()
  
  return (
    <section className="team-details-section ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="team-details-img">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" alt="Image" />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="team-details-content">
              <h3>{translate(language, 'blogDetails.teamAboutDetails')}</h3>
              <ul>
                <li>{translate(language, 'blogDetails.name')} : Md Rubel Islam</li>
                <li>
                  {translate(language, 'blogDetails.about')} : Phis are bound to ensue; and equal blame belongs to those who through weakness of will, which is the same as through.We have the and industry expertise to develop solutions that can connect. Phis are bound to ensue; and equal blame belongs to those who through weakness
                </li>
                <li>
                  <a href="tel:+01300176513">{translate(language, 'blogDetails.call')}: +01300176513</a>
                </li>
                <li>
                  <span>{translate(language, 'blogDetails.followUs')}</span>
                  <a href="#">
                    <i className="icofont-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="icofont-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="icofont-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="icofont-pinterest"></i>
                  </a>
                  <a href="#">
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamDetailsSection2
