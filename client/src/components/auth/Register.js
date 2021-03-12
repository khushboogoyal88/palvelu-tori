import React, {Fragment, useState} from 'react';
import {connect} from 'react-redux'
import {Link, Redirect} from "react-router-dom";
import {setAlert} from '../../actions/alert'
import {register} from '../../actions/auth'

const Register = ({setAlert, register, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:'' 
    })

    const {name, email, password, password2} = formData;
    
    const changeHandler = e => setFormData({...formData, [e.target.name]: e.target.value})
    
    const submitHandler = async e =>{
        e.preventDefault();
        if(password !== password2){
            setAlert('Passwords do not match', 'danger');
        }else{
            register({name, email, password});
        }
    }

    if(isAuthenticated){
      return <Redirect to="/dashboard"/>
    }
    return (
      <Fragment>
        <h1 className='large text-primary'>Sign Up</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Create Your Account
        </p>
        <form className='form' onSubmit={e=>submitHandler(e)}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={(e) => changeHandler(e)}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={(e) => changeHandler(e)}
              required
            />
            <small className='form-text'>
              
            </small>
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={(e) => changeHandler(e)}
              required
              minLength='6'
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Confirm Password'
              name='password2'
              value={password2}
              onChange={(e) => changeHandler(e)}
              required
              minLength='6'
            />
          </div>
          <input type='submit' className='btn btn-primary' value='Register' />
        </form>
        <p className='my-1'>
          Already have an account? <Link to='/login'>Sign In</Link>
        </p>
      </Fragment>
    );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { setAlert, register })(Register);
