// Auto-generated from payment.html section 2
const PaymentSection2 = () => (
  <section className="payment-area bg-color-fefefe ptb-100">
  <div className="container">
  <div className="main-section-title">
  <span className="up-title">Payments</span>
  <h2>You Can Payment</h2>
  </div>
  <form className="payment-content">
  <div className="row">
  <div className="col-lg-4 col-sm-4">
  <div className="form-check">
  <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required="" />
  <label className="form-check-label" htmlFor="credit">Credit card</label>
  </div>
  </div>
  <div className="col-lg-4 col-sm-4">
  <div className="form-check">
  <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
  <label className="form-check-label" htmlFor="debit">Debit card</label>
  </div>
  </div>
  <div className="col-lg-4 col-sm-4">
  <div className="form-check">
  <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
  <label className="form-check-label" htmlFor="paypal">PayPal</label>
  </div>
  </div>
  </div>
  <div className="row">
  <div className="col-lg-12">
  <div className="form-floating">
  <input type="text" className="form-control" id="cc-number" placeholder="Credit card number" required="" />
  <label htmlFor="cc-number" className="form-label">Credit card number</label>
  <div className="invalid-feedback"> Credit card number is required </div>
  </div>
  </div>
  <div className="col-md-6">
  <div className="form-floating">
  <input type="text" className="form-control" id="cc-name" placeholder="Name on card" required="" />
  <label htmlFor="cc-name" className="form-label">Name on card</label>
  <div className="invalid-feedback"> Name on card is required </div>
  </div>
  </div>
  <div className="col-md-3">
  <div className="form-floating">
  <input type="text" className="form-control" id="cc-expiration" placeholder="Expiration" required="" />
  <label htmlFor="cc-expiration" className="form-label">Expiration</label>
  <div className="invalid-feedback"> Expiration date required </div>
  </div>
  </div>
  <div className="col-md-3">
  <div className="form-floating">
  <input type="text" className="form-control" id="cc-cvv" placeholder="CVV" required="" />
  <label htmlFor="cc-cvv" className="form-label">CVV</label>
  <div className="invalid-feedback"> Security code required </div>
  </div>
  </div>
  <div className="col-lg-12">
  <a href="#" className="main-btn d-block">
  <span className="btn-style">Payment Now</span>
  </a>
  </div>
  </div>
  </form>
  </div>
  </section>
);

export default PaymentSection2;
