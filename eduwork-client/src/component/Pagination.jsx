import "./component.css";

const Pagination = () => {
  return (
    <div className="pagination-wrapper py-5">
      <nav className="container mt-3 text-center">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#pagination">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#pagination">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#pagination">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#pagination">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#pagination">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
