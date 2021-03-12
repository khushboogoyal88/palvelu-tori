import React from 'react'

const Landing = () => {
    return (
      <section className='landing'>
        <div className='dark-overlay'>
          <div className='landing-inner'>
            <h1 className='x-large'>Palvelu Tori</h1>
            <p className='lead'>
              Buy and Sell all kind of Household Services from plumbing to Baby-sitting.
            </p>
            <div className='buttons'>
              <a href='register.html' className='btn btn-primary'>
                Buy Services
              </a>
              <a href='login.html' className='btn btn-light'>
                Sell Services
              </a>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Landing
