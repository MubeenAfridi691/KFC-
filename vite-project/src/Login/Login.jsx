import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Login() {
  const {handleBlur,handleChange,handleReset,handleSubmit,errors,values,touched} = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Password is Required').min(8, 'Must be 8 characters or more'),
      
    }),
    onSubmit: (values, { resetForm }) => {
      console.log('Submit', values);
      resetForm(); // Reset the form values
    }
  })
  return (
    <div>
        <Header/>
        <div className="row">
            <div className="col-md-6">
            <div className='text-center bg-light'>
            <h1>Login With Social Links</h1>
        </div>
        <div className='bg-light w-100 mt-4'>
                Dont have an account ? <Link to="/register">Register</Link>
            </div>
        <div className='button mt-3'>
        <button className='btn btn-danger d-block w-100 m-1'>Login with Google</button>
        <button className='btn btn-success d-block w-100 m-1'>Login with Facebook</button>

        </div>
        <form class="row g-3" onSubmit={handleSubmit}>
  <div class="col-md-6">
    <label for="email" class="form-label">Email</label>
    <input value={values.email} onChange={handleChange} onBlur={handleBlur} name='email'  type="email" class="form-control" id="email"/>
    <p className='error' >{touched.email && errors.email ? errors.email:null}</p>
  </div>
  <div class="col-md-6">
    <label for="password" class="form-label">Password</label>
    <input name='password' onChange={handleChange} onBlur={handleBlur} value={values.password} type="password" class="form-control" id="pawword"/>
    <p className='error' >{touched.password && errors.password ? errors.password:null}</p>
  </div>
  
  

  
  <div class="col-12">
    <button type="submit"
    onSubmit={handleSubmit}
    class="btn btn-primary">Sign in</button>
  </div>
</form>
            </div>
            <div className="col-md-6">
            <div className='text-center bg-light'>
            <h1>Login With Social Links</h1>
        </div>
        <p>By creating an account with us ,purchasing food much easier and faster!</p>
        <button type="button" class="btn btn-outline-danger">Create an Account</button>

            </div>

        </div>
        <Footer/>
      
    </div>
  )
}

export default Login
