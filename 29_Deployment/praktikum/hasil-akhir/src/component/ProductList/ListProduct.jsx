import React from "react";

import { useQuery, useSubscription } from "@apollo/client";
import { gql } from "@apollo/client";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";

const GET_PRODUCT = gql`
  subscription MySubscription {
    product(order_by: { productName: asc }, limit: 3) {
      additional_information
      id
      imageProduct
      productCategory
      productName
      productPrice
      radioProduct
    }
  }
`;

function ListProduct() {
  const { data, loading, error } = useSubscription(GET_PRODUCT);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
      navigate(`/search/${values.search}`);
    },
  });

  return (
    <div>
      <h2
        className="list d-flex justify-content-center pt-5"
        style={{ fontSize: 28, color: "#37517E" }}
      >
        PRODUCT LIST
      </h2>
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
          <Link to={"/loadmore"} className="btn btn-primary">
            LoadMore....
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ListProduct;
