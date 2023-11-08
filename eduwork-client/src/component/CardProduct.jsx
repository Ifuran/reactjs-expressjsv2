import { Link } from "react-router-dom";
import "./component.css";

const CardProduct = ({ product }) => {
  return (
    <div className="card co-md-12 col mt-5 text-center">
      <img
        src={`http://localhost:3000/gambar/${product.image_url}`}
        height={150}
        alt={product.name}
      />
      <div className="card-body">
        <h5 className="card-title text-light">{product.name}</h5>
        <p>Harga: Rp {product.price}</p>
        <div className="card-action d-flex gap-2">
          <Link
            to={`../product/${product._id}`}
            className="btn btn-primary flex-grow-1"
          >
            Detail
          </Link>
          <Link to={`../cart/${product._id}`} className="btn btn-primary">
            <i className="bi bi-cart"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CardProduct;
