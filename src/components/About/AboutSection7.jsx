import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'
import { NavLink } from 'react-router-dom'

const AboutSection7 = () => {
  const { language } = useLanguage()
  
  return (
    <section className="blog-section pt-100 pb-70">
      <div className="container">
        <div className="main-section-title-wrap">
          <div className="row">
            <div className="col-lg-6 wow fadeInLeft delay-0-2s">
              <div className="main-section-title left-title">
                <span className="up-title">{translate(language, 'blog.ourLargestBlog')}</span>
                <h2>{translate(language, 'blog.title')}</h2>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight delay-0-2s">
              <p>{translate(language, 'blog.description')}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="main-blog-item wow fadeInUp delay-0-2s">
              <NavLink to="/blog-details" className="blog-img">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=400&h=300&fit=crop" alt="Image" />
              </NavLink>
              <div className="blog-content hover-style">
                <div className="inner-border">
                  <ul>
                    <li>April 12, 2020</li>
                    <li>
                      <NavLink to="/blog-details">{translate(language, 'blog.comments')} (03)</NavLink>
                    </li>
                  </ul>
                  <h3>
                    <NavLink to="/blog-details">{translate(language, 'blog.blogTitle')}</NavLink>
                  </h3>
                  <p>{translate(language, 'blog.blogDescription')}</p>
                  <NavLink to="/blog-details" className="main-detail-btn">
                    {language === 'ar' ? (
                      <>
                        <i className="icofont-plus"></i>
                        {translate(language, 'common.readMore')}
                      </>
                    ) : (
                      <>
                        {translate(language, 'common.readMore')}
                        <i className="icofont-plus"></i>
                      </>
                    )}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="main-blog-item wow fadeInUp delay-0-4s">
              <NavLink to="/blog-details" className="blog-img">
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop" alt="Image" />
              </NavLink>
              <div className="blog-content hover-style">
                <div className="inner-border">
                  <ul>
                    <li>April 12, 2020</li>
                    <li>
                      <NavLink to="/blog-details">{translate(language, 'blog.comments')} (03)</NavLink>
                    </li>
                  </ul>
                  <h3>
                    <NavLink to="/blog-details">{translate(language, 'blog.blogTitle')}</NavLink>
                  </h3>
                  <p>{translate(language, 'blog.blogDescription')}</p>
                  <NavLink to="/blog-details" className="main-detail-btn">
                    {language === 'ar' ? (
                      <>
                        <i className="icofont-plus"></i>
                        {translate(language, 'common.readMore')}
                      </>
                    ) : (
                      <>
                        {translate(language, 'common.readMore')}
                        <i className="icofont-plus"></i>
                      </>
                    )}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="main-blog-item wow fadeInUp delay-0-6s">
              <NavLink to="/blog-details" className="blog-img">
                <img src="https://images.unsplash.com/photo-1553531088-e4c0ce40d4f0?w=400&h=300&fit=crop" alt="Image" />
              </NavLink>
              <div className="blog-content hover-style">
                <div className="inner-border">
                  <ul>
                    <li>April 12, 2020</li>
                    <li>
                      <NavLink to="/blog-details">{translate(language, 'blog.comments')} (03)</NavLink>
                    </li>
                  </ul>
                  <h3>
                    <NavLink to="/blog-details">{translate(language, 'blog.blogTitle')}</NavLink>
                  </h3>
                  <p>{translate(language, 'blog.blogDescription')}</p>
                  <NavLink to="/blog-details" className="main-detail-btn">
                    {language === 'ar' ? (
                      <>
                        <i className="icofont-plus"></i>
                        {translate(language, 'common.readMore')}
                      </>
                    ) : (
                      <>
                        {translate(language, 'common.readMore')}
                        <i className="icofont-plus"></i>
                      </>
                    )}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection7
