// ComingSoonSection2.jsx
const ComingSoonSection2 = () => (
  <section className="coming-soon-newsletter pb-120">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="newsletter-box">
            <h3 className="title">Get notified when we launch</h3>
            <form className="newsletter-form">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
                <button type="submit" className="theme-btn">
                  Notify Me
                </button>
              </div>
            </form>
            <p className="text">
              We hate spam as much as you do. We will only send important
              updates about the new website.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ComingSoonSection2;
