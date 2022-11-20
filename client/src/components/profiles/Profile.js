import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileEducation from './ProfileEducation';
import Reviews from '../layout/Reviews';
import Spinner from '../layout/Spinner';
import { getProfileById } from '../../actions/profile';
import { LocationBadges } from './LocationBadges';
import { gg } from '../profile-forms/constant';
import Rating from '../layout/Rating';


const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, []);

  return (
    (localStorage.getItem('token') === null || localStorage.getItem('token') === undefined || localStorage.getItem('token') === '') ?
      <div style={{ textAlign: "center", height: "400px" }}>
        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
          Please login to see full profile
        </h3>
        <Link to="/login" style={{ border: "1px solid orange", padding: "10px" }} >Go To Login</Link>
      </div> :
      <Fragment>
        {profile === null || loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <Link to='/profiles' className='btn btn-light' style={{ margin: '10px', }}>
              Back To Profiles
            </Link>
            {auth.isAuthenticated &&
              auth.loading === false &&
              auth.user._id === profile.user._id && (
                <Link to='/edit-profile' className='btn btn-dark' style={{ margin: '10px', }}>
                  Edit Profile
                </Link>
              )}

            <div >
              <ProfileTop profile={profile} />
              <div style={{
                background: "white", color: "black", padding: "10px",
                borderRadius: '10px', margin: '10px',
              }}>
                <h2 className='text-primary'>Formal Training</h2>
                {profile.education.length > 0 ? (
                  <Fragment>
                    {profile.education.map((education) => (
                      <ProfileEducation
                        key={education._id}
                        education={education}
                      />
                    ))}
                  </Fragment>
                ) : (
                  <h4>No training information.</h4>
                )}
              </div>
              <Reviews profile={profile} />
            </div>
          </Fragment>
        )}
      </Fragment>
  );
};



const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
