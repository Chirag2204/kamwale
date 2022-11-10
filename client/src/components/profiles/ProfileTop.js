import React from 'react';

const ProfileTop = ({
  profile: {
    location,
    skills,
    info,
    price,
    user: { name, avatar },
    image
  },
}) => {
  return (
    <div class='profile-top bg-light p-2'>
      <div className='py-1 medium'>
        {skills.map((skill, index) => (
          <div key={index}>
            {' '}
            <h1>
              <h1 class='text-primary'>
                {skill} {'Services'}
              </h1>
            </h1>
          </div>
        ))}
      </div>
      <div className='profile-intro'>
        <img
          class='round-img profile-img my-1'
          src={!image ? avatar : image}
          alt=''
        />
        <div className='profile-info'>
          <h2>{name}</h2>

          <h3>Asking Price: {price} ₹/hour</h3>
          <h3>{location && <span>{location}</span>}</h3>
          <div class='icons my-1'>
            {info && info.phone && (
              <p>
                <i class='fas fa-phone' /> {info.phone}
              </p>
            )}
            {info && info.email && (
              <p>
                <i class='fas fa-envelope' /> {info.email}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProfileTop;
