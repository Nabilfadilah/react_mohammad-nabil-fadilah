import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductSlice from '../../config/product/ProductSlice';
import { deleteProduct } from '../../config/product/ProductThunk';

function Table({productData, handleSetEdit }) {

    const dispatch = useDispatch();
    const [editName, setEditName] = useState('');

    return (
            <div>
            <table className="table table-striped mt-3" id="table">
                <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Product Category</th>
                    <th scope='col'>Image</th>
                    <th scope="col">Product Freshness</th>
                    <th scope="col">Product Price</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody id="table-body">
                {productData.map((product, index) => (
                    <tr key={product.id}>
                    <td>
                        <Link to={`/account/${product.id}`} state={product}>
                        {product.id}
                        </Link>
                    </td>
                    <td>{product.productName}</td>
                    <td>{product.productCategory}</td>
                    <td>{product.imageProduct}</td>
                    <td>{product.radioProduct}</td>
                    <td>{product.productPrice}</td>
                    <td>
                        
                        <button type="button" className="btn btn-danger" onClick={() => 
                            {if (window.confirm('Are you sure you want to delete this product?')) {
                                dispatch(deleteProduct(product.no))}
                            }}>
                            Delete</button>

                        <button type="button" className="btn btn-success" onClick={() =>handleSetEdit(product)}>Edit</button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>

        )
    }

export default Table