import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import FileBase from 'react-file-base64';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile'
import { locationMap, skillMap } from './constant';

const CreateProfile = ({ createProfile, history, auth: { user } }) => {
  const [formData, setFormData] = useState({
    price: '',
    location: 'Indore',
    status: '',
    skills: '',
    bio: '',
    phone: '',
    email: '',
    image: '',
    policeVerificationImage: '',
    addharImage: '',
    locationArray: locationMap['Indore'],
    skillArray: {}
  });

  const [displayContactlInputs, toggleContactInputs] = useState(true);




  const { price, location, skills, bio, phone, email, locationArray, skillArray } = formData;

  const onChange = (e) => {
    if (e.target.name === 'location') {
      setFormData({ ...formData, [e.target.name]: e.target.value, locationArray: locationMap[e.target.value] });
      return
    }

    if (e.target.name === 'skills') {
      setFormData({ ...formData, [e.target.name]: e.target.value, skillArray: skillMap[e.target.value].array });
      return
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onChangeLocationArray = (name, value) => {
    setFormData({ ...formData, locationArray: { ...locationArray, [name]: value } });
  }


  const onChangeSkillArray = (name, value) => {
    setFormData({ ...formData, skillArray: { ...skillArray, [name]: value } });
  }


  const onSumbit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };
  return (
    <Fragment>
      <h1 className='large text-primary'>Create Profile</h1>

      <p className='lead'>
        <i className='fas fa-user' /> Welcome {user && user.name}
      </p>

      <form className='form' onSubmit={(e) => onSumbit(e)}>
        <div className='form-group'>
          <div className='form-text'>
            * Give us an idea of what kind of services you want to provide
          </div>
          <select name='skills' value={skills} onChange={(e) => onChange(e)}>
            <option value='0'>Select the Service you want to provide.</option>
            {
              Object.keys(skillMap).map(skillName => {
                return <option value={skillName}>{skillName}</option>

              })
            }
          </select>
        </div>

        {skills && <div>
          <div>Sub Skills of {skills}</div>
          <div style={{
            display: "flex",
            flexWrap: "wrap"
          }}>
            {Object.keys(skillArray).map(skillName => {
              return <div style={{ minWidth: "150px", textAlign: 'left' }}>
                <input type="checkbox" id="skillArray" name="skillArray" value={skillName} checked={skillArray[skillName]}
                  onChange={(e) => { onChangeSkillArray(skillName, 0 + e.target.checked) }} />
                <label for="skillArray">{skillName}</label><br></br>
              </div>
            })}
          </div>
        </div>}

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

        <div>
          <div>Locations in {location}</div>
          <div style={{
            display: "flex",
            flexWrap: "wrap"
          }}>
            {Object.keys(locationArray).map(locationName => {
              return <div style={{ minWidth: "150px", textAlign: 'left' }}>
                <input type="checkbox" id="locationArray" name="locationArray" value={locationName} checked={locationArray[locationName]}
                  onChange={(e) => { onChangeLocationArray(locationName, 0 + e.target.checked) }} />
                <label for="locationArray">{locationName}</label><br></br>
              </div>
            })}
          </div>
        </div>

        <div className='form-group'>
          <div className='form-text'>A short description of yours services</div>
          <textarea
            name='bio'
            value={bio}
            cols='30'
            rows='5'
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className='my-2 text-center'>
          <button
            onClick={() => toggleContactInputs(!displayContactlInputs)}
            type='button'
            className='btn btn-light text-center'
          >
            Add Contact Details
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

        <div className='form-group text-center'>
          <label className='form-text text-center'>
            Add profile picture:{' '}
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

        <input type='submit' className='btn btn-primary my-1' />

        <p className='small'>* = required field</p>
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { createProfile })(withRouter(CreateProfile))

