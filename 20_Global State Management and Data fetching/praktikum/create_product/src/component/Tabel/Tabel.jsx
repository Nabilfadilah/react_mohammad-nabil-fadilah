import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductSlice from '../../config/product/ProductSlice';

function Table({productData, handleDelete, handleEdit}) {

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
                        <button type="button" className="btn btn-danger" onClick={() => {dispatch(ProductSlice.actions.delete(product.id))}}>Delete</button>
                        <input
                            type='text'
                            placeholder='Product Name'
                            onChange={
                                (e) => {
                                setEditName(e.target.value)
                            }
                        } />
                        <button type="button" className="btn btn-success" onClick={() =>{
                        dispatch(
                            ProductSlice.actions.update({
                            id: product.id,
                            productName: editName
                            })
                        )
                        }}>Edit</button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>

        )
    }

export default Table