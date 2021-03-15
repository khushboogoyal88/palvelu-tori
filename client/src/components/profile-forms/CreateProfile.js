import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

const CreateProfile = (props) => {
    const [formData, setFormData] = useState({
      price: '',
      location: '',
      status: '',
      skills: '',
      bio: '',
      phone: '',
      email: '',
    });

    const [displayContactlInputs, toggleContactInputs] = useState(false);

    const {
      price,
      location,
      skills,
      bio,
      phone,
      email,
    } = formData;

    const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
      <Fragment>
        <h1 className='large text-primary'>Create Your Profile</h1>
        <p className='lead'>
          <i className='fas fa-user' /> Let's get some information to make your
          profile stand out
        </p>
        <small>* = required field</small>
        <form className='form'>
          <div className='form-group'>
            <select
              placeholder='* Skills'
              name='skills'
              value={skills}
              onChange={(e) => onChange(e)}
            >
              <option value='0'>
                * Select the Service you want to provide.
              </option>
              <option value='Developer'>Baby sitting</option>
              <option value='Junior Developer'>Plumbing</option>
              <option value='Senior Developer'>House Keeping</option>
              <option value='Manager'>Tutoring</option>
              <option value='Student or Learning'>Electrical Services</option>
              <option value='Student or Learning'>Moving and delivery</option>
              <option value='Instructor'>
                Personal Care(like haicut, manicure)
              </option>
              <option value='Intern'>Catering Services</option>
              <option value='Other'>Other</option>
            </select>
            <small className='form-text'>
              Give us an idea of what kind of services you want to provide
            </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Price'
              name='price'
              value={price}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>Price you wanna ask.</small>
          </div>

          <div className='form-group'>
            <input
              type='text'
              placeholder='Location'
              name='location'
              value={location}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>City (eg. Espoo, Lohja etc)</small>
          </div>

          <div className='form-group'>
            <textarea
              placeholder='A short description of yours services'
              name='bio'
              value={bio}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>Tell us a little about yourself</small>
          </div>

          <div className='my-2'>
            <button
              onClick={() => toggleContactInputs(!displayContactlInputs)}
              type='button'
              className='btn btn-light'
            >
              Add Contact Details
            </button>
          </div>

          {displayContactlInputs && (
            <Fragment>
              <div className='form-group contact-input'>
                <i className='fas fa-phone fa-2x' />
                <input
                  type='text'
                  placeholder='Phone Number'
                  name='phone'
                  value={phone}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className='form-group contact-input'>
                <i className='far fa-envelope fa-2x' />
                <input
                  type='text'
                  placeholder='Email ID'
                  name='email'
                  value={email}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </Fragment>
          )}

          <input type='submit' className='btn btn-primary my-1' />
          <a className='btn btn-light my-1' href='dashboard.html'>
            Go Back
          </a>
        </form>
      </Fragment>
    );
}

export default CreateProfile
