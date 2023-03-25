import React from 'react'
import { useFormik } from 'formik'; // buat input 
import * as Yup from 'yup'; // buat validasi
import { useNavigate } from 'react-router-dom'

function Register() {
    const navigate = useNavigate();

    // regex
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        },

        // aturan validasi 
        validationSchema: Yup.object({
            firstName: Yup.string()
            .min(3, 'Minimal 3 karakter')
            .required('Anda belum Memasukan First Name'),
            lastName: Yup.string()
            .min(3, 'Minimal 3 karakter')
            .required('Anda belum Memasukan Last Name anda'),
            username: Yup.string()
            .required('Anda belum Memasukan username'),
            email: Yup.string()
            .required('Email harus menggunakan @'), // wajid diisi 
            password: Yup.string()
            .min(8, 'Minimal 8 karakter')
            .required('Anda belum Memasukan Password'),
            confirmPassword: Yup.string()
            .required()
            .oneOf([Yup.ref('password')], 'Password belum sama'),
        }),

        onSubmit: (values) => {
            formik.resetForm();
            console.log('form values', (values))
            const dataUser = {
                firstName: (values.firstName),
                lastName: (values.lastName),
                username: (values.username),
                email: (values.email),
                password: (values.password),
                confirmPassword: (values.confirmPassword)
            };

            // setItem mengambil dari data user JSON stringify mengambil data yang sudah didefinisikan dengan nama dataUser
            localStorage.setItem("dataUser", JSON.stringify(dataUser));
            navigate('/login')
        }
    });

    return (
        <div className="card text-bg-light p-5">
            <div className="card-header text-center">REGISTER</div>
            <div className="card-body"></div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="col-lg-3">

                            <div className="mb-3 pt-5">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                First Name
                                </label>
                                <input
                                    type="text"
                                    name='firstName'
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.firstName && formik.errors.firstName && <div className='error text-danger'>{formik.errors.firstName}</div>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                Last Name
                                </label>
                                <input
                                    type="text"
                                    name='lastName'
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.lastName && formik.errors.lastName && <div className='error text-danger'>{formik.errors.lastName}</div>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                Username
                                </label>
                                <input
                                    type="text"
                                    name='username'
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.username && formik.errors.username && <div className='error text-danger'>{formik.errors.username}</div>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                Email 
                                </label>
                                <input
                                    type="email"
                                    name='email'
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email && <div className='error text-danger'>{formik.errors.email}</div>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                Password
                                </label>
                                <input
                                    type="password"
                                    name='password'
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.password && formik.errors.password && <div className='error text-danger'>{formik.errors.password}</div>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                Password
                                </label>
                                <input
                                    type="password"
                                    name='confirmPassword'
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    value={formik.values.confirmPassword}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.confirmPassword && formik.errors.confirmPassword && <div className='error text-danger'>{formik.errors.confirmPassword}</div>}
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>

                            <button type='button' className='btn btn-danger' onClick={() => navigate('/login')}>Back</button>
                            
                        </div>
                    </div>
                </form>
            <div/>
        </div>
    )
}

export default Register