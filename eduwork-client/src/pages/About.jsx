import Breadcrumb from "../component/Breadcrumb";
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";
import "./pages.css";

const About = () => {
  return (
    <>
      <Navigation />
      <Breadcrumb />
      <div className="cart">
        <div className="container">
          <div className="row">
            <div className="product-img-wrapper col-4">
              <img
                src="https://i.pinimg.com/originals/b8/02/13/b802139775699e75c84e7f95f2e7a2a6.jpg"
                alt="what-about-me"
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

export default About;
