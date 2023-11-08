import Navigation from "../component/Navigation";
import Pagination from "../component/Pagination";
import Breadcrumb from "../component/Breadcrumb";
import "./pages.css";
import Footer from "../component/Footer";
import { useDispatch, useSelector } from "react-redux";
import "../component/component.css";
import { useEffect, useState } from "react";
import {
  getAllProducts,
  setSelectedCategory,
  setSelectedTag,
} from "../app/Features/Product/ProductSlice";
import { getAllCategories } from "../app/Features/Category/CategorySlice";
import CardProduct from "../component/CardProduct";
import { getAllTags } from "../app/Features/Tag/TagSlice";

const Product = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);
  const { tags } = useSelector((state) => state.tags);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const selectedCategory = useSelector(
    (state) => state.products.selectedCategory
  );
  const selectedTag = useSelector((state) => state.products.selectedTag);

  useEffect(() => {
    const filterProducts = () => {
      const filtered =
        products.data &&
        products.data.filter((product) => {
          if (selectedCategory === "all") {
            return true;
          } else if (product.category._id !== selectedCategory) {
            return false;
          }

          if (selectedTag.length > 0) {
            const productTags = product.tags._id || [];
            if (!selectedTag.some((tag) => productTags.includes(tag))) {
              return false;
            }
          }
          return true;
        });
      setFilteredProducts(filtered);
    };
    filterProducts();
  }, [selectedCategory, selectedTag, products]);

  const handleCategoryChange = (category) => {
    dispatch(setSelectedCategory(category));
  };

  const handleTagChange = (tags) => {
    dispatch(setSelectedTag(tags));
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllTags());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Breadcrumb />
      <div className="product">
        <div className="container">
          <div className="product-wrapper row">
            <div className="col-lg-3">
              <form className="search-form mx-auto position-relative">
                <input
                  type="text"
                  className="form-control search-input border-0 py-3 px-4"
                  placeholder="Cari Produk"
                />
                <div className="search-btn-wrapper position-absolute top-0 end-0">
                  <button
                    type="submit"
                    className="input-group-text search-btn btn mt-2 me-2"
                  >
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </form>
              <div className="product-filter my-5">
                <div className="product-filter-wrapper m-4">
                  <h3 className="filter-title fw-bold my-3">Categories</h3>
                  <div className="filter-category mb-3">
                    <input
                      className="form-check-input me-3"
                      type="radio"
                      name="categoryName"
                      id="all"
                      value=""
                      checked={"all" === selectedCategory}
                      onChange={() => handleCategoryChange("all")}
                    />
                    <label
                      className="form-check-label text-capitalize"
                      htmlFor="all"
                    >
                      Semua
                    </label>
                  </div>
                  {categories &&
                    categories.map((category) => (
                      <div className="filter-category mb-3" key={category._id}>
                        <input
                          className="form-check-input me-3"
                          type="radio"
                          name="categoryName"
                          id={category._id}
                          value={category._id}
                          checked={category._id === selectedCategory}
                          onChange={() => handleCategoryChange(category._id)}
                        />
                        <label
                          className="form-check-label text-capitalize"
                          htmlFor={category._id}
                        >
                          {category.name}
                        </label>
                      </div>
                    ))}
                  <h3 className="filter-title fw-bold my-3 pt-3">Tags</h3>
                  {tags &&
                    tags.map((tags) => (
                      <div className="filter-category mb-3" key={tags._id}>
                        <input
                          className="form-check-input me-3"
                          type="checkbox"
                          id={tags._id}
                          value={tags._id}
                          checked={selectedTag.includes(tags._id)}
                          onChange={() => handleTagChange(tags._id)}
                        />
                        <label
                          className="form-check-label  text-capitalize"
                          htmlFor={tags._id}
                        >
                          {tags.name}
                        </label>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="sort-wrapper col-lg-3 ms-auto position-relative">
                {/* <select
                  className="form-select sort-input p-3"
                  aria-label="Default select example"
                >
                  <option selected>Urutkan</option>
                  <option value="1">Terlaris</option>
                  <option value="2">Harga Terendah</option>
                  <option value="3">Harga Tertinggi</option>
                </select>
                <div className="sort-btn-wrapper position-absolute top-0 end-0">
                  <button
                    type="submit"
                    className="input-group-text sort-btn btn mt-2 me-2"
                    disabled
                  >
                    <i className="bi bi-filter"></i>
                  </button>
                </div> */}
              </div>

              <div className="row">
                {filteredProducts &&
                  filteredProducts.map((p) => (
                    <div className="col-lg-3" key={p._id}>
                      <CardProduct product={p} />
                    </div>
                  ))}
              </div>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Product;
