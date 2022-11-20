import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles, getCurrentProfile } from '../../actions/profile';
import { skillMap } from '../profile-forms/constant';

const Profiles = ({ history, getProfiles, getCurrentProfile, profile: { profile, profiles, loading }, match }) => {

  const { keyword, city } = match.params;
  useEffect(() => {
    getProfiles(keyword, city);
    getCurrentProfile();
  }, [getProfiles, keyword, getCurrentProfile, city]);

  return (
    <Fragment>
      <h1 className='large text-primary text-center'>{keyword || 'All'} Services {city && `in ${city}`} {keyword && skillMap[keyword].icon} </h1>
      <p className='lead text-center'>
        <i className='fab fa-connectdevelop' /> Browse one step solution for
        all your Service needs
      </p>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {keyword && <div className='form-group' style={{ textAlign: 'center' }}>
            <select name='location'
              style={{ width: "200px", padding: "10px", fontSize: "20px" }}
              value={city} onChange={(e) => history.push(`/search/${keyword}/${e.target.value}`)}>
              <option value='' className='text-dark'>
                City
              </option>
              <option value='Indore'>Indore</option>
              <option value='Pune'>Pune</option>
              <option value='Bangalore'>Bangalore</option>
            </select>
          </div>}

          <div style={{
            display: "flex",
            flexWrap: "wrap",
          }}>
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, getProfiles })(
  Profiles
);
