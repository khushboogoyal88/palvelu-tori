import React from 'react';

const ProfileTop = ({
  profile: {
    location,
    info,
    price,
    user: { name, avatar },
    image
  },
}) => {
  return (
    <div class='profile-top bg-primary p-2'>
      <img class='round-img profile-img my-1' src={!image? avatar :image} alt='' />
      <h1 class='large'>{name}</h1>
      <h2 >Asking Price: {price} €/hour</h2>

      <p>{location && <span>{location}</span>}</p>
      <div class='icons my-1'>
        {info && info.phone && (
          <p>
            <i class='fas fa-phone fa-2x' /> {info.phone}
          </p>
        )}
        {info && info.email && (
          <p>
            <i class='fas fa-envelope fa-2x' /> {info.email}
          </p>
        )}
      </div>
    </div>
  );
};


export default ProfileTop;
