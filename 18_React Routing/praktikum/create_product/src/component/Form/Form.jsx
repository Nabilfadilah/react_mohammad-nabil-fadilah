import React, { useState } from 'react'
import Button from '../Button/Button'
import { v4 as uuidv4 } from 'uuid'
import Tabel from '../Tabel/Tabel';
import ButtonRandom from '../Button/ButtonRandom';

function Form() {
    const article = {
        title: {
            id: "Buat Akun",
            en: "Create Account"
        },
        description: {
            id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
            en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
        }
    };

    const [productName, setProductName] = useState('');
    const handleProductNameChange = (event) => {
    const value = event.target.value;
        if (value.length <= 10) {
            setProductName(value);
        } else {
            alert("Product Name tidak boleh melebihi 10 karakter")
        }
    };

    // tabel 
    const [productData, setProductData] = useState([]);
    const [productCategory, setProductCategory] = useState('');
    const [productFreshness, setProductFreshness] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const handleProductSubmit = (event) => {
        event.preventDefault();
    
        const newProduct = {
            id: uuidv4(),
            name: productName,
            category: productCategory,
            freshness: productFreshness,
            price: productPrice
        };

        setProductData([...productData, newProduct]);
        setProductName('');
        setProductCategory('');
        setProductFreshness('');
        setProductPrice('');
    };

    const handleDelete = (productId) => {
        if (window.confirm('Are you sure you to delete this product')) {
            setProductData(productData.filter((product) => product.id !== productId));
        }
    };

    return (
        <div>
        <>
            {/* Form */}
            <section>
            <form onSubmit={handleProductSubmit} name="form">
                <div className="container text-center">
                    
                    <h2 className="mt-5 ">{article.title.en}</h2>
                </div>
                <div className="row">
                    <div className="col-3" />
                    <div className="col-6">
                    <p className="text-center">
                        {article.description.en}
                    </p>
                    </div>
                    <div className="col-3" />
                </div>

                {/* product Name */}
                <div className="row mt-5">
                    <div className="col-4" />
                    <div className="col-4">
                    <h4>Detail Product</h4>
                    <label htmlFor="product">Product Name</label>
                    <br />
                    <input
                    type="text"
                    className="form-control mt-2 detail-product"
                    id="productName"
                    aria-describedby="textHelp"
                    name="productName"
                    value={productName}
                    onChange={handleProductNameChange}
                    required
                    />
                    </div>
                    <div className="col-4" />
                </div>

                {/* product category */}
                <div className="row mt-4">
                    <div className="col-4" />
                    <div className="col-4">
                    <label htmlFor="product">Product Category</label>
                    <select
                        name="productcategory"
                        className="form-select category-product"
                        id="productCategory"
                        aria-label="Default 
                                select example"
                        required
                        value={productCategory}
                        onChange={(event) => setProductCategory(event.target.value)}
                    >
                        <option selected="" disabled="" value="">
                        Choose..
                        </option>
                        <option value={1}>Sepatu</option>
                        <option value={2}>Baju</option>
                        <option value={3}>Celana</option>
                    </select>   
                    </div>
                    <div className="col-4" />
                </div>

                {/* image product */}
                <div className="row mt-4">
                    <div className="col-4" />
                    <div className="col-4">
                    <label htmlFor="formFile" className="form-label">Image of Product</label>
                    <input
                        name="image-product"
                        className="form-control image-product"
                        type="file"
                        id="image-product"
                        height="32px"
                        width="200px"
                        required
                    />
                    </div>
                    <div className="col-4" />
                </div>
                <br />

                {/* product freshness */}
                <div className="row ">
                    <div className="col-4" />
                    <div className="col-4">
                    <label htmlFor="freshness">Product Freshness</label>
                    <div className="form-check">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="radioproduct"
                        defaultValue="Brand New"
                        required
                        value="Brand New" checked={productFreshness === 'Brand New'}
                        onChange={(event) => setProductFreshness(event.target.value)}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">Brand New</label>
                    </div>

                    <div className="form-check">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="radioproduct"
                        defaultValue="Second Hand"
                        required
                        value="Second Hand" checked={productFreshness === 'Second Hand'}
                        onChange={(event) => setProductFreshness(event.target.value)}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Second Hand
                        </label>
                    

                    </div>
                    <div className="form-check">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="radioproduct"
                        defaultValue="Refurbished"
                        required
                        value="Refurbished" checked={productFreshness === 'Refurbished'}
                        onChange={(event) => setProductFreshness(event.target.value)}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault3">Refurbished</label>
                    </div>
                    <div className="col-4" />
                    </div>
                </div>

                {/* additional description */}
                <div className="row">
                    <div className="col-4" />
                    <div className="col-4">
                    <label htmlFor="description">Additional Description</label>
                    <div className="form-floating">
                        <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="description"
                        style={{ height: 100 }}
                        required
                        defaultValue={""}
                        />
                        <label htmlFor="floatingTextarea2" />
                    </div>
                    </div>
                    <div className="col-4" />
                </div>

                {/* product price */}
                <div className="row mt-4">
                    <div className="col-4" />
                    <div className="col-4">
                    <label htmlFor="price">Product Price</label>
                    <input
                        type="number"
                        className="form-control mt-2 "
                        id="productprice"
                        aria-describedby="textHelp"
                        placeholder="$ 1"
                        required
                        value={productPrice} 
                        onChange={(event) => setProductPrice(event.target.value)}
                    />
                    </div>
                    <div className="col-4"></div>
                </div>
                <Button/>

                
            </form>   
            </section>
            <Tabel 
                productData={productData}
                handleDelete={handleDelete}
                />
                {/* button random */}
                <ButtonRandom/>
        </>
        </div>
    )
}

export default Form