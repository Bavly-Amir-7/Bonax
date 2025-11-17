import { NavLink } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../i18n/translations'
import { useEffect, useState } from 'react'

const Header = () => {
  const { language, setLanguage } = useLanguage()
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // نخلي اتجاه الصفحة RTL مع العربي و LTR مع الإنجليزي
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  const changeLang = (lang) => {
    setLanguage(lang)
  }

  return (
    <header className="header-section fixed-top">
      <nav
        className={`navbar navbar-expand-lg navbar-light style-two${
          isSticky ? ' is-sticky' : ''
        } ${language === 'ar' ? 'rtl-nav' : ''}`}
      >
        <div className="container">
          {/* Logo */}
          <NavLink className="navbar-brand" to="/">
            <img src="/assets/images/white-logo.png" alt="Logo" />
          </NavLink>

          {/* Right (cart + contact + language) للموبايل و الديسكتوب زي التيمبلت */}
          <div className="for-mobile-options">
            <div className="menu-right-options style-color d-flex align-items-center gap-3">
              <NavLink to="/cart" className="cart-option">
                <i className="icofont-cart" />
                <span>3</span>
              </NavLink>

              <NavLink to="/contact" className="main-btn">
                <span>
                  {translate(language, 'nav.contactNow')}
                  <i className="icofont-arrow-right" />
                </span>
              </NavLink>

              <div className="d-flex gap-2">
                <button
                  type="button"
                  className={`btn btn-sm ${
                    language === 'en' ? 'btn-light' : 'btn-outline-light'
                  }`}
                  onClick={() => changeLang('en')}
                >
                  EN
                </button>
                <button
                  type="button"
                  className={`btn btn-sm ${
                    language === 'ar' ? 'btn-light' : 'btn-outline-light'
                  }`}
                  onClick={() => changeLang('ar')}
                >
                  AR
                </button>
              </div>
            </div>
          </div>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainMenu"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Main Menu */}
          <div className="collapse navbar-collapse" id="mainMenu">
            <ul className="navbar-nav m-auto style-two">
              {/* Home */}
              <li className="nav-item menu-item-has-children">
                <NavLink to="/home-2" className="nav-link dropdown-toggles">
                  {translate(language, 'nav.home')}
                </NavLink>

                <ul className="sub-menu">
                  <li className="nav-item">
                    <NavLink to="/home-1" className="nav-link">
                      {language === 'ar' ? 'الرئيسية 1' : 'Home Page One'}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/home-2" className="nav-link">
                      {language === 'ar' ? 'الرئيسية 2' : 'Home Page Two'}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/home-3" className="nav-link">
                      {language === 'ar' ? 'الرئيسية 3' : 'Home Page Three'}
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* About */}
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  {translate(language, 'nav.about')}
                </NavLink>
              </li>

              {/* Company */}
              <li className="nav-item">
                <a href="#" className="nav-link dropdown-toggles">
                  {translate(language, 'nav.company')}
                </a>
                <ul className="sub-menu">
                  <li className="nav-item">
                    <NavLink to="/about" className="nav-link">
                      {translate(language, 'nav.about')}
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link dropdown-toggles">
                      {language === 'ar' ? 'المشروعات' : 'Projects'}
                    </a>
                    <ul className="sub-menu-sub">
                      <li className="nav-item">
                        <NavLink to="/projects" className="nav-link">
                          {language === 'ar'
                            ? 'صفحة المشروعات'
                            : 'Projects Page'}
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/project-details" className="nav-link">
                          {language === 'ar'
                            ? 'تفاصيل المشروع'
                            : 'Project Details Page'}
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              {/* Services */}
              <li className="nav-item">
                <a href="#" className="nav-link dropdown-toggles">
                  {translate(language, 'nav.services')}
                </a>
                <ul className="sub-menu">
                  <li className="nav-item">
                    <NavLink to="/services" className="nav-link">
                      {language === 'ar'
                        ? 'صفحة الخدمات'
                        : 'Services Page'}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/services-details" className="nav-link">
                      {language === 'ar'
                        ? 'تفاصيل الخدمة'
                        : 'Services Details Page'}
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* Pages */}
              <li className="nav-item">
                <a href="#" className="nav-link dropdown-toggles">
                  {translate(language, 'nav.pages')}
                </a>
                <ul className="sub-menu">
                  {/* About */}
                  <li className="nav-item">
                    <NavLink to="/about" className="nav-link">
                      {translate(language, 'nav.about')}
                    </NavLink>
                  </li>

                  {/* Team */}
                  <li className="nav-item">
                    <a href="#" className="nav-link dropdown-toggles">
                      {language === 'ar' ? 'الفريق' : 'Team'}
                    </a>
                    <ul className="sub-menu-sub">
                      <li className="nav-item">
                        <NavLink to="/team" className="nav-link">
                          {language === 'ar'
                            ? 'صفحة الفريق'
                            : 'Team Page'}
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/team-details" className="nav-link">
                          {language === 'ar'
                            ? 'تفاصيل عضو الفريق'
                            : 'Team Details Page'}
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  {/* Shop */}
                  <li className="nav-item">
                    <a href="#" className="nav-link dropdown-toggles">
                      {language === 'ar' ? 'المتجر' : 'Shop'}
                    </a>
                    <ul className="sub-menu-sub">
                      <li className="nav-item">
                        <NavLink to="/products" className="nav-link">
                          {language === 'ar'
                            ? 'المنتجات'
                            : 'Products Page'}
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/cart" className="nav-link">
                          {language === 'ar' ? 'سلة الشراء' : 'Cart Page'}
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/checkout" className="nav-link">
                          {language === 'ar' ? 'إتمام الشراء' : 'Checkout Page'}
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/product-details" className="nav-link">
                          {language === 'ar'
                            ? 'تفاصيل المنتج'
                            : 'Product Details Page'}
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/wishlist" className="nav-link">
                          {language === 'ar' ? 'المفضّلة' : 'Wishlist Page'}
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/payment" className="nav-link">
                          {language === 'ar' ? 'الدفع' : 'Payment Page'}
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  {/* Auth */}
                  <li className="nav-item">
                    <a href="#" className="nav-link dropdown-toggles">
                      {language === 'ar' ? 'تسجيل الدخول / التسجيل' : 'Sign In / Sign Up'}
                    </a>
                    <ul className="sub-menu-sub">
                      <li className="nav-item">
                        <NavLink to="/sign-in" className="nav-link">
                          {language === 'ar'
                            ? 'تسجيل الدخول'
                            : 'Sign In Page'}
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/sign-up" className="nav-link">
                          {language === 'ar'
                            ? 'إنشاء حساب'
                            : 'Sign Up Page'}
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  {/* Static pages */}
                  <li className="nav-item">
                    <NavLink to="/faq" className="nav-link">
                      {language === 'ar' ? 'الأسئلة الشائعة' : 'FAQ Page'}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/testimonials" className="nav-link">
                      {language === 'ar' ? 'آراء العملاء' : 'Testimonials Page'}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/terms-conditions" className="nav-link">
                      {language === 'ar'
                        ? 'الشروط والأحكام'
                        : 'Terms Conditions Page'}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/privacy-policy" className="nav-link">
                      {language === 'ar'
                        ? 'سياسة الخصوصية'
                        : 'Privacy Policy Page'}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/coming-soon" className="nav-link">
                      {language === 'ar'
                        ? 'قريباً'
                        : 'Coming Soon Page'}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/404" className="nav-link">
                      {language === 'ar' ? 'صفحة 404' : '404 Page'}
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* Blog */}
              <li className="nav-item">
                <a href="#" className="nav-link dropdown-toggles">
                  {translate(language, 'nav.blog')}
                </a>
                <ul className="sub-menu">
                  <li className="nav-item">
                    <NavLink to="/blog" className="nav-link">
                      {language === 'ar'
                        ? 'مدونة – شبكة'
                        : 'Blog Grid Page'}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/blog-details" className="nav-link">
                      {language === 'ar'
                        ? 'تفاصيل المقال'
                        : 'Blog Details Page'}
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* Contact */}
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  {translate(language, 'nav.contact')}
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Right (cart + contact + language) نسخة الديسكتوب */}
          <div className="menu-right-options style-color d-flex align-items-center gap-3 d-none d-lg-flex">
            <NavLink to="/cart" className="cart-option">
              <i className="icofont-cart" />
              <span>3</span>
            </NavLink>

            <NavLink to="/contact" className="main-btn">
              <span>
                {translate(language, 'nav.contactNow')}
                <i className="icofont-arrow-right" />
              </span>
            </NavLink>

            <div className="d-flex gap-2">
              <button
                type="button"
                className={`btn btn-sm ${
                  language === 'en' ? 'btn-light' : 'btn-outline-light'
                }`}
                onClick={() => changeLang('en')}
              >
                EN
              </button>
              <button
                type="button"
                className={`btn btn-sm ${
                  language === 'ar' ? 'btn-light' : 'btn-outline-light'
                }`}
                onClick={() => changeLang('ar')}
              >
                AR
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
