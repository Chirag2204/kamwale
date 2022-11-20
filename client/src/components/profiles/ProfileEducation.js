import React from 'react';

const ProfileEducation = ({
  education: { degree, location, description }, bio
}) => (
  <div style={{ borderTop: "1px solid gray" }}>
    <h3 className='text-dark'>{degree}</h3>
    <p>
      <strong>Location: </strong> {location}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);


export default ProfileEducation;
