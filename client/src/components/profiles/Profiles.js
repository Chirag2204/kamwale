import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles, getCurrentProfile } from '../../actions/profile';

const Profiles = ({ getProfiles, getCurrentProfile, profile: { profile, profiles, loading }, match }) => {

  const keyword = match.params.keyword;

  useEffect(() => {
    getProfiles(keyword);
    getCurrentProfile();
  }, [getProfiles, keyword, getCurrentProfile]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className='large text-primary text-center'>All Services</h1>
          <p className='lead text-center'>
            <i className='fab fa-connectdevelop' /> Browse one step solution for
            all your Service needs
          </p>
          <div className='profiles'>
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </Fragment>
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
