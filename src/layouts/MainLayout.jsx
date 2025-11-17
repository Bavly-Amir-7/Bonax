import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="page-wrapper">{children}</div>
      <Footer />
    </>
  )
}

export default MainLayout