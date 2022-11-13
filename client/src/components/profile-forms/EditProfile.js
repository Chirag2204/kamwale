
import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import FileBase from 'react-file-base64';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile, deleteAccount } from '../../actions/profile';
import Education from '../dashboard/Education'
import Spinner from '../layout/Spinner';
import { AccordionComponent } from '../components/accordion';

const EditProfile = ({
  profile: { profile, loading },
  auth: { user },
  createProfile,
  getCurrentProfile,
  deleteAccount,
  history,
}) => {
  const [formData, setFormData] = useState({
    price: '',
    location: '',
    status: '',
    skills: '',
    bio: '',
    phone: '',
    email: '',
    image: '',
    policeVerificationImage: '',
    addharImage: ''
  });

  const [displayContactlInputs, toggleContactInputs] = useState(false);

  useEffect(() => {
    if (!loading)
      setFormData({
        location: !profile?.location ? '' : profile?.location,
        skills: !profile?.skills ? '' : profile?.skills,
        price: !profile?.price ? '' : profile?.price,
        bio: !profile?.bio ? '' : profile?.bio,
        phone: !profile?.info ? '' : profile?.info?.phone,
        email: !profile?.info ? '' : profile?.info?.email,
        image: !profile?.image ? '' : profile?.image,
        policeVerificationImage: !profile?.policeVerificationImage ? '' : profile?.policeVerificationImage,
        addharImage: !profile?.addharImage ? '' : profile?.addharImage,
      });
  }, [loading])

  useEffect(() => {
    getCurrentProfile();
  }, []);

  const { price, location, skills, bio, phone, email, image, policeVerificationImage, addharImage } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSumbit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (loading) ? <Spinner /> : (
    <Fragment>
      <h1 className='large text-primary text-center'>Edit Profile</h1>
      <h2>
        {
          profile?.verificationStatus === 'PENDING' && <div style={{ textAlign: "center" }}>We are working on your profile verification</div>
        }
      </h2>
      <br></br>
      <br></br>
      <br></br>
      <p className='text-center lead'>
        <i className='fas fa-user' /> Welcome {user && user.name}
      </p>

      <div className='text-center'>
        {' '}
        <img
          class='round-img avatar-img my-1'
          src={!image ? profile?.user?.avatar : image}
          alt='profile-image'
        />
      </div>

      <form className='form' onSubmit={(e) => onSumbit(e)}>
        <div className='form-group my-2'>
          <label className='form-text text-center'>
            Edit profile image:{'  '}
            <FileBase
              id='image'
              type='file'
              multiple={false}
              onDone={({ base64 }) =>
                setFormData({ ...formData, image: base64 })
              }
            />
          </label>
        </div>

        <div className='form-group'>

          <div className='form-group'>
            <div className='form-text'>
              * Give us an idea of what kind of services you want to provide
            </div>
            <select name='skills' value={skills} onChange={(e) => onChange(e)}>
              <option value='0'>
                * Select the Service you want to provide.
              </option>
              <option value='Baby sitting'>Baby sitting</option>
              <option value='Plumbing'>Plumbing</option>
              <option value='House Keeping'>House Keeping</option>
              <option value='Tutoring'>Tutoring</option>
              <option value='Electrical Services'>Electrical Services</option>
              <option value='Moving and delivery'>Moving and delivery</option>
              <option value='Personal Care'>
                Personal Care(like haicut, manicure)
              </option>
              <option value='Catering Services'>Catering Services</option>
              <option value='Other'>Other</option>
            </select>
          </div>

          <div className='form-group'>
            <div className='form-text'>*Price you wanna ask(per hour).</div>
            <input
              type='text'
              name='price'
              value={price}
              onChange={(e) => onChange(e)}
            />
          </div>


          <div className='form-group'>
            <div className='form-text'>*Service Location (eg. Indore, Pune, Bangalore etc)</div>
            <select name='location' value={location} onChange={(e) => onChange(e)}>
              <option value='Indore'>Indore</option>
              <option value='Pune'>Pune</option>
              <option value='Bangalore'>Bangalore</option>
            </select>
          </div>

          <div className='form-group'>
            <div className='form-text'>
              A brief description of yours services
            </div>
            <textarea
              name='bio'
              value={bio}
              cols='30'
              rows='5'
              onChange={(e) => onChange(e)}
            />
          </div>

          <div className='my-2'>
            <button
              onClick={() => toggleContactInputs(!displayContactlInputs)}
              type='button'
              className='btn btn-light'
            >
              <i className='fas fa-pen text-primary' /> Edit Contact Details
            </button>
          </div>

          {displayContactlInputs && (
            <Fragment>
              <div className='form-group contact-input'>
                <i className='fas fa-phone fa-2x' />
                <input
                  type='text'
                  placeholder='Phone Number'
                  name='phone'
                  value={phone}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className='form-group contact-input'>
                <i className='far fa-envelope fa-2x' />
                <input
                  type='text'
                  placeholder='Email ID'
                  name='email'
                  value={email}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </Fragment>
          )}

          <div className='form-group'>
            <Link to='/add-education' className='btn btn-light'>
              <i className='fas fa-graduation-cap text-primary' /> Add Training
            </Link>
          </div>

          <Education education={profile?.education} />

          <div className='form-group text-center'>
            <label className='form-text text-center'>
              Add Your Addhar Card Image for profile varification (Clear and Both side):{' '}
              <FileBase
                id='addhar image'
                type='file'
                multiple={false}
                onDone={({ base64 }) =>
                  setFormData({ ...formData, addharImage: base64 })
                }
              />
            </label>
          </div>
          <AccordionComponent
            title='Addhar Card'
            imageSrc={addharImage}
          />
          <br></br>
          <div className='form-group text-center'>
            <label className='form-text text-center'>
              Add Your Police Verification Image for profile varification (Clear):{' '}
              <FileBase
                id='police verification'
                type='file'
                multiple={false}
                onDone={({ base64 }) =>
                  setFormData({ ...formData, policeVerificationImage: base64 })
                }
              />
            </label>
          </div>
          <AccordionComponent
            title='Police Verification Image'
            imageSrc={policeVerificationImage}
          />
        </div>
        <input type='submit' className='btn btn-primary my-1' />
      </form>

      <p className='small'>* = required field</p>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile, deleteAccount })(
  withRouter(EditProfile)
);
