import "./pages.css";
import React from "react";
import Navigation from "./../component/Navigation";
import Footer from "./../component/Footer";

const Home = () => {
  return (
    <>
      <Navigation />
      <div className="home pt-5">
        <div className="container mx-auto">
          <div className="home-wrapper row py-5 my-5">
            <div className="col-lg-5 col-md-12 text-center">
              <img
                src="https://sinarutama.com/wp-content/uploads/2019/10/Mie-Ayam-Bakso-copy.png"
                alt="mie-ayam-bakso"
                className="hero-img"
              />
            </div>
            <div className="col-lg-7 col-md-12 pt-5 mt-5">
              <h1 className="hero-title">Mie Ayam Bakso</h1>
              <p className="hero-description w-75">
                Rasakan <strong>lezatnya</strong> semangkuk mie ayam bakso pedas
                yang buat kamu ketagihan.
              </p>
              <a href="#order" className="btn order-btn mt-3">
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="home-services row pt-5">
            <div className="col-lg-3 col-md-6">
              <div className="row mx-auto">
                <div className="col-3">
                  <i className="bi bi-truck services-icon"></i>
                </div>
                <div className="col-7">
                  <h3 className="fs-6 fw-bold">Free Shipping</h3>
                  <p>Free shipping on all ID orders</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="row mx-auto">
                <div className="col-3">
                  <i className="bi bi-cash services-icon"></i>
                </div>
                <div className="col-7">
                  <h3 className="fs-6 fw-bold">100% Moneyback</h3>
                  <p>You have 7 days to return</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="row mx-auto">
                <div className="col-3">
                  <i className="bi bi-file-lock services-icon"></i>
                </div>
                <div className="col-7">
                  <h3 className="fs-6 fw-bold">100% Payment Secure</h3>
                  <p>Your payment are safe</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="row mx-auto">
                <div className="col-3">
                  <i className="bi bi-person-square services-icon"></i>
                </div>
                <div className="col-7">
                  <h3 className="fs-6 fw-bold">Support 24/7</h3>
                  <p>Contact us 24 hours a day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto pt-3 pb-5">
          <div className="home-category d-flex justify-content-center flex-lg-row flex-column  pt-5">
            <div className="wrapper-category text-center m-3 position-relative">
              <img
                src={process.env.PUBLIC_URL + "/images/mie-ayam-bakso.jpg"}
                alt="kategori-makanan"
                className="category-image category-foods p-3"
              />
              <div className="category-link position-absolute top-50 start-50 translate-middle">
                <p className="category-text">MAKANAN</p>
                <a href="category.js" className="btn detail-btn">
                  Lihat detail
                </a>
              </div>
            </div>
            <div className="wrapper-category text-center m-3 position-relative">
              <img
                src={process.env.PUBLIC_URL + "/images/kopi-itam.jpg"}
                alt="kategori-minuman"
                className="category-image category-drinks p-3"
              />
              <div className="category-link position-absolute top-50 start-50 translate-middle">
                <p className="category-text">MINUMAN</p>
                <a href="category.js" className="btn detail-btn">
                  Lihat detail
                </a>
              </div>
            </div>
            <div className="wrapper-category text-center m-3 position-relative">
              <img
                src={process.env.PUBLIC_URL + "/images/donat.jpg"}
                alt="kategori-camilan"
                className="category-image category-snacks p-3"
              />
              <div className="category-link position-absolute top-50 start-50 translate-middle">
                <p className="category-text">CAMILAN</p>
                <a href="category.js" className="btn detail-btn">
                  Lihat detail
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="subscribe-wrapper py-3 mt-3">
          <h2 className="subscribe-title text-center my-5">
            Jangan Ketinggalan Informasi Kami
          </h2>
          <form className="subscribe-form mx-auto pb-5">
            <div className="input-group subscribe-element mb-3">
              <input
                type="email"
                className="form-control subscribe-input border-0 py-3 px-4"
                placeholder="Email"
              />
              <span className="input-group-text subscribe-btn btn py-3 px-4">
                KIRIM
              </span>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
