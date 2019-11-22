import React from 'react';
import { Alert } from 'react-bootstrap';

const FormAlert = ({ validateAlert }) => {
  const ShowAlerts = () => {
    validateAlert.map(field => {
      return <Alert varient='danger'>{field}</Alert>;
    });
  };

  return (
    <div>
      {ShowAlerts()}
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
