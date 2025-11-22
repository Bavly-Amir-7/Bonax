import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'
import { NavLink } from 'react-router-dom'

const SignUpSection2 = () => {
  const { language } = useLanguage()
  
  return (
    <section className="sign-up-section ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 pe-0">
            <div className="sign-up-img"></div>
          </div>
          <div className="col-lg-6 col-md-6 ps-0">
            <div className="sign-up-form">
              <h2>{translate(language, 'signUp.signUpToBonax')}</h2>
              <p>{translate(language, 'signUp.registrationTakesLess')}</p>
              <form className="form-wrap">
                <div className="form-floating form-group">
                  <input type="text" className="form-control" id="youName" placeholder={translate(language, 'signUp.yourName')} value="" required="" />
                  <label htmlFor="youName" className="form-label">{translate(language, 'signUp.yourName')}</label>
                </div>
                <div className="form-floating form-group">
                  <input type="email" className="form-control" id="emailAddress" placeholder={translate(language, 'signUp.yourEmail')} value="" required="" />
                  <label htmlFor="emailAddress" className="form-label">{translate(language, 'signUp.yourEmail')}</label>
                </div>
                <div className="form-floating form-group">
                  <input type="password" className="form-control" id="password-field1" placeholder={translate(language, 'signUp.yourPassword')} value="" required="" />
                  <label htmlFor="password-field1" className="form-label">{translate(language, 'signUp.yourPassword')}</label>
                  <span toggle="#password-field1" className="icofont-eye-alt field-icon toggle-password"></span>
                </div>
                <div className="form-floating form-group">
                  <input type="password" className="form-control" id="password-field" placeholder={translate(language, 'signUp.yourConfirmPassword')} value="" required="" />
                  <label htmlFor="password-field" className="form-label">{translate(language, 'signUp.yourConfirmPassword')}</label>
                  <span toggle="#password-field" className="icofont-eye-alt field-icon toggle-password"></span>
                </div>
                <div className="submit-btn">
                  <button type="submit" className="main-btn">
                    <span className="btn-style">
                      {language === 'ar' ? (
                        <>
                          <i className="icofont-arrow-left" />
                          {translate(language, 'signUp.signUp')}
                        </>
                      ) : (
                        <>
                          {translate(language, 'signUp.signUp')}
                          <i className="icofont-arrow-right" />
                        </>
                      )}
                    </span>
                  </button>
                </div>
                <p className="already">{translate(language, 'signUp.alreadyHaveAccount')} <NavLink to="/sign-in">{translate(language, 'signUp.signIn')}</NavLink></p>
                <span className="or">{translate(language, 'signUp.or')}</span>
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

export default SignUpSection2
