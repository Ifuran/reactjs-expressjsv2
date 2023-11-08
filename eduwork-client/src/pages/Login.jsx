import "./pages.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="row vh-100">
        <div className="wrapper-cover col-6"></div>
        <div className="wrapper-login col-6">
          <h1 className="login-title text-center pt-5 mt-5 mb-3">Sign In</h1>
          <form className="w-50 mx-auto">
            <div className="input-group mb-3">
              <span className="input-group-text login-icon">
                <i className="bi bi-envelope-at"></i>
              </span>
              <input
                type="email"
                className="form-control login-input border-0"
                placeholder="Email"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text login-icon">
                <i className="bi bi-key"></i>
              </span>
              <input
                type="password"
                className="form-control login-input border-0"
                placeholder="Password"
              />
            </div>
            <div className="text-end mb-3">
              <small className="alternative-action">
                <Link to="/foreget-password" className="forget-pass-link">
                  Lupa Password?
                </Link>
              </small>
            </div>
            <button type="submit" className="login-btn btn w-100">
              Sign In
            </button>
            <div className="text-center mt-2">
              <small className="alternative-action">
                Belum punya akun?{" "}
                <Link to="/register" className="sign-in-link">
                  Sign In
                </Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
