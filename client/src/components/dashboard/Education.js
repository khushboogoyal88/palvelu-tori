import React, { Fragment } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const Education = ({ education }) => {
  const educations = education.map(edu => (
    <tr key={edu._id}>
      <td>{edu.degree}</td>
      <td className='hide-sm'>{edu.description}</td>
      
      <td>
        <button className='btn btn-danger'>Delete</button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>Education Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Degree</th>
            <th className='hide-sm'>Description</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};


export default Education;