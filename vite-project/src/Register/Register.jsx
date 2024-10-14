import React from 'react'
import './Register.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Register() {
  const {handleBlur,handleChange,handleReset,handleSubmit,errors,values,touched} = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      address:'',
      state:'',
      zip:'',
      city:'',

     

    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required(' First Name is Required'),
      lastname: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(8, 'Must be 8 characters or more')
        .required('Required'),
      address: Yup.string()
        .min(8, 'Must be 8 characters or more')
        .required('Required'),
      state: Yup.string()
        .min(3, 'Must be 8 characters or more')
        .required('Required'),
      zip: Yup.string()
        .min(4, 'Must be 8 characters or more')
        .required('Required'),
      city: Yup.string()
        .min(8, 'Must be 8 characters or more')
        .required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log('Submit', values);
      resetForm(); // Reset the form values
    },
  });
  return (
    <div>
        <Header/>
        <div className='text-center bg-light'>
            <h1>NEW CUSTOMER</h1>
        </div>
        <div className='bg-light w-100 mt-4'>
                Already have an account ? <Link to="/login">Login</Link>
            </div>
        <div className='button mt-3'>
        <button className='btn btn-danger d-block w-100 m-1'>Login with Google</button>
        <button className='btn btn-success d-block w-100 m-1'>Login with Facebook</button>

        </div>
        <form onSubmit={handleSubmit} className="row g-3">
  <div className="col-md-6">
    <label htmlFor="firstname" className="form-label">First Name</label>
    <input onChange={handleChange} onBlur={handleBlur} value={values.firstname} type="text" name='firstname' className="form-control" id="firstname"/>
    <p className='error' >{touched.firstname && errors.firstname ? errors.firstname:null}</p>
  </div>
  <div className="col-md-6">
    <label htmlFor="lastname" className="form-label">Last Name</label>
    <input onChange={handleChange} onBlur={handleBlur} value={values.lastname}  type="text" name='lastname' className="form-control" id="lastname"/>
    <p className='error' >{touched.lastname && errors.lastname ? errors.lastname:null}</p>
  </div>
  <div className="col-md-6">
    <label htmlFor="email" className="form-label">Email</label>
    <input onChange={handleChange} onBlur={handleBlur} value={values.email}  type="text" name='email' className="form-control" id="email"/>
    <p className='error' >{touched.email && errors.email ? errors.email:null}</p>
  </div>
  <div className="col-md-6">
    <label htmlFor="Password" className="form-label">Password</label>
    <input onChange={handleChange} onBlur={handleBlur} value={values.password}  type="password" name='password' className="form-control" id="password"/>
    <p className='error' >{touched.password && errors.password ? errors.password:null}</p>
  </div>
  <div className="col-12">
    <label htmlFor="Address" className="form-label">Address</label>
    <input onChange={handleChange} onBlur={handleBlur} value={values.address}  type="text" name='address' className="form-control" id="Address" placeholder="address"/>
    <p className='error' >{touched.address && errors.address ? errors.address:null}</p>
  </div>
  
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input onChange={handleChange} onBlur={handleBlur} value={values.city} name='city' type="text" className="form-control" id="inputCity"/>
    <p className='error' >{touched.city && errors.city ? errors.city:null}</p>
  </div>
  <div className="col-md-4">
    <label htmlFor="State" className="form-label">State</label>
    <select id="State" onChange={handleChange} onBlur={handleBlur} value={values.state}  name='state' className="form-select">
      <option selected>State</option>
      <option>KPK</option>
      <option>Punjab</option>
      <option>Sindh</option>
      <option>Balochistan</option>
      <option>Gilgit Baltistan</option>
      <option>Islamabad</option>
      <option>Azad Kashmir</option>

    </select>
    <p className='error' >{touched.state && errors.state ? errors.state:null}</p>
  </div>
  <div className="col-md-2">
    <label htmlFor="Zip" className="form-label">Zip</label>
    <input type="number" name='zip' onChange={handleChange} onBlur={handleBlur} value={values.zip}  className="form-control" id="Zip"/>
    <p className='error' >{touched.zip && errors.zip ? errors.zip:null}</p>
  </div>
 
  <div className="col-12">
    <button type="submit" onSubmit={(values)=>{
      handleSubmit()
      console.log('submit',values)
      handleReset()

    }}
    
    className="btn btn-primary">Sign up</button>
  </div>
</form>
        <Footer/>
      
    </div>
  )
}

export default Register
