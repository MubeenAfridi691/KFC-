import React from 'react'
import './Login.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Login() {
    const {touched,handleBlur,handleChange,handleReset,handleSubmit,errors,values}=useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema:Yup.object({
            email:Yup.string().email('Invalid email address').required('Required'),
            password:Yup.string().min(5,'Must be 8 characters or more').required('Required')
        }),
        onSubmit:(values)=>{
            console.log(values)
        }
    })
  return (
    <div>
     <body class="d-flex align-items-center py-4 bg-body-tertiary">
   

   

    
<main class="form-signin w-100 m-auto">
  <form onSubmit={handleSubmit}>
    <img class="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating">
      <input type="email" onChange={handleChange} onBlur={handleBlur} value={values.email} name='email' class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
      <p className='text-danger'>{touched && errors.email? errors.email:null}</p>
    </div>
    <div class="form-floating">
      <input onChange={handleChange} onBlur={handleBlur} value={values.password} name='password' type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
      <p className='text-danger'>{touched && errors.password? errors.password:null}</p>

    </div>

    <div class="form-check text-start my-3">
      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button onSubmit={handleSubmit} class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
  </form>
</main>

    </body>

    

      
    </div>
  )
}

export default Login
