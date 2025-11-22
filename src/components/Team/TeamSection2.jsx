import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'
import { NavLink } from 'react-router-dom'

const TeamSection2 = () => {
  const { language } = useLanguage()
  
  return (
    <section className="team-section ptb-100">
      <div className="container">
        <div className="main-section-title-wrap">
          <div className="row">
            <div className="col-lg-6 wow fadeInLeft delay-0-2s">
              <div className="main-section-title left-title">
                <span className="up-title">{translate(language, 'team.ourTeamMember')}</span>
                <h2>{translate(language, 'team.title')}</h2>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight delay-0-2s">
              <p>{translate(language, 'team.description')}</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="main-team-item fadeInUp delay-0-2s">
              <NavLink to="/team-details" className="team-img">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" alt="Image" />
              </NavLink>
              <div className="team-content hover-style wow">
                <div className="inner-border">
                  <h3>
                    <NavLink to="/team-details">Jhuhon Dew</NavLink>
                  </h3>
                  <span>{translate(language, 'team.founder')}</span>
                  <div className="team-social-link">
                    <button className="controller">
                      <i className={language === 'ar' ? 'icofont-arrow-left' : 'icofont-arrow-right'}></i>
                    </button>
  <ul className="social-link">
  <li>
  <a href="https://www.facebook.com/" target="_blank">
  <i className="icofont-facebook"></i>
  </a>
  </li>
  <li>
  <a href="https://www.twitter.com/" target="_blank">
  <i className="icofont-twitter"></i>
  </a>
  </li>
  <li>
  <a href="https://www.instagram.com/" target="_blank">
  <i className="icofont-instagram"></i>
  </a>
  </li>
  <li>
  <a href="https://www.vimeo.com/" target="_blank">
  <i className="icofont-vimeo"></i>
  </a>
  </li>
  </ul>
  </div>
  </div>
  </div>
  </div>
  </div>
          <div className="col-lg-4 col-md-6">
            <div className="main-team-item wow fadeInUp delay-0-4s">
              <NavLink to="/team-details" className="team-img">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" alt="Image" />
              </NavLink>
              <div className="team-content hover-style">
                <div className="inner-border">
                  <h3>
                    <NavLink to="/team-details">Kilvaz Smith</NavLink>
                  </h3>
                  <span>{translate(language, 'team.marketer')}</span>
                  <div className="team-social-link">
                    <button className="controller">
                      <i className={language === 'ar' ? 'icofont-arrow-left' : 'icofont-arrow-right'}></i>
                    </button>
  <ul className="social-link">
  <li>
  <a href="https://www.facebook.com/" target="_blank">
  <i className="icofont-facebook"></i>
  </a>
  </li>
  <li>
  <a href="https://www.twitter.com/" target="_blank">
  <i className="icofont-twitter"></i>
  </a>
  </li>
  <li>
  <a href="https://www.instagram.com/" target="_blank">
  <i className="icofont-instagram"></i>
  </a>
  </li>
  <li>
  <a href="https://www.vimeo.com/" target="_blank">
  <i className="icofont-vimeo"></i>
  </a>
  </li>
  </ul>
  </div>
  </div>
  </div>
  </div>
  </div>
  <div className="col-lg-4 col-md-6">
  <div className="main-team-item hover-style wow fadeInUp delay-0-6s">
  <NavLink to="/team-details" className="team-img">
  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" alt="Image" />
  </NavLink>
  <div className="team-content hover-style">
  <div className="inner-border">
  <h3>
  <NavLink to="/team-details">Admon Smith</NavLink>
  </h3>
  <span>{translate(language, 'team.founder')}</span>
  <div className="team-social-link">
  <button className="controller">
  <i className={language === 'ar' ? 'icofont-arrow-left' : 'icofont-arrow-right'}></i>
  </button>
  <ul className="social-link">
  <li>
  <a href="https://www.facebook.com/" target="_blank">
  <i className="icofont-facebook"></i>
  </a>
  </li>
  <li>
  <a href="https://www.twitter.com/" target="_blank">
  <i className="icofont-twitter"></i>
  </a>
  </li>
  <li>
  <a href="https://www.instagram.com/" target="_blank">
  <i className="icofont-instagram"></i>
  </a>
  </li>
  <li>
  <a href="https://www.vimeo.com/" target="_blank">
  <i className="icofont-vimeo"></i>
  </a>
  </li>
  </ul>
  </div>
  </div>
  </div>
  </div>
  </div>
          <div className="col-lg-4 col-md-6">
            <div className="main-team-item fadeInUp delay-0-2s">
              <NavLink to="/team-details" className="team-img">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop" alt="Image" />
              </NavLink>
              <div className="team-content hover-style wow">
                <div className="inner-border">
                  <h3>
                    <NavLink to="/team-details">Jhuhon Dew</NavLink>
                  </h3>
                  <span>{translate(language, 'team.founder')}</span>
                  <div className="team-social-link">
                    <button className="controller">
                      <i className={language === 'ar' ? 'icofont-arrow-left' : 'icofont-arrow-right'}></i>
                    </button>
  <ul className="social-link">
  <li>
  <a href="https://www.facebook.com/" target="_blank">
  <i className="icofont-facebook"></i>
  </a>
  </li>
  <li>
  <a href="https://www.twitter.com/" target="_blank">
  <i className="icofont-twitter"></i>
  </a>
  </li>
  <li>
  <a href="https://www.instagram.com/" target="_blank">
  <i className="icofont-instagram"></i>
  </a>
  </li>
  <li>
  <a href="https://www.vimeo.com/" target="_blank">
  <i className="icofont-vimeo"></i>
  </a>
  </li>
  </ul>
  </div>
  </div>
  </div>
  </div>
  </div>
          <div className="col-lg-4 col-md-6">
            <div className="main-team-item wow fadeInUp delay-0-4s">
              <NavLink to="/team-details" className="team-img">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" alt="Image" />
              </NavLink>
              <div className="team-content hover-style">
                <div className="inner-border">
                  <h3>
                    <NavLink to="/team-details">Kilvaz Smith</NavLink>
                  </h3>
                  <span>{translate(language, 'team.marketer')}</span>
                  <div className="team-social-link">
                    <button className="controller">
                      <i className={language === 'ar' ? 'icofont-arrow-left' : 'icofont-arrow-right'}></i>
                    </button>
  <ul className="social-link">
  <li>
  <a href="https://www.facebook.com/" target="_blank">
  <i className="icofont-facebook"></i>
  </a>
  </li>
  <li>
  <a href="https://www.twitter.com/" target="_blank">
  <i className="icofont-twitter"></i>
  </a>
  </li>
  <li>
  <a href="https://www.instagram.com/" target="_blank">
  <i className="icofont-instagram"></i>
  </a>
  </li>
  <li>
  <a href="https://www.vimeo.com/" target="_blank">
  <i className="icofont-vimeo"></i>
  </a>
  </li>
  </ul>
  </div>
  </div>
  </div>
  </div>
  </div>
  <div className="col-lg-4 col-md-6">
  <div className="main-team-item hover-style wow fadeInUp delay-0-6s">
  <NavLink to="/team-details" className="team-img">
  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" alt="Image" />
  </NavLink>
  <div className="team-content hover-style">
  <div className="inner-border">
  <h3>
  <NavLink to="/team-details">Admon Smith</NavLink>
  </h3>
  <span>{translate(language, 'team.founder')}</span>
  <div className="team-social-link">
  <button className="controller">
  <i className={language === 'ar' ? 'icofont-arrow-left' : 'icofont-arrow-right'}></i>
  </button>
  <ul className="social-link">
  <li>
  <a href="https://www.facebook.com/" target="_blank">
  <i className="icofont-facebook"></i>
  </a>
  </li>
  <li>
  <a href="https://www.twitter.com/" target="_blank">
  <i className="icofont-twitter"></i>
  </a>
  </li>
  <li>
  <a href="https://www.instagram.com/" target="_blank">
  <i className="icofont-instagram"></i>
  </a>
  </li>
  <li>
  <a href="https://www.vimeo.com/" target="_blank">
  <i className="icofont-vimeo"></i>
  </a>
  </li>
  </ul>
  </div>
  </div>
                  </div>
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
    </section>
  )
}

export default TeamSection2
