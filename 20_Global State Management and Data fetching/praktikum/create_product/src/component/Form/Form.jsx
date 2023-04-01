import React, { useState } from 'react'
import Button from '../Button/Button'
import { v4 as uuidv4 } from 'uuid'
import Tabel from '../Tabel/Tabel';
import ButtonRandom from '../Button/ButtonRandom';
import { useFormik } from 'formik'; // buat input 
import * as Yup from 'yup'; // buat validasi
import { useDispatch, useSelector } from "react-redux";
import ProductSlice from '../../config/product/ProductSlice';

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

    const dispatch = useDispatch();

    const productData = useSelector((state) => state.product.listProduct)

    // tabel 
    // const [productData, setProductData] = useState([]);
    // const [productName, setProductName] = useState('');
    // const [productCategory, setProductCategory] = useState('');
    // const [imageProduct, setImageProduct] = useState('');
    // const [productFreshness, setProductFreshness] = useState('');
    // const [productPrice, setProductPrice] = useState('');

    // const handleDelete = (productId) => {
    //     if (window.confirm('Are you sure you to delete this product')) {
    //         setProductData(productData.filter((product) => product.id !== productId));
    //     }
    // };

    // regex
    const formik = useFormik({
        initialValues: {
            id: uuidv4(),
            productName: '',
            productCategory: '',
            imageProduct: '',
            radioProduct: '',
            productPrice: ''
        },

        // aturan validasi 
        validationSchema: Yup.object({
            productName: Yup.string()
            .max(10, 'Maksimal 10 karakter') 
            .required('Product Name wajib diisi'), // wajid diisi 
            productCategory: Yup.string()
            .required('Product Category wajib diisi'),
            imageProduct: Yup.string()
            .required('Product Image wajib diisi'),
            radioProduct: Yup.string()
            .required('Product Freshness wajib diisi'),
            productPrice: Yup.number()
            .positive('Jangan mengisi dengan min -')
            .required('Product Price wajib diisi')
        }),

        onSubmit: (values, {setValues, resetForm}) => {
            formik.resetForm();
            console.log('form values', (values))
            setValues({...values, id:uuidv4()})
            dispatch(ProductSlice.actions.add([...productData, {
                id: uuidv4(),
                productName: values.productName,
                productCategory: values.productCategory,
                imageProduct: values.imageProduct,
                radioProduct: values.radioProduct,
                productPrice: values.productPrice
            }]))

            resetForm();

            // const newProduct = {
            //     id: uuidv4(),
            //     name: (values.productName),
            //     category: (values.productCategory),
            //     freshness: (values.radioProduct),
            //     image : (values.imageProduct),
            //     price: (values.productPrice)
            // };
    
            // setProductData([...productData, newProduct]);
            // setProductName('');
            // setProductCategory('');
            // setImageProduct('');
            // setProductFreshness('');
            // setProductPrice('');
        }
    });

    return (
        <div>
        <>
            {/* Form */}
            <section>
            <form onSubmit={formik.handleSubmit} name="form">
                <div className="container text-center">
                    {/* <img src={gambar} alt="" className='img'/> */}
                    <h2 className="form-product" style={{ marginTop: 100 }}>{article.title.en}</h2>
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
                    <label htmlFor="product">Product Name</label>
                    <br />
                    <input
                        type="text"
                        className="form-control mt-2 detail-product"
                        id="productName"
                        aria-describedby="textHelp"
                        name="productName"
                        onBlur={formik.handleBlur} // 
                        value={formik.values.productName} // buat ambil nilainya
                        onChange={formik.handleChange} // buat tau perubahannya
                        
                    />
                    {/* buat menampilkan errornya  */}
                    {formik.touched.productName && formik.errors.productName && <div className='error text-danger'>{formik.errors.productName}</div>} 
                    </div>
                    <div className="col-4" />
                </div>

                {/* product category */}
                <div className="row mt-4">
                    <div className="col-4" />
                    <div className="col-4">
                    <label htmlFor="product">Product Category</label>
                    <select
                        name="productCategory"
                        className="form-select category-product"
                        id="productCategory"
                        aria-label="Default select example"
                        onBlur={formik.handleBlur} // 
                        value={formik.values.productCategory} // buat ambil nilainya
                        onChange={formik.handleChange}
                    >
                        <option selected="" disabled="" value="">
                        Choose..
                        </option>
                        <option value={"Sepatu"}>Sepatu</option>
                        <option value={"Baju"}>Baju</option>
                        <option value={"Celana"}>Celana</option>
                    </select>
                    {formik.touched.productCategory && formik.errors.productCategory && <div className='error text-danger'>{formik.errors.productCategory}</div>}   
                    </div> 
                    <div className="col-4" />
                </div>

                {/* image product */}
                <div className="row mt-4">
                    <div className="col-4"></div>
                    <div className="col-4">
                    <label htmlFor="formFile" className="form-label">
                        Image of Product
                    </label>
                    <input
                        className="form-control image-product"
                        type="file"
                        id="image-product"
                        height="32px"
                        width="200px"
                        name="imageProduct"
                        onBlur={formik.handleBlur}
                        value={formik.values.imageProduct}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.imageProduct && formik.errors.imageProduct && <div className='error text-danger'>{formik.errors.imageProduct}</div>}
                    </div>
                    <div className="col-4"></div>
                </div>
                <br />


                {/* product freshness */}
                <div className="row ">
                    <div className="col-4">
                    <label htmlFor="freshness">Product Freshness</label>
                    <div className="form-check">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="radioProduct"
                        defaultValue="Brand New"
                        onBlur={formik.handleBlur}
                        checked={formik.values.picked}
                        onChange={formik.handleChange}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Brand New
                        </label>

                    </div>
                    <div className="form-check">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="radioProduct"
                        defaultValue="Second Hand"
                        checked={formik.values.picked}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Second Hand
                        </label>

                    </div>
                    <div className="form-check">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="radioProduct"
                        defaultValue="Refurbished"
                        checked={formik.values.picked}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault3">
                        Refurbished
                        </label>
                    </div>
                    {formik.touched.radioProduct && formik.errors.radioProduct && <div className='error text-danger'>{formik.errors.radioProduct}</div>}
                    <div className="col-4"></div>
                </div>
                </div>
                <br />

                {/* product price */}
                <div className="row mt-4">
                    <div className="col-4" />
                    <div className="col-4">
                    <label htmlFor="price">Product Price</label>
                    <input
                        type="number"
                        className="form-control mt-2 "
                        id="productPrice"
                        name='productPrice'
                        aria-describedby="textHelp"
                        placeholder="$ 1"
                        
                        onBlur={formik.handleBlur} // 
                        value={formik.values.productPrice} // buat ambil nilainya
                        onChange={formik.handleChange}
                    />

                        
                    {formik.touched.productPrice && formik.errors.productPrice && <div className='error text-danger'>{formik.errors.productPrice}</div>} 

                    </div>
                    <div className="col-4"></div>
                </div>
                <Button/>
            </form>   
            </section>
            <Tabel 
                productData={productData}
                />
                {/* button random */}
                <ButtonRandom/>
        </>
        </div>
    )
}

export default Form