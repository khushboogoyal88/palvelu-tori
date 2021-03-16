import React from 'react';
import { Link } from 'react-router-dom';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
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
        <i className='fas fa-check' /> {location}
      </div>
    </div>
  );
};


export default ProfileItem;
