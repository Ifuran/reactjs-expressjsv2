import React from "react";
import Navigation from "../component/Navigation";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";

const PageNotFound = () => {
  return (
    <div className="bg-dark">
      <Navigation />
      <div className="container-fluid py-5">
        <div className="m-auto text-center py-5">
          <h1 className="text-danger pt-5 pb-2">Page Not Found</h1>
          <Link to="/" className=" py-2 text-white fs-6">
            Go back to Home Page
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageNotFound;
