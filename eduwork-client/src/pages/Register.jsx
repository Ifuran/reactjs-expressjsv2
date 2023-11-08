import "./pages.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="row vh-100">
      <div className="wrapper-cover col-6"></div>
      <div className="wrapper-register col-6">
        <h1 className="register-title text-center pt-5 mt-5 mb-3">Sign Up</h1>
        <form className="w-50 mx-auto">
          <div className="input-group mb-3">
            <span className="input-group-text register-icon">
              <i className="bi bi-person-circle"></i>
            </span>
            <input
              type="text"
              className="form-control register-input border-0"
              placeholder="Nama lengkap"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text register-icon">
              <i className="bi bi-envelope-at"></i>
            </span>
            <input
              type="email"
              className="form-control register-input border-0"
              placeholder="Email"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text register-icon">
              <i className="bi bi-key"></i>
            </span>
            <input
              type="password"
              className="form-control register-input border-0"
              placeholder="Password"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text register-icon">
              <i className="bi bi-key"></i>
            </span>
            <input
              type="password"
              className="form-control register-input border-0"
              placeholder="Konfirmasi Password"
            />
          </div>
          <button type="submit" className="register-btn btn w-100">
            Sign Up
          </button>
          <div className="text-center mt-2">
            <small className="alternative-action">
              Sudah punya akun?{" "}
              <Link to="/login" className="sign-in-link">
                Sign In
              </Link>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
