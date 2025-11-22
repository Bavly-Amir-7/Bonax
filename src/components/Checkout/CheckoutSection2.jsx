import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'
import { NavLink } from 'react-router-dom'

const CheckoutSection2 = () => {
  const { language } = useLanguage()
  
  return (
    <section className="checkout-area bg-color-fefefe ptb-100">
      <div className="container">
        <div className="checkout-wrap">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="alert alert-blue alert-icon" role="alert">
                <i className="icofont-info-circle"></i> {translate(language, 'checkout.alreadyHaveAccount')} <a href="#" data-bs-target="#modal-signin" data-bs-toggle="modal" data-bs-dismiss="modal" className="alert-link hover">{translate(language, 'checkout.signIn')}</a> {translate(language, 'checkout.fasterCheckout')}
              </div>
              <form>
                <div className="billing-address">
                  <h3 className="title">{translate(language, 'checkout.billingAddress')}</h3>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="firstName" placeholder={translate(language, 'checkout.firstName')} value="" required="" />
                        <label htmlFor="firstName" className="form-label">{translate(language, 'checkout.firstName')}</label>
                        <div className="invalid-feedback"> Valid first name is required.</div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="lastName" placeholder={translate(language, 'checkout.lastName')} value="" required="" />
                        <label htmlFor="lastName" className="form-label">{translate(language, 'checkout.lastName')}</label>
                        <div className="invalid-feedback"> Valid last name is required. </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-floating">
                        <input type="email" className="form-control" id="email" placeholder={translate(language, 'checkout.email')} required="" />
                        <label htmlFor="email" className="form-label">{translate(language, 'checkout.email')}</label>
                        <div className="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="address" placeholder={translate(language, 'checkout.address')} required="" />
                        <label htmlFor="address" className="form-label">{translate(language, 'checkout.address')}</label>
                        <div className="invalid-feedback"> Please enter your shipping address. </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-selectr mb-20">
                        <select className="form-select form-control">
                          <option value="1">{translate(language, 'checkout.country')}</option>
                          <option value="2">United Kingdom</option>
                          <option value="3">China</option>
                          <option value="4">Arab</option>
                          <option value="5">Germany</option>
                          <option value="6">France</option>
                          <option value="7">Japan</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-selectr mb-20">
                        <select className="form-select form-control">
                          <option value="1">{translate(language, 'checkout.state')}</option>
                          <option value="2">California</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="zip" placeholder={translate(language, 'checkout.zipCode')} required="" />
                        <label htmlFor="zip" className="form-label">{translate(language, 'checkout.zipCode')}</label>
                        <div className="invalid-feedback"> Zip code required. </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="city" placeholder={translate(language, 'checkout.city')} required="" />
                        <label htmlFor="city" className="form-label">{translate(language, 'checkout.city')}</label>
                        <div className="invalid-feedback">City required</div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-floating">
                        <textarea name="summary" id="summary" cols="30" rows="7" className="form-control textarea" placeholder={translate(language, 'checkout.orderSummary')}></textarea>
                        <label htmlFor="summary" className="form-label">{translate(language, 'checkout.orderSummary')}</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="same-address" />
                        <label className="form-check-label" htmlFor="same-address">{translate(language, 'checkout.shippingAddressSame')}</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-check mb-0">
                        <input type="checkbox" className="form-check-input" id="save-info" />
                        <label className="form-check-label" htmlFor="save-info">{translate(language, 'checkout.saveInfo')}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <form className="pt-70">
                <div className="billing-address">
                  <h3 className="title">{translate(language, 'checkout.shippingAddress')}</h3>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="firstNames" placeholder={translate(language, 'checkout.firstName')} value="" required="" />
                        <label htmlFor="firstNames" className="form-label">{translate(language, 'checkout.firstName')}</label>
                        <div className="invalid-feedback"> Valid first name is required.</div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="lastsName" placeholder={translate(language, 'checkout.lastName')} value="" required="" />
                        <label htmlFor="lastsName" className="form-label">{translate(language, 'checkout.lastName')}</label>
                        <div className="invalid-feedback"> Valid first name is required. </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-floating">
                        <input type="email" className="form-control" id="emailss" placeholder={translate(language, 'checkout.email')} required="" />
                        <label htmlFor="emailss" className="form-label">{translate(language, 'checkout.email')}</label>
                        <div className="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="addresss" placeholder={translate(language, 'checkout.address')} required="" />
                        <label htmlFor="addresss" className="form-label">{translate(language, 'checkout.address')}</label>
                        <div className="invalid-feedback"> Please enter your shipping address. </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-selectr mb-20">
                        <select className="form-select form-control">
                          <option value="1">{translate(language, 'checkout.country')}</option>
                          <option value="2">United Kingdom</option>
                          <option value="3">China</option>
                          <option value="4">Arab</option>
                          <option value="5">Germany</option>
                          <option value="6">France</option>
                          <option value="7">Japan</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-selectr mb-20">
                        <select className="form-select form-control">
                          <option value="1">{translate(language, 'checkout.state')}</option>
                          <option value="2">California</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="zips" placeholder={translate(language, 'checkout.zipCode')} required="" />
                        <label htmlFor="zips" className="form-label">{translate(language, 'checkout.zipCode')}</label>
                        <div className="invalid-feedback"> Zip code required. </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="zipss" placeholder={translate(language, 'checkout.city')} required="" />
                        <label htmlFor="zipss" className="form-label">{translate(language, 'checkout.city')}</label>
                        <div className="invalid-feedback">City required</div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-floating">
                        <textarea name="summary" id="summarys" cols="30" rows="7" className="form-control textarea" placeholder={translate(language, 'checkout.orderSummary')}></textarea>
                        <label htmlFor="summarys" className="form-label">{translate(language, 'checkout.orderSummary')}</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="same-addressss" />
                        <label className="form-check-label" htmlFor="same-addressss">{translate(language, 'checkout.shippingAddressSame')}</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-check mb-0">
                        <input type="checkbox" className="form-check-input" id="save-infos" />
                        <label className="form-check-label" htmlFor="save-infos">{translate(language, 'checkout.saveInfo')}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="shopping-carts mb-7">
                <h3>{translate(language, 'checkout.orderSummary')}</h3>
                {[1, 2, 3].map((item) => (
                  <div key={item} className="shopping-cart-item d-flex justify-content-between">
                    <div className="d-flex flex-row d-flex align-items-center">
                      <NavLink to="/product-details">
                        <img className="product-img" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=80&h=80&fit=crop" alt="Image" />
                      </NavLink>
                      <div className="w-100 ms-4">
                        <h3 className="post-title mb-1">
                          <NavLink to="/product-details" className="link-dark">Wheel Bearing Retainer</NavLink>
                        </h3>
                        <div className="small">{translate(language, 'products.color')}: Yellow</div>
                        <div className="small">{translate(language, 'products.size')}: 300</div>
                      </div>
                    </div>
                    <div className="ms-2 d-flex align-items-center">
                      <p className="price fs-sm"><span className="amount">$450.00</span></p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="shipping-option">
                <h3>{translate(language, 'checkout.shipping')}</h3>
                <div className="form-check">
                  <input id="standart" name="shippingMethod" type="radio" className="form-check-input" required="" />
                  <label className="form-check-label" htmlFor="standart">{translate(language, 'checkout.freeStandard')}</label>
                  <small className="text-muted d-block">{translate(language, 'checkout.shipmentDays')}</small>
                </div>
                <div className="form-check">
                  <input id="express" name="shippingMethod" type="radio" className="form-check-input" checked="" required="" />
                  <label className="form-check-label" htmlFor="express">{translate(language, 'checkout.expressDelivery')}</label>
                  <small className="text-muted d-block">{translate(language, 'checkout.expressDays')}</small>
                </div>
              </div>
              <div className="your-order">
                <h3>{translate(language, 'checkout.orderSummary')}</h3>
                <ul>
                  <li>{translate(language, 'cart.subtotal')} <span>$1390.00</span></li>
                  <li>{translate(language, 'cart.discount')} (10%) <span className="discount">-$139.00</span></li>
                  <li>{translate(language, 'cart.shipping')} <span>$10.00</span></li>
                  <li>{translate(language, 'cart.total')} <span>$196.00</span></li>
                  <li className="total-amount">{translate(language, 'cart.grandTotal')} <span>1241</span></li>
                </ul>
                <NavLink to="/checkout" className="main-btn">
                  <span>
                    {language === 'ar' ? (
                      <>
                        <i className="icofont-arrow-left" />
                        {translate(language, 'checkout.placeOrder')}
                      </>
                    ) : (
                      <>
                        {translate(language, 'checkout.placeOrder')}
                        <i className="icofont-arrow-right" />
                      </>
                    )}
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CheckoutSection2
