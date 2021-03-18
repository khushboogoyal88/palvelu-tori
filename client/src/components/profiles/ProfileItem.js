import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../layout/Rating'

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    image,
    price,
    info,
    location,
    skills,
    rating,
    numReviews,
    reviews
  },
}) => {
  return (
    <div className='profile bg-light'>
      <div>
        <img
          src={!image ? avatar : image}
          alt=''
          className='round-img profile-img'
        />
        <Rating value={rating} text={`${numReviews} reviews`}/>
      </div>

      <div>
        <h2>
          {skills} services in {location}
        </h2>

        <h3 className='my-1'>{name}</h3>
        <p>{price && <span> {price} €/hour</span>}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
      <div class='icons my-1'>
        {info && info.phone && (
          <p>
            <i class='fas fa-phone' /> {info.phone}
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
