// code baru Hasura 

import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

const GetProductList = gql`
    query MyQuery {
        Product {
        id
        name
        description
        price
        category
        }
    }
`;

const ProductList = () => {
    const { data, loading, error } = useQuery(GetProductList)
    const [product, setProduct] = useState([])

    useEffect(() => {
        console.log('loading: ', loading);
        console.log('data gql: ', data);
        console.log('err: ', error);

        // check if data is still fetcging
        // if(!loading && !error !== undefined) {

        //     // set "Product" response to state "Product"
        //     setProduct(data.Product)
        // }
    })

    return (
        <>
            {
                loading ? <p>Sabar yah masih loading</p> :
                data?.Product.map(item => 
                    <div>
                        <p>{item.id}</p>
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                        <p>{item.category}</p>
                        <p>{item.price}</p>
                    </div>
                )
            }
        </>
    )
}

export default ProductList