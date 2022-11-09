import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux'
import { Link, Redirect } from "react-router-dom";
import { setAlert } from '../../actions/alert'
import { register, login } from '../../actions/auth'

const Register = ({ setAlert, register, auth }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    isSeller: false,
  })

  const { name, email, password, password2, isSeller } = formData;

  const changeHandler = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const submitHandler = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password, isSeller });
    }
  }
  if (auth.isAuthenticated) {
    if (isSeller)
      return <Redirect to='/create-profile' />;
    return <Redirect to='/profiles' />;
  }
  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Account
      </p>
      <form className='form' onSubmit={(e) => submitHandler(e)}>
        <div className='form-group'>
          <div className='form-text'>Name</div>
          <input
            type='text'
            name='name'
            value={name}
            onChange={(e) => changeHandler(e)}
            required
          />
        </div>
        <div className='form-group'>
          <div className='form-text'>Email</div>
          <input
            type='email'
            name='email'
            value={email}
            onChange={(e) => changeHandler(e)}
            required
          />
          <small className='form-text'></small>
        </div>
        <div className='form-group'>
          <div className='form-text'>Password</div>
          <input
            type='password'
            name='password'
            value={password}
            onChange={(e) => changeHandler(e)}
            required
            minLength='6'
          />
        </div>
        <div className='form-group'>
          <div className='form-text'>Confirm Password</div>
          <input
            type='password'
            name='password2'
            value={password2}
            onChange={(e) => changeHandler(e)}
            required
            minLength='6'
          />
        </div>

        <div className='form-group form-text'>
          <input
            type='radio'
            name='isSeller'
            value='true'
            onChange={(e) => changeHandler(e)}
          />
          <label for='true'> I want to sell my Services</label>
        </div>

        <div className='form-group form-text'>
          <input
            type='radio'
            name='isSeller'
            value='false'
            onChange={(e) => changeHandler(e)}
          />
          <label for='false'> I want to buy Services</label>
        </div>

        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p className='my-2'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth
});
export default connect(mapStateToProps, { setAlert, register })(Register);
