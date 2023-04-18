import React from 'react'
import { useFormik } from 'formik'; // buat input 
import * as Yup from 'yup'; // buat validasi
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

function Login({setSignedIn}) {
    const navigate = useNavigate();

    // regex
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },

        // aturan validasi 
        validationSchema: Yup.object({
            email: Yup.string()
            .required('Email harus menggunakan @'), // wajid diisi 
            password: Yup.string()
            .min(8, 'Minimum 8 karakter')
            .required('Password belum diisi')
        }),

        onSubmit: (values) => {
            formik.resetForm();
            console.log('form values', (values))
            // untuk mengambil data dari local storage 
            const user = JSON.parse(localStorage.getItem("dataUser"));
                // jika usernma nya sama email & password, maka di set
                if(user.email === values.email && user.password === values.password) {
                    localStorage.setItem(
                    "dataUser",
                    JSON.stringify({ ...user, Login:true})
                    );
                    setSignedIn(true)
                    alert('Login Succes')
                    return navigate("/")
                }else {
                    alert('account not registered')
                }
        }
    });

    return (
        <div className="card text-bg-light p-5">
            <div className="card-header text-center">LOGIN</div>
            <div className="card-body">
                <form onClick={formik.handleSubmit}>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="mb-3 pt-5">
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

                            <p className='pb-3'>Belum memiliki akun ? <Link to={`/register`}>Register</Link></p>
                            

                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>

                            <button type='button' className='btn btn-danger' onClick={() => navigate('/')}>Back</button>
                            
                        </div>
                    </div>
                </form>      
            </div>
        </div>
    )
}

export default Login