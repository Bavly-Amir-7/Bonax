const Footer = () => {
  return (
    <footer className="footer-section pt-100">
      <div className="container">
        <div className="row pb-70">
          <div className="col-lg-4 col-md-6">
            <div className="footer-widget">
              <div className="footer-logo">
                <img src="/assets/images/logo.png" alt="Bonax" />
              </div>
              <p>
                Bonax is a professional construction template. You can build any construction business website
                easily using this layout.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="footer-widget pl-50">
              <h3>Useful Links</h3>
              <ul className="footer-links">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/projects">Projects</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="footer-widget">
              <h3>Contact Info</h3>
              <ul className="footer-contact-info">
                <li>123 Construction Street, New York, USA</li>
                <li>
                  <a href="mailto:info@bonax.com">info@bonax.com</a>
                </li>
                <li>
                  <a href="tel:+1123456789">+1 123 456 789</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copy-right-area">
          <p>© 2025 Bonax Construction. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer