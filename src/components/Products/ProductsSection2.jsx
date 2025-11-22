import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'
import { NavLink } from 'react-router-dom'

const ProductsSection2 = () => {
  const { language } = useLanguage()
  
  return (
    <section className="products-section ptb-100">
      <div className="container">
        <div className="product-result">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-4">
              <p>{translate(language, 'products.showingResults')} <span>09</span> {translate(language, 'products.results')}</p>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="row">
                <div className="col-lg-6">
                  <form>
                    <div className="form-floating">
                      <input type="text" className="form-control" id="searchHere" placeholder={translate(language, 'products.searchHere')} />
                      <label htmlFor="searchHere" className="form-label">{translate(language, 'products.searchHere')}</label>
                    </div>
                  </form>
                </div>
                <div className="col-lg-6">
                  <select className="form-select form-control" aria-label="Default select example">
                    <option selected="">{translate(language, 'products.defaultSorting')}</option>
                    <option value="1">Bp Machine</option>
                    <option value="2">Hand Sanitizer</option>
                    <option value="3">Medicine</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <div key={item} className="col-lg-4 col-sm-6">
              <div className="main-product-item">
                <div className="product-img">
                  <NavLink to="/product-details">
                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop" alt="Image" />
                  </NavLink>
                  <ul>
                    <li>
                      <NavLink to="/wishlist">
                        <i className="icofont-heart-alt"></i>
                      </NavLink>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-eye-alt"></i>
                      </a>
                    </li>
                  </ul>
                  <NavLink to="/cart" className="main-btn">
                    <span className="btn-style">
                      {language === 'ar' ? (
                        <>
                          <i className="icofont-arrow-left" />
                          {translate(language, 'products.addToCart')}
                        </>
                      ) : (
                        <>
                          {translate(language, 'products.addToCart')}
                          <i className="icofont-arrow-right" />
                        </>
                      )}
                    </span>
                  </NavLink>
                </div>
                <div className="main-product-content d-flex">
                  <div>
                    <span className="tag">BEARING</span>
                    <h3>
                      <NavLink to="/product-details">
                        Wheel Bearing Retainer
                      </NavLink>
                    </h3>
                    <span className="price"><del>500.00</del> $450.00</span>
                  </div>
                  <ul className="ms-auto">
                    <li><i className="icofont-star"></i></li>
                    <li><i className="icofont-star"></i></li>
                    <li><i className="icofont-star"></i></li>
                    <li><i className="icofont-star"></i></li>
                    <li><i className="icofont-star"></i></li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link">
                <i className={language === 'ar' ? 'icofont-simple-right' : 'icofont-simple-left'}></i>
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link" aria-current="page">1</a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link active">2</a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">3</a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">4</a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                <i className={language === 'ar' ? 'icofont-simple-left' : 'icofont-simple-right'}></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default ProductsSection2
