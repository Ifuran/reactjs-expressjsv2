import "./component.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="navbar" fixed="top">
      <Container>
        <Navbar.Brand className="navbar-brand">MakanMinumID</Navbar.Brand>
        <div className="navbar-right-menu ms-auto d-lg-none">
          <Link to="/search" className="navbar-link navbar-sm-link mx-3">
            <i className="bi bi-search"></i>
          </Link>
          <Link to="/account" className="navbar-link navbar-sm-link mx-3">
            <i className="bi bi-person-circle"></i>
          </Link>
          <Link to="/cart" className="navbar-link navbar-sm-link mx-3">
            <i className="bi bi-cart"></i>
          </Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav navbar-toggle">
          <Nav className="navbar-middle-menu mx-auto">
            <NavLink to="/" className="navbar-link mx-lg-3 my-2">
              Home
            </NavLink>
            <NavLink to="/products" className="navbar-link mx-lg-3 my-2">
              Products
            </NavLink>
            <NavLink to="/about" className="navbar-link mx-lg-3 my-2">
              About
            </NavLink>
            <NavLink to="/contact" className="navbar-link mx-lg-3 my-2">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <div className="navbar-right-menu me-auto d-none d-lg-block">
          <Link to="/search" className="navbar-link navbar-sm-link mx-3">
            <i className="bi bi-search"></i>
          </Link>
          <Link to="/account" className="navbar-link navbar-sm-link mx-3">
            <i className="bi bi-person-circle"></i>
          </Link>
          <Link to="/cart" className="navbar-link navbar-sm-link mx-3">
            <i className="bi bi-cart"></i>
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
