import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';

const Education = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.degree}</td>
      <td>{edu.description}</td>

      <td>
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
      <table className='table'>
        <thead>
          <tr>
            <th>Degree</th>
            <th>Description</th>
            
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};


export default connect(null, { deleteEducation })(Education);