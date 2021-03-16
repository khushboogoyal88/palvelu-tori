import React from 'react';
import { Link } from 'react-router-dom';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    price,
    location,
    skills,
  },
}) => {
  return (
    <div className='profile bg-light'>
      <img src={avatar} alt='' className='round-img' />
      <div>
        <h2>{skills}</h2>

        <h3 className='my-1'>{name}</h3>
        <p>{price && <span> {price} €/hour</span>}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
      <div>
        <ul>
          <li>
            <i className='fas fa-check' /> {location}
          </li>
          <li>
            <i className='fas fa-phone' /> Phone
          </li>
          <li>
            <i className='fas fa-envelope' /> Email
          </li>
        </ul>
      </div>
    </div>
  );
};


export default ProfileItem;
