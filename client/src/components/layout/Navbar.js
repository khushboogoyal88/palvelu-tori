import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../actions/auth'

const Navbar = ({auth: {isAuthenticated, loading}, logout}) => {

  const authLinks = (
    <ul>
      <li>
        <Link to='#!' onClick={logout}>
          <i className='fas fa-sign-out-alt'></i>{' '}
          <span className='hide-sm'>Logout</span>
        </Link>
      </li>
    </ul>
  );
  const guestLinks = (
     <ul>
          <li>
            <Link to='#!'>All Services</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
  );
    return (
      <nav className='navbar bg-dark'>
        <h1>
          <Link to='/'>Palvelu Tori
          </Link>
        </h1>
       {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
      </nav>
    );
}

const mapStateToProps= state=>({
  auth: state.auth
})

export default connect(mapStateToProps, {logout})(Navbar)