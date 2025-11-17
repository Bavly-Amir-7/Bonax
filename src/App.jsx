import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import HomeOne from './pages/HomeOne'
import HomeThree from './pages/HomeThree'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import Services from './pages/Services'
import ServicesDetails from './pages/ServicesDetails'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Wishlist from './pages/Wishlist'
import Payment from './pages/Payment'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import Team from './pages/Team'
import TeamDetails from './pages/TeamDetails'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Faq from './pages/Faq'
import Testimonials from './pages/Testimonials'
import TermsConditions from './pages/TermsConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ComingSoon from './pages/ComingSoon'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <MainLayout>
      <Routes>
        {/* هنا الثلاثة Home */}
        <Route path="/" element={<Home />} />
        <Route path="/home-1" element={<HomeOne />} />
        <Route path="/home-2" element={<Home />} />
        <Route path="/home-3" element={<HomeThree />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services-details" element={<ServicesDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team-details" element={<TeamDetails />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </MainLayout>
  )
}

export default App
