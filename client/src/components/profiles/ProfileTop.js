import React from 'react';
import { LocationBadges } from './LocationBadges';

const ProfileTop = ({
  profile: {
    location,
    locationArray = {},
    skills,
    info,
    price,
    user: { name, avatar },
    image
  },
}) => {
  return (
    <div class='profile-top bg-light' style={{ padding: '10px', borderRadius: '10px' }}>
      <div >
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
          <span style={{ fontSize: '25px', fontWeight: 700 }}>{location}  </span>
          <LocationBadges locationArray={locationArray} />
          {/* <LocationBadges locationArray={locationArray} /> */}
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
