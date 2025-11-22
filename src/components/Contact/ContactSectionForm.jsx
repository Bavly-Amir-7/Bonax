import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'

const ContactSectionForm = () => {
  const { language } = useLanguage()
  
  return (
    <div className="contact-section ptb-100">
      <div className="container">
        <div className="contact-wrap">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-form ptb-100">
                <h2>{translate(language, 'contact.title')}</h2>
                <form className="form-contact">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder={translate(language, 'contact.name')} />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input type="email" className="form-control" placeholder={translate(language, 'contact.email')} />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder={translate(language, 'contact.phone')} />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder={translate(language, 'contact.subject')} />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea cols="30" rows="10" className="form-control" placeholder={translate(language, 'contact.message')}></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="main-btn">
                        <span>
                          {language === 'ar' ? (
                            <>
                              <i className="icofont-arrow-left" />
                              {translate(language, 'contact.sendMessage')}
                            </>
                          ) : (
                            <>
                              {translate(language, 'contact.sendMessage')}
                              <i className="icofont-arrow-right" />
                            </>
                          )}
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1570988.748074958!2d-103.23679093771068!3d39.70605489349627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1649797290078!5m2!1sen!2sbd" title="map" style={{border:0,width:'100%',height:'100%'}} allowFullScreen loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSectionForm
