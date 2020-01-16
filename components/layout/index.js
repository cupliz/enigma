import Header from '../header'
import Footer from '../Footer'

const Layout = props => (
  <div className="container">
    <Header />
    <div className="v-content">
      {props.children}
    </div>
    <Footer />
  </div>
);

export default Layout;