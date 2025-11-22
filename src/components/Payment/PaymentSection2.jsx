import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'

const PaymentSection2 = () => {
  const { language } = useLanguage()
  
  return (
    <section className="payment-area bg-color-fefefe ptb-100">
      <div className="container">
        <div className="main-section-title">
          <span className="up-title">{translate(language, 'payment.payments')}</span>
          <h2>{translate(language, 'payment.youCanPayment')}</h2>
        </div>
        <form className="payment-content">
          <div className="row">
            <div className="col-lg-4 col-sm-4">
              <div className="form-check">
                <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required="" />
                <label className="form-check-label" htmlFor="credit">{translate(language, 'payment.creditCard')}</label>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4">
              <div className="form-check">
                <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                <label className="form-check-label" htmlFor="debit">{translate(language, 'payment.debitCard')}</label>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4">
              <div className="form-check">
                <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                <label className="form-check-label" htmlFor="paypal">{translate(language, 'payment.paypal')}</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-floating">
                <input type="text" className="form-control" id="cc-number" placeholder={translate(language, 'payment.creditCardNumber')} required="" />
                <label htmlFor="cc-number" className="form-label">{translate(language, 'payment.creditCardNumber')}</label>
                <div className="invalid-feedback"> Credit card number is required </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input type="text" className="form-control" id="cc-name" placeholder={translate(language, 'payment.nameOnCard')} required="" />
                <label htmlFor="cc-name" className="form-label">{translate(language, 'payment.nameOnCard')}</label>
                <div className="invalid-feedback"> Name on card is required </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-floating">
                <input type="text" className="form-control" id="cc-expiration" placeholder={translate(language, 'payment.expiration')} required="" />
                <label htmlFor="cc-expiration" className="form-label">{translate(language, 'payment.expiration')}</label>
                <div className="invalid-feedback"> Expiration date required </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-floating">
                <input type="text" className="form-control" id="cc-cvv" placeholder={translate(language, 'payment.cvv')} required="" />
                <label htmlFor="cc-cvv" className="form-label">{translate(language, 'payment.cvv')}</label>
                <div className="invalid-feedback"> Security code required </div>
              </div>
            </div>
            <div className="col-lg-12">
              <a href="#" className="main-btn d-block">
                <span className="btn-style">
                  {language === 'ar' ? (
                    <>
                      <i className="icofont-arrow-left" />
                      {translate(language, 'payment.paymentNow')}
                    </>
                  ) : (
                    <>
                      {translate(language, 'payment.paymentNow')}
                      <i className="icofont-arrow-right" />
                    </>
                  )}
                </span>
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default PaymentSection2
