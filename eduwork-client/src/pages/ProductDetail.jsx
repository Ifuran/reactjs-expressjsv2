import { useParams } from "react-router-dom";
import Breadcrumb from "../component/Breadcrumb";
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";
import "./pages.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../app/Features/Product/ProductSlice";

const ProductDetail = () => {
  let { productId } = useParams();
  const [product, setProduct] = useState([]);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    let result =
      products.data && products.data.find((p) => p._id === productId);
    setProduct(result);
    if (products.length === 0) {
      dispatch(getAllProducts());
    }
  }, [productId, products, dispatch]);

  return (
    <>
      <Navigation />
      <Breadcrumb />
      <div className="product-detail bg-dark">
        <div className="container">
          {product && (
            <div className="row">
              <div className="product-img-wrapper col-4">
                <img
                  src={`http://localhost:3000/gambar/${product.image_url}`}
                  alt={product.name}
                  className="product-img"
                />
              </div>
              <div className="col-8">
                <h2 className="product-title">{product.name}</h2>
                <h3 className="product-price">{product.price}</h3>
                <p className="product-description">{product.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
