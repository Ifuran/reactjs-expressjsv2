import "./component.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <h3 className="footer-brand">MakanMinumID</h3>
            <p className="footer-description my-4 me-3">
              Layanan kami menawarkan hidangan lezat dengan menu beragam,
              pelayanan ramah, dan suasana nyaman untuk makan malam yang
              istimewa.
            </p>
            <div className="sosial-media-wrapper pb-3">
              <a href="sosmed.js" className="social-media-link p-2">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="sosmed.js" className="social-media-link p-2">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="sosmed.js" className="social-media-link p-2">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <h5 className="mb-3">Quick Links</h5>
            <li className="list-link">
              <a href="home.js">Home</a>
            </li>
            <li className="list-link">
              <a href="home.js">Products</a>
            </li>
            <li className="list-link">
              <a href="home.js">About</a>
            </li>
            <li className="list-link">
              <a href="home.js">Contact</a>
            </li>
          </div>
          <div className="col-lg-3 col-6">
            <h5 className="mb-3">Custom Area</h5>
            <li className="list-link">
              <a href="home.js">Akun Saya</a>
            </li>
            <li className="list-link">
              <a href="home.js">Tracking</a>
            </li>
            <li className="list-link">
              <a href="home.js">Pemesanan</a>
            </li>
            <li className="list-link">
              <a href="home.js">Keranjang</a>
            </li>
          </div>
        </div>
        <div className="footer-copyright pt-5 pb-3">
          &copy; 2023 MakanMinumID Copyright Permissions
        </div>
      </div>
    </footer>
  );
};

export default Footer;
