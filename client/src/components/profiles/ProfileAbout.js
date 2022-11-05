import React, { Fragment } from 'react';


const ProfileAbout = ({
  profile: {
    bio,
    user: { name },
  },
}) => (
  <div class='profile-about bg-white p-2'>
    {bio && (
      <Fragment>
        <p>{bio}</p>
      </Fragment>
    )}
  </div>
);


export default ProfileAbout;
