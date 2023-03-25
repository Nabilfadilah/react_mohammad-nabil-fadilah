import React from 'react'
import { useFormik } from 'formik'; // buat input 
import * as Yup from 'yup'; // buat validasi

function Contact() {

    // regex
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        },

        // aturan validasi 
        validationSchema: Yup.object({
            firstName: Yup.string()
            .required('Anda belum Memasukan First Name'),
            lastName: Yup.string()
            .required('Anda belum Memasukan Last Name'),
            email: Yup.string()
            .required('Email harus menggunakan @'), 
            message: Yup.string()
            .min(10, 'Minimal 10 karakter')
            .required('Anda belum Memasukan Pesan'),
        }),

        onSubmit: (values) => {
            formik.resetForm();
            console.log('form values', (values))
            const dataUser = {
                firstName: (values.firstName),
                lastName: (values.lastName),
                email: (values.email),
                message: (values.message)
            };

            alert("First Name : " + values.firstName + "\nLast Name : " + values.lastName + "\nEmail : " + values.email + "\nMessage : " + values.message)

            // setItem mengambil dari data user JSON stringify mengambil data yang sudah didefinisikan dengan nama dataUser
            localStorage.setItem("dataUser", JSON.stringify(dataUser));
        }
    });


    return (
        <div>
            <section id="contact" className="contact mb-4">
                <div className="container">
                    <div className="row pt-4 mb-4">
                    <div className="col text-center">
                        <h2>Contact Us</h2>
                        <hr />
                    </div>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className="card text-light bg-secondary mb-3">
                        <div className="card-body">
                            <h5 className="card-title text-center">Contact Info</h5>
                            <p className="card-text text-center">
                            Silahkan hubungi kami untuk informasi lebih lanjut.
                            </p>
                            <p className="card-phone text-center">085-233-344-007</p>
                            <p className="card-email text-center">mnabilfadilahh@gmail.com</p>
                        </div>
                        </div>
                        <ul className="list-group">
                        <li className="list-group-item text-center">Location</li>
                        <li className="list-group-item">
                            Kota Bandung, Jawa Barat, Indonesia
                        </li>
                        </ul>
                    </div>
                    <div className="col-lg-6">


                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="nama">First Name</label>
                                <input
                                type="text"
                                name='firstName'
                                className="form-control"
                                id="firstname"
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                />
                                {formik.touched.firstName && formik.errors.firstName && <div className='error text-danger'>{formik.errors.firstName}</div>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Last Name</label>
                                <input
                                type="text"
                                name='lastName'
                                className="form-control"
                                id="lastname"
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                />
                                {formik.touched.lastName && formik.errors.lastName && <div className='error text-danger'>{formik.errors.lastName}</div>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Email</label>
                                <input
                                type="email"
                                name='email'
                                className="form-control"
                                id="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email && <div className='error text-danger'>{formik.errors.email}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Message</label>
                                <textarea
                                name="message"
                                id="message"
                                className="form-control"
                                defaultValue={""}
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                />
                                {formik.touched.message && formik.errors.message && <div className='error text-danger'>{formik.errors.message}</div>}
                            </div>

                            <div className="form-group">
                                <button
                                type="submit"
                                className="btn kirim btn-secondary mt-3"
                                id="submit-button"
                                >
                                Kirim Pesan!
                                </button>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
                </section>

        </div>
    )
}

export default Contact