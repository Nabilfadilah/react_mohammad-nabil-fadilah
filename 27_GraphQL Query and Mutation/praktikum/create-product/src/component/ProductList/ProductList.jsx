import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

export const GET_PRODUCT = gql`
  query MyQuery {
    product {
      id
      additional_information
      imageProduct
      productCategory
      productName
      productPrice
      radioProduct
    }
  }
`;

const ProductList = () => {
  const { data, loading, error } = useQuery(GET_PRODUCT);
  const [product, setProduct] = useState([]);

  return (
    <>
      {data?.product.map((item) => (
        <div>
          <p>{item.id}</p>
          <p>{item.productName}</p>
          <p>{item.productCategory}</p>
          <p>{item.radioProduct}</p>
          <p>{item.image}</p>
          {/* <p>{item.additional_information}</p> */}
          <p>{item.productPrice}</p>
        </div>
      ))}
    </>
  );
};

export default ProductList;
