// Auto-generated from sign-in.html section 2
const SignInSection2 = () => (
  <section className="sign-up-section ptb-100">
  <div className="container">
  <div className="row">
  <div className="col-lg-6 col-md-6 pe-0">
  <div className="sign-up-img bg-2"></div>
  </div>
  <div className="col-lg-6 col-md-6 ps-0">
  <div className="sign-up-form">
  <h2>Welcome Back Bonax</h2>
  <p>Fill your email and password to sign in.</p>
  <form className="form-wrap">
  <div className="form-floating form-group">
  <input type="email" className="form-control" id="emailAddress" placeholder="Your Email Address" value="" required="" />
  <label htmlFor="emailAddress" className="form-label">Your Email</label>
  </div>
  <div className="form-floating form-group">
  <input type="password" className="form-control" id="password-field1" placeholder="Your Password" value="" required="" />
  <label htmlFor="password-field1" className="form-label">Your Password</label>
  <span toggle="#password-field1" className="icofont-eye-alt field-icon toggle-password"></span>
  </div>
  <div className="submit-btn">
  <button type="submit" className="main-btn">
  <span className="btn-style">Sign In</span>
  </button>
  </div>
  <p className="already"> <a href="#">Forgot Password? <br /> </a> Don't have an account? <a href="sign-up.html">Sign Up</a></p>
  <span className="or">or</span>
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
);

export default SignInSection2;
