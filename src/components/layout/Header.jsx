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

  // Handle mobile dropdown menus
  useEffect(() => {
    const handleDropdownClick = (e) => {
      if (window.innerWidth <= 991) {
        const target = e.target.closest('.dropdown-toggles')
        if (target) {
          e.preventDefault()
          const parent = target.closest('.nav-item')
          const subMenu = parent?.querySelector('.sub-menu')
          
          if (subMenu) {
            const isOpen = subMenu.classList.contains('show')
            
            // Close all other dropdowns
            document.querySelectorAll('.sub-menu.show').forEach(menu => {
              if (menu !== subMenu) {
                menu.classList.remove('show')
                menu.closest('.nav-item')?.classList.remove('show')
              }
            })
            
            // Toggle current dropdown
            if (isOpen) {
              subMenu.classList.remove('show')
              parent?.classList.remove('show')
            } else {
              subMenu.classList.add('show')
              parent?.classList.add('show')
            }
          }
        }
      }
    }

    document.addEventListener('click', handleDropdownClick)
    return () => {
      document.removeEventListener('click', handleDropdownClick)
    }
  }, [])

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
            <img src="/assets/images/logo/logo1.png" alt="Logo" />
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
                  {language === 'ar' ? (
                    <>
                      <i className="icofont-arrow-left" />
                      {translate(language, 'nav.contactNow')}
                    </>
                  ) : (
                    <>
                      {translate(language, 'nav.contactNow')}
                      <i className="icofont-arrow-right" />
                    </>
                  )}
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
                      {translate(language, 'nav.projects')}
                    </a>
                    <ul className="sub-menu-sub">
                      <li className="nav-item">
                        <NavLink to="/projects" className="nav-link">
                          {translate(language, 'pages.projectsPage')}
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/project-details" className="nav-link">
                          {translate(language, 'pages.projectDetailsPage')}
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
                      {translate(language, 'pages.servicesPage')}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/services-details" className="nav-link">
                      {translate(language, 'pages.servicesDetailsPage')}
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
                      {translate(language, 'nav.team')}
                    </a>
                    <ul className="sub-menu-sub">
                      <li className="nav-item">
                        <NavLink to="/team" className="nav-link">
                          {translate(language, 'pages.teamPage')}
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/team-details" className="nav-link">
                          {translate(language, 'pages.teamDetailsPage')}
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
                          {translate(language, 'pages.productsPage')}
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/cart" className="nav-link">
                          {translate(language, 'pages.cartPage')}
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/checkout" className="nav-link">
                          {translate(language, 'pages.checkoutPage')}
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/product-details" className="nav-link">
                          {translate(language, 'pages.productDetailsPage')}
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/wishlist" className="nav-link">
                          {translate(language, 'pages.wishlistPage')}
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/payment" className="nav-link">
                          {translate(language, 'pages.paymentPage')}
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
                          {translate(language, 'pages.signInPage')}
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/sign-up" className="nav-link">
                          {translate(language, 'pages.signUpPage')}
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
                      {translate(language, 'pages.testimonialsPage')}
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
                      {translate(language, 'pages.privacyPolicyPage')}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/coming-soon" className="nav-link">
                      {translate(language, 'pages.comingSoon')}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/404" className="nav-link">
                      {translate(language, 'pages.notFound')}
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
                {language === 'ar' ? (
                  <>
                    <i className="icofont-arrow-left" />
                    {translate(language, 'nav.contactNow')}
                  </>
                ) : (
                  <>
                    {translate(language, 'nav.contactNow')}
                    <i className="icofont-arrow-right" />
                  </>
                )}
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
