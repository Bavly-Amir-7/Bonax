import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'
import { NavLink } from 'react-router-dom'

const SignInSection2 = () => {
  const { language } = useLanguage()
  
  return (
    <section className="sign-up-section ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 pe-0">
            <div className="sign-up-img bg-2"></div>
          </div>
          <div className="col-lg-6 col-md-6 ps-0">
            <div className="sign-up-form">
              <h2>{translate(language, 'signIn.welcomeBack')}</h2>
              <p>{translate(language, 'signIn.fillEmailPassword')}</p>
              <form className="form-wrap">
                <div className="form-floating form-group">
                  <input type="email" className="form-control" id="emailAddress" placeholder={translate(language, 'signIn.yourEmail')} value="" required="" />
                  <label htmlFor="emailAddress" className="form-label">{translate(language, 'signIn.yourEmail')}</label>
                </div>
                <div className="form-floating form-group">
                  <input type="password" className="form-control" id="password-field1" placeholder={translate(language, 'signIn.yourPassword')} value="" required="" />
                  <label htmlFor="password-field1" className="form-label">{translate(language, 'signIn.yourPassword')}</label>
                  <span toggle="#password-field1" className="icofont-eye-alt field-icon toggle-password"></span>
                </div>
                <div className="submit-btn">
                  <button type="submit" className="main-btn">
                    <span className="btn-style">
                      {language === 'ar' ? (
                        <>
                          <i className="icofont-arrow-left" />
                          {translate(language, 'signIn.signIn')}
                        </>
                      ) : (
                        <>
                          {translate(language, 'signIn.signIn')}
                          <i className="icofont-arrow-right" />
                        </>
                      )}
                    </span>
                  </button>
                </div>
                <p className="already">
                  <a href="#">{translate(language, 'signIn.forgotPassword')} <br /> </a>
                  {translate(language, 'signIn.dontHaveAccount')} <NavLink to="/sign-up">{translate(language, 'signIn.signUp')}</NavLink>
                </p>
                <span className="or">{translate(language, 'signIn.or')}</span>
                <ul className="footer-social-link">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank" className="hover-style">
                      <span className="inner-border">
                        <i className="icofont-facebook"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank" className="hover-style">
                      <span className="inner-border">
                        <i className="icofont-twitter"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank" className="hover-style">
                      <span className="inner-border">
                        <i className="icofont-linkedin"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank" className="hover-style">
                      <span className="inner-border">
                        <i className="icofont-instagram"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignInSection2
