import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

function Search() {
  const params = useParams();

  const SEARCH_PRODUCT = gql`
    query SearchProduct($_ilike: String!) {
      product(where: { productName: { _ilike: $_ilike } }) {
        id
        productName
        additional_information
        productCategory
        radioProduct
        imageProduct
        productPrice
      }
    }
  `;

  const { loading, error, data } = useQuery(SEARCH_PRODUCT, {
    variables: { _ilike: params.name },
  });

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
      navigate(`/search/${values.search}`);
    },
  });

  return (
    <div className="row text-center pb-5">
      <form className="d-flex py-4 ps-5 pe-5" onSubmit={formik.handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          name="search"
          onChange={formik.handleChange}
        />
        <button type="submit" className="btn btn-outline-primary">
          Search
        </button>
      </form>
      {data?.product.map((product) => (
        <div className="col-md-4" key={product.id}>
          <div className="card shadow-sm">
            <svg
              className="bd-placeholder-img card-img-top"
              width="100%"
              height={225}
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>{product.productName}</title>
              <rect width="100%" height="100%" fill="#55595c" />
            </svg>
            <div className="card-body">
              <p className="card-text">{product.productName}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <Link
                    to={`/account/${product.id}`}
                    state={product}
                    className="btn btn-outline-secondary"
                  >
                    Detail
                  </Link>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="text-center mb-3 pt-4">
        <Link to={"/"} className="btn btn-danger">
          Back
        </Link>
      </div>
    </div>
  );
}

export default Search;
