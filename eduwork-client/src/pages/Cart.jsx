import Breadcrumb from "../component/Breadcrumb";
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";
import "./pages.css";

const Cart = () => {
  return (
    <>
      <Navigation />
      <Breadcrumb />
      <div className="cart">
        <div className="container">
          <div className="row">
            <div className="product-img-wrapper col-4">
              <img
                src="https://sinarutama.com/wp-content/uploads/2019/10/Mie-Ayam-Bakso-copy.png"
                alt="mie-ayam-bakso"
                className="product-img"
              />
            </div>
            <div className="col-8">
              <h2 className="product-title">Mie Ayam</h2>
              <h3 className="product-price">20000</h3>
              <p className="product-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                modi sequi voluptate libero doloribus corporis nemo? Praesentium
                placeat pariatur ut nam tempora ad fugiat voluptatem tempore,
                provident earum quaerat dolor aut modi, nobis natus. Maxime
                dolores commodi deserunt quibusdam similique fugiat vitae quas.
                Laborum sapiente nesciunt quae corrupti officiis magni.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
