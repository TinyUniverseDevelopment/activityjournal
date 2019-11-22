import React from 'react';
import { Alert } from 'react-bootstrap';

const FormAlert = ({ validateAlert }) => {
  return (
    <div>
      {validateAlert.map((field, id) => (
        <Alert key={id} variant='danger'>
          {' '}
          {field}
        </Alert>
      ))}
    </div>
  );
};

export default FormAlert;
