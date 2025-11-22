import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'
import { NavLink } from 'react-router-dom'

const WishlistSection2 = () => {
  const { language } = useLanguage()
  
  return (
    <section className="shopping-cart-area ptb-100">
      <div className="container">
        <div className="wishlist-wrap">
          <form className="shopping-cart mb-0">
            <div className="text-center table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="text-start" scope="col">{translate(language, 'cart.product')}</th>
                    <th scope="col">{translate(language, 'cart.price')}</th>
                    <th scope="col">{translate(language, 'cart.quantity')}</th>
                    <th scope="col">{translate(language, 'wishlist.addToWishlist')}</th>
                    <th scope="col">{translate(language, 'cart.remove')}</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <tr key={item}>
                      <td className="cart-thumbnail d-flex flex-row align-items-center">
                        <NavLink to="/product-details">
                          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop" alt="Image" />
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
                      <td className="cart-total-price">
                        <span className="total-price">3</span>
                      </td>
                      <td className="cart-total-price">
                        <a href="#" className="main-btn">
                          <span>
                            {language === 'ar' ? (
                              <>
                                <i className="icofont-arrow-left" />
                                {translate(language, 'wishlist.addToWishlist')}
                              </>
                            ) : (
                              <>
                                {translate(language, 'wishlist.addToWishlist')}
                                <i className="icofont-arrow-right" />
                              </>
                            )}
                          </span>
                        </a>
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
        </div>
      </div>
    </section>
  )
}

export default WishlistSection2
