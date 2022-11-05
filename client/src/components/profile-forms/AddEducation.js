import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    degree: '',
    location: '',
    description: '',
  });



  const {
    degree,
    location,
    description,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 class='large text-primary'>Add Your Training</h1>
      <p class='lead'>
        Add any formal training that you have
        attained
      </p>
      <p className="small">* = required field</p>
      <form
        class='form'
        onSubmit={(e) => {
          e.preventDefault();
          addEducation(formData, history);
        }}
      >
        <div class='form-group'>
          <div className='form-text'>* Degree or Certificate</div>
          <input
            type='text'
            name='degree'
            value={degree}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div class='form-group'>
          <div className='form-text'>Location</div>
          <input
            type='text'
            name='location'
            value={location}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div class='form-group'>
          <div className='form-text'>Training Description</div>
          <textarea
            name='description'
            cols='30'
            rows='5'
            value={description}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type='submit' class='btn btn-primary my-1' />
        <Link class='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

export default connect(null, { addEducation })(withRouter(AddEducation));
