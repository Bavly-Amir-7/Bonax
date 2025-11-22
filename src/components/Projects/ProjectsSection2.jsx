import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'
import { NavLink } from 'react-router-dom'

const ProjectsSection2 = () => {
  const { language } = useLanguage()
  
  return (
    <section className="projects-section ptb-100">
      <div className="container">
        <div className="main-section-title-wrap">
          <div className="row">
            <div className="col-lg-6 wow fadeInLeft delay-0-2s">
              <div className="main-section-title left-title">
                <span className="up-title">{translate(language, 'projects.ourProjectsNow')}</span>
                <h2>{translate(language, 'projects.title')}</h2>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight delay-0-2s">
              <p>{translate(language, 'projects.description')}</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="main-projects-item wow fadeInUp delay-0-2s">
              <NavLink to="/project-details" className="projects-img">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop" alt="Image" />
              </NavLink>
              <div className="project-content hover-style">
                <div className="inner-border">
                  <h3>
                    <NavLink to="/project-details">{translate(language, 'features.presentationBuilding')}</NavLink>
                  </h3>
                  <p>{translate(language, 'projects.projectDescription')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="main-projects-item wow fadeInUp delay-0-4s">
              <NavLink to="/project-details" className="projects-img">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop" alt="Image" />
              </NavLink>
              <div className="project-content hover-style">
                <div className="inner-border">
                  <h3>
                    <NavLink to="/project-details">{translate(language, 'features.presentationBuilding')}</NavLink>
                  </h3>
                  <p>{translate(language, 'projects.projectDescription')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="main-projects-item wow fadeInUp delay-0-6s">
              <NavLink to="/project-details" className="projects-img">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop" alt="Image" />
              </NavLink>
              <div className="project-content hover-style">
                <div className="inner-border">
                  <h3>
                    <NavLink to="/project-details">{translate(language, 'features.presentationBuilding')}</NavLink>
                  </h3>
                  <p>{translate(language, 'projects.projectDescription')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="main-projects-item wow fadeInUp delay-0-2s">
              <NavLink to="/project-details" className="projects-img">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop" alt="Image" />
              </NavLink>
              <div className="project-content hover-style">
                <div className="inner-border">
                  <h3>
                    <NavLink to="/project-details">{translate(language, 'features.presentationBuilding')}</NavLink>
                  </h3>
                  <p>{translate(language, 'projects.projectDescription')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="main-projects-item wow fadeInUp delay-0-4s">
              <NavLink to="/project-details" className="projects-img">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop" alt="Image" />
              </NavLink>
              <div className="project-content hover-style">
                <div className="inner-border">
                  <h3>
                    <NavLink to="/project-details">{translate(language, 'features.presentationBuilding')}</NavLink>
                  </h3>
                  <p>{translate(language, 'projects.projectDescription')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="main-projects-item wow fadeInUp delay-0-6s">
              <NavLink to="/project-details" className="projects-img">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop" alt="Image" />
              </NavLink>
              <div className="project-content hover-style">
                <div className="inner-border">
                  <h3>
                    <NavLink to="/project-details">{translate(language, 'features.presentationBuilding')}</NavLink>
                  </h3>
                  <p>{translate(language, 'projects.projectDescription')}</p>
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

export default ProjectsSection2
