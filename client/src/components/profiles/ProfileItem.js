import React from 'react';
import { Link } from 'react-router-dom';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    price,
    info,
    location,
    skills,
  },
}) => {
  return (
    <div className='profile bg-light'>
      <img src={avatar} alt='' className='round-img' />
      <div>
        <h2>{skills}, {location}</h2>

        <h3 className='my-1'>{name}</h3>
        <p>{price && <span> {price} €/hour</span>}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
      <div class='icons my-1'>
        {info && info.phone && (
          <p>
            <i class='fas fa-phone'  /> {info.phone}
          </p>
        )}
        {info && info.email && (
          <p>
            <i class='fas fa-envelope ' /> {info.email}
          </p>
        )}
      </div>
    </div>
  );
};


export default ProfileItem;
