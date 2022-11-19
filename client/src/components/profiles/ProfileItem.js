import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../layout/Rating'
import { LocationBadges } from './LocationBadges';

const ProfileItem = ({
  actionOnCardClick,
  showLink = true,
  profile: {
    user: { _id, name, avatar },
    locationArray = {},
    skillArray = {},
    image,
    price,
    info,
    location,
    skills,
    rating,
    numReviews,
  },
}) => {
  return (
    <div className='profile bg-light' style={{ borderRadius: '10px' }} onClick={actionOnCardClick}>
      <div >
        <img
          src={!image ? avatar : image}
          alt=''
          className='round-img profile-img'
        />
        <Rating value={rating} text={`(${numReviews})`} />
      </div>

      <div>
        <h2>
          {skills} services in {location}
        </h2>
        <LocationBadges locationArray={locationArray} />
        <br></br>
        <br></br>
        <div>Special skills</div>
        <LocationBadges locationArray={skillArray} />

        <h3 className='my'>{name}</h3>
        <p>{price && <span> {price} ₹/hour</span>}</p>
        {showLink && <Link to={`/profile/${_id}`} className='btn btn-white my'>
          See Details
        </Link>}
      </div>
      <div class='icons my-1 hide-sm'>
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
