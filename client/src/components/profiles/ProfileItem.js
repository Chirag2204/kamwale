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
  console.log(info);
  return (
    <div onClick={actionOnCardClick} style={{
      "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      "maxWidth": "500px",
      flex: "1",
      "minWidth": "300px",
      "margin": "20px",
      "textAlign": "center",
      "fontFamily": "arial", color: 'black',
      background: 'white', position: "relative"
    }}>
      <div style={{ position: "absolute", top: '30px', paddingLeft: "10px" }}>
        <Rating value={rating} text={numReviews} />
      </div>
      <img
        src={!image ? avatar : image}
        alt='' style={{ width: "100%", height: "350px", zIndex: -1 }}
      />
      <div style={{ padding: '20px', paddingTop: "0px", }}>
        <div style={{ display: 'flex', justifyContent: "space-between", fontSize: "22px", color: "gray" }}>
          <div>{location}</div>
          <div>{skills}</div>
        </div>
        <h1>{name}</h1>
        <p>Avg Price: <span style={{
          "color": "grey",
          "fontSize": "22px"
        }}>Rs.{price}</span></p>

        {showLink ? <Link to={`/profile/${_id}`} className='btn my' style={{ border: "1px solid black" }}>
          See Details
        </Link> : <div className='btn my' style={{ border: "1px solid black" }}>
          See Details
        </div>}
      </div>
    </div>
  );
};


export default ProfileItem;


// <div className='profile bg-light' style={{ borderRadius: '10px' }} onClick={actionOnCardClick}>
// <div >
//   <img
//     src={!image ? avatar : image}
//     alt=''
//     className='round-img profile-img'
//   />
// </div>

// <div>
//   <h2>
//     {skills} services in {location}
//   </h2>
//   <LocationBadges locationArray={locationArray} />
//   <br></br>
//   <br></br>
//   <div>Special skills</div>
//   <LocationBadges locationArray={skillArray} />

//   <h3 className='my'>{name}</h3>
//   <p>{price && <span> {price} ₹/hour</span>}</p>
//   {showLink && <Link to={`/profile/${_id}`} className='btn btn-white my'>
//     See Details
//   </Link>}
// </div>
// <div class='icons my-1 hide-sm'>
//   {info && info.phone && (
//     <p>
//       <i class='fas fa-phone' /> {info.phone}
//     </p>
//   )}
//   {info && info.email && (
//     <p>
//       <i class='fas fa-envelope ' /> {info.email}
//     </p>
//   )}
// </div>
// </div>
