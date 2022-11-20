import React from 'react';
import Rating from '../layout/Rating';
import { skillMap } from '../profile-forms/constant';
import { LocationBadges } from './LocationBadges';

const ProfileTop = ({
  profile: {
    location,
    locationArray = {},
    skillArray = {},
    skills,
    info,
    price,
    user: { name, avatar },
    image,
    bio,
    rating,
    numReviews,
  },
}) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", }}>
      <div style={{
        background: "white", color: "black", padding: "10px",
        borderRadius: '10px', flex: '4', minWidth: "300px", margin: '10px', position: "relative"
      }}>
        <div style={{ position: "absolute", top: '325px', paddingLeft: "10px" }}>
          <Rating value={rating} text={numReviews} />
        </div>
        <img
          src={!image ? avatar : image}
          alt='' style={{ width: "100%", height: "350px", zIndex: -1 }}
        />
        <div style={{ padding: '20px', paddingTop: "0px", }}>
          <h1 style={{ fontWeight: 900, fontSize: "35px" }}>{name}</h1>
          <p><i className='fas fa-phone' style={{ color: "gray", scale: "2" }} />&nbsp;&nbsp;&nbsp;&nbsp;<span style={{
            "fontSize": "22px"
          }}>{info?.phone}</span></p>
          <p> <i className='far fa-envelope' style={{ color: "gray", scale: "2" }} />&nbsp;&nbsp;&nbsp;&nbsp;<span style={{
            "fontSize": "22px"
          }}>{info?.email}</span></p>
        </div>
      </div>
      <div style={{
        background: "white", color: "black", padding: "10px",
        borderRadius: '10px', flex: '8', minWidth: "300px", margin: '10px'
      }}>

        <div style={{ marginBottom: "10px" }}>
          <div style={{ fontSize: "25px", fontWeight: 900 }}>About </div>
          {bio}        </div>
        <div>
          <div style={{ fontSize: "25px", color: "gray", display: "flex", alignItems: "center" }}>Service Provided:
            <span style={{ fontSize: "25px", color: "black", fontWeight: 900, display: "flex" }}> {skills} {skills && skillMap[skills].icon}</span>
          </div>
          <div>
            <LocationBadges locationArray={skillArray} />
          </div>
        </div>
        <br></br>
        <div>
          <div style={{ fontSize: "25px", color: "gray", display: "flex", alignItems: "center" }}>Location:
            <span style={{ fontSize: "25px", color: "black", fontWeight: 900 }}> {location} </span>
          </div>
          <div>
            <LocationBadges locationArray={locationArray} />
          </div>
        </div>
        <br></br>
        <div>
          <div style={{ fontSize: "20px", color: "gray", display: "flex", alignItems: "center" }}>Average Price:
            <span style={{ fontSize: "30px", color: "black", fontWeight: 900 }}> Rs {price} </span>
          </div>
        </div>
      </div>
    </div>

  )
};


export default ProfileTop;




// return (
//   <div class='profile-top bg-light' style={{ padding: '10px', borderRadius: '10px' }}>
//     <div >
//       {skills.map((skill, index) => (
//         <div key={index}>
//           {' '}
//           <h1>
//             <h1 class='text-primary'>
//               {skill} {'Services'}
//             </h1>
//           </h1>
//         </div>
//       ))}
//     </div>
//     <div className='profile-intro'>
//       <img
//         class='round-img profile-img my-1'
//         src={!image ? avatar : image}
//         alt=''
//       />
//       <div className='profile-info'>
//         <h2>{name}</h2>

//         <h3>Asking Price: {price} ₹/hour</h3>
//         <span style={{ fontSize: '25px', fontWeight: 700 }}>{location}  </span>
//         <LocationBadges locationArray={locationArray} />
//         {/* <LocationBadges locationArray={locationArray} /> */}
//         <br></br>
//         <br></br>
//         <div>Special skills</div>
//         <LocationBadges locationArray={skillArray} />
//         <div class='icons my-1'>
//           {info && info.phone && (
//             <p>
//               <i class='fas fa-phone' /> {info.phone}
//             </p>
//           )}
//           {info && info.email && (
//             <p>
//               <i class='fas fa-envelope' /> {info.email}
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   </div>
// );