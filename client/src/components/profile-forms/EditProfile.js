
import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';


const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState({
    price: '',
    location: '',
    status: '',
    skills: '',
    bio: '',
    phone: '',
    email:'',
    image:''
  });

  const [displayContactlInputs, toggleContactInputs] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      location: loading || !profile.location ? '' : profile.location,
      skills: loading || !profile.skills ? '' : profile.skills,
      price: loading || !profile.price ? '' : profile.price,
      bio: loading || !profile.bio ? '' : profile.bio,
      phone: loading || !profile.info ? '' : profile.info.phone,
      email: loading || !profile.info ? '' : profile.info.email,
      image: loading || !profile.image ? '' : profile.image,
    });
  }, [loading, getCurrentProfile]);

  const { price, location, skills, bio, phone, email, image } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSumbit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };
  return (
    <Fragment>
      <h1 className='large text-primary'>Edit Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={(e) => onSumbit(e)}>
        <div className='form-group'>
          <select
            placeholder='* Skills'
            name='skills'
            value={skills}
            onChange={(e) => onChange(e)}
          >
            <option value='0'>* Select the Service you want to provide.</option>
            <option value='Baby sitting'>Baby sitting</option>
            <option value='Plumbing'>Plumbing</option>
            <option value='House Keeping'>House Keeping</option>
            <option value='Tutoring'>Tutoring</option>
            <option value='Electrical Services'>Electrical Services</option>
            <option value='Moving and delivery'>Moving and delivery</option>
            <option value='Personal Care'>
              Personal Care(like haicut, manicure)
            </option>
            <option value='Catering Services'>Catering Services</option>
            <option value='Other'>Other</option>
          </select>
          <small className='form-text'>
            Give us an idea of what kind of services you want to provide
          </small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='* Price'
            name='price'
            value={price}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>Price you wanna ask.</small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder=' * Location'
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
            Edit Contact Details
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

        <div class='grid-container'>
          <div class='grid-item'>
            <img
              className='round-img avatar-img'
              src='./images/1.png'
              alt=''
            />
            <p>Avatar 1</p>
          </div>
          <div class='grid-item'>
            <img
              className='round-img avatar-img'
              src='./images/2.png'
              alt=''
            />
            <p>Avatar 2</p>
          </div>
          <div class='grid-item'>
            <img
              className='round-img avatar-img'
              src='./images/3.png'
              alt=''
            />
            <p>Avatar 3</p>
          </div>
          <div class='grid-item'>
            <img
              className='round-img avatar-img'
              src='./images/4.png'
              alt=''
            />
            <p>Avatar 4</p>
          </div>
          <div class='grid-item'>
            <img
              className='round-img avatar-img'
              src='./images/5.png'
              alt=''
            />
            <p>Avatar 5</p>
          </div>
          <div class='grid-item'>
            <img
              className='round-img avatar-img'
              src='./images/6.png'
              alt=''
            />
            <p>Avatar 6</p>
          </div>
          <div class='grid-item'>
            <img
              className='round-img avatar-img'
              src='./images/7.png'
              alt=''
            />
            <p>Avatar 7</p>
          </div>
          <div class='grid-item'>
            <img
              className='round-img avatar-img'
              src='./images/8.png'
              alt=''
            />
            <p>Avatar 8</p>
          </div>
          <div class='grid-item'>
            <img
              className='round-img avatar-img'
              src='./images/9.png'
              alt=''
            />
            <p>Avatar 9</p>
          </div>
        </div>

        <div className='form-group'>
          <select
            type='text'
            placeholder='Image'
            name='image'
            value={image}
            onChange={(e) => onChange(e)}
          >
            <option value='0'>Choose an avatar image.</option>
            <option value='/images/1.png'>Avatar1</option>
            <option value='/images/2.png'>Avatar2 </option>
            <option value='/images/3.png'>Avatar3</option>
            <option value='/images/4.png'>Avatar4</option>
            <option value='/images/5.png'>Avatar5</option>
            <option value='/images/6.png'>Avatar6</option>
            <option value='/images/7.png'>Avatar7</option>
            <option value='/images/8.png'>Avatar 8</option>
            <option value='/images/9.png'>Avatar 9</option>
          </select>
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
