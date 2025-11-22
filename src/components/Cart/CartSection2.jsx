import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'
import { NavLink } from 'react-router-dom'

const CartSection2 = () => {
  const { language } = useLanguage()
  
  return (
    <section className="shopping-cart-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <form className="shopping-cart">
              <div className="text-center table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="text-start" scope="col">{translate(language, 'cart.product')}</th>
                      <th scope="col">{translate(language, 'cart.price')}</th>
                      <th scope="col">{translate(language, 'cart.quantity')}</th>
                      <th scope="col">{translate(language, 'cart.total')}</th>
                      <th scope="col">{translate(language, 'cart.remove')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4, 5].map((item) => (
                      <tr key={item}>
                        <td className="cart-thumbnail d-flex flex-row align-items-center">
                          <NavLink to="/product-details">
                            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&h=150&fit=crop" alt="Image" />
                          </NavLink>
                          <div className="ms-4">
                            <NavLink to="/product-details">Wheel Bearing Retainer</NavLink>
                            <span>{translate(language, 'products.color')}: Yellow</span>
                            <span>{translate(language, 'products.size')}: 300</span>
                          </div>
                        </td>
                        <td className="cart-price">
                          <span className="amount"><del>$500.00</del></span>
                          <span className="amount">$450.00</span>
                        </td>
                        <td className="cart-quantity">
                          <div className="quantity-input">
                            <div className="minus">
                              <i className="icofont-minus"></i>
                            </div>
                            <input className="form-control box" type="text" placeholder="" aria-label="default input example" value="1" />
                            <div className="plus">
                              <i className="icofont-plus"></i>
                            </div>
                          </div>
                        </td>
                        <td className="cart-total-price">
                          <span className="total-price">$450.00</span>
                        </td>
                        <td className="product-delete">
                          <a href="#" className="delete">
                            <i className="icofont-ui-delete"></i>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </form>
            <form className="coupon-form">
              <div className="row">
                <div className="col-lg-8 col-md-7">
                  <div className="form-floating input-group">
                    <input type="url" className="form-control" placeholder={translate(language, 'cart.enterPromoCode')} id="seo-check" />
                    <label htmlFor="seo-check">{translate(language, 'cart.enterPromoCode')}</label>
                    <button className="main-btn" type="button">
                      <span>
                        {language === 'ar' ? (
                          <>
                            <i className="icofont-arrow-left" />
                            {translate(language, 'cart.apply')}
                          </>
                        ) : (
                          <>
                            {translate(language, 'cart.apply')}
                            <i className="icofont-arrow-right" />
                          </>
                        )}
                      </span>
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 text-end">
                  <button className="main-btn update">
                    <span>
                      {language === 'ar' ? (
                        <>
                          <i className="icofont-arrow-left" />
                          {translate(language, 'cart.updateCart')}
                        </>
                      ) : (
                        <>
                          {translate(language, 'cart.updateCart')}
                          <i className="icofont-arrow-right" />
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <div className="your-order">
              <h3>{translate(language, 'cart.orderSummary')}</h3>
              <ul>
                <li>{translate(language, 'cart.subtotal')} <span>$1390.00</span></li>
                <li>{translate(language, 'cart.discount')} (10%) <span className="discount">-$139.00</span></li>
                <li>{translate(language, 'cart.shipping')} <span>$10.00</span></li>
                <li>{translate(language, 'cart.total')} <span>$196.00</span></li>
                <li className="total-amount">{translate(language, 'cart.grandTotal')} <span>1241</span></li>
              </ul>
              <NavLink to="/checkout" className="main-btn active">
                <span>
                  {language === 'ar' ? (
                    <>
                      <i className="icofont-arrow-left" />
                      {translate(language, 'cart.proceedToCheckout')}
                    </>
                  ) : (
                    <>
                      {translate(language, 'cart.proceedToCheckout')}
                      <i className="icofont-arrow-right" />
                    </>
                  )}
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartSection2
