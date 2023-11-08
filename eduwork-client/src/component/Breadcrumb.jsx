const Breadcrumb = () => {
  return (
    <div className="breadcrumb-container">
      <nav aria-label="breadcrumb" className="breadcrumb-wrapper pt-5">
        <h1 className="breadcrumb-title text-center pt-3 mt-5 fw-bold">
          Products
        </h1>
        <ol className="breadcrumb pb-5 justify-content-center fs-4">
          <li className="breadcrumb-item">Home</li>
          <li className="breadcrumb-item" aria-current="page">
            Products
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
