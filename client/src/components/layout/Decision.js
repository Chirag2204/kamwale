import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';

const Decision = ({getCurrentProfile, profile: { profile, loading },auth }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  
  return loading? (
    <Spinner />
  ) : auth.user.isSeller ? (
    <Redirect to='/dashboard' />
  ) : (
    <Redirect to='/profiles' />
  );

};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});
export default connect(mapStateToProps, {getCurrentProfile})(Decision);
