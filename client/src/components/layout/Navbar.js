import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../actions/auth'

const Navbar = ({auth: {isAuthenticated, loading, user}, logout}) => {

  const sellerLinks = (
    <ul>
      <li>
        <Link to='/profiles'>All Services</Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user'></i>{' '}
          <span className='hide-sm'>My Profile</span>
        </Link>
      </li>
      <li>
        <Link to='#!' onClick={logout}>
          <i className='fas fa-sign-out-alt'></i>{' '}
          <span className='hide-sm'>Logout</span>
        </Link>
      </li>
    </ul>
  );

  const buyerLinks = (
    <ul>
      <li>
        <Link to='/profiles'>All Services</Link>
      </li>
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
            <Link to='/profiles'>All Services</Link>
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
          <Link to='/'>Palvelu Tori</Link>
        </h1>
        {!loading && (
          <Fragment>
            {isAuthenticated && user.isSeller ? (
              sellerLinks
            ) : (
              <Fragment>
                {isAuthenticated && !user.isSeller ? buyerLinks : guestLinks}
              </Fragment>
            )}
          </Fragment>
        )}
      </nav>
    );
}

const mapStateToProps= state=>({
  auth: state.auth
})

export default connect(mapStateToProps, {logout})(Navbar)
