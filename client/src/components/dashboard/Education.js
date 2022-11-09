import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';

const Education = ({ education = [], deleteEducation }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td style={{ background: 'white', color: 'black' }}>{edu.degree}</td>
      <td style={{ background: 'white', color: 'black' }}>{edu.description}</td>

      <td style={{ background: 'white' }}>
        <button
          onClick={() => deleteEducation(edu._id)}
          className='btn btn-danger'
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      {education.length > 0 && <table className='table' >
        <thead>
          <tr>
            <th style={{ color: 'black' }} >Degree</th>
            <th style={{ color: 'black' }} >Description</th>
            <th style={{ color: 'black', width: '100px' }} >Action</th>

          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>}
    </Fragment>
  );
};


export default connect(null, { deleteEducation })(Education);