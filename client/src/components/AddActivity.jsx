import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import activityService from '../service/activityservice';
import FormAlert from './FormAlert';

const AddActivity = ({ update, setUpdate }) => {
  // States holding form values
  // const [formActivity, setFormActivity] = useState('');
  // const [formActivityType, setFormActivityType] = useState('');
  // const [formStartTime, setFormStartTime] = useState('');
  // const [formEndTime, setFormEndTime] = useState('');
  const [validateAlert, setValidateAlert] = useState([]);

  const [formData, setFormData] = useState({
    activity: '',
    type: '',
    start: '',
    end: ''
  });

  // helper Functions

  const onChangeHandler = e => {
    setValidateAlert([]);
    let formDataObj = { ...formData };
    formDataObj[e.target.name] = e.target.value;

    setFormData(formDataObj);
  };

  const validator = () => {
    let validateOutput = [];
    let isError = false;

    if (formData.activity === '') {
      validateOutput.push('Activity field can not be empty');
      isError = true;
    }
    if (formData.type === '') {
      validateOutput.push('Please choose a activity type');
      isError = true;
    }
    if (formData.start === '') {
      validateOutput.push('Please Choose a valid start time');
      isError = true;
    }
    if (formData.end === '') {
      validateOutput.push('Please choose a valid end time');
      isError = true;
    }
    console.log(validateOutput);
    setValidateAlert([...validateOutput]);
    return isError;
  };
  const submitHandler = async e => {
    e.preventDefault();

    if (validator()) {
      return;
    } else {
      let actObj = {
        activity: formData.activity,
        activityType: formData.type,
        startTime: formData.start,
        endTime: formData.end
      };
      try {
        await activityService.activityPost(actObj);
      } catch (error) {
        console.log(error);
      } finally {
        setFormData({ activity: '', type: '', start: '', end: '' });
        setUpdate(!update);
      }
    }
  };
  return (
    <div className='align-middle w-25 p-3 rounded'>
      <FormAlert validateAlert={validateAlert} />
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='formActivity'>
          <Form.Label>Activity</Form.Label>
          <Form.Control
            onChange={onChangeHandler}
            name='activity'
            type='text'
            placeholder='Enter activity'
            value={formData.activity}
          />
        </Form.Group>
        <Form.Group controlId='formActivityType'>
          <Form.Label>Type of activity</Form.Label>
          <Form.Control
            as='select'
            name='type'
            value={formData.activityType}
            onChange={onChangeHandler}
          >
            <option value='code'>Code</option>
            <option value='work'>Work</option>
            <option value='game'>Games</option>
            <option value='exercise'>Exercise</option>
            <option value='cook'>Cook</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='formStartTime'>
          <Form.Label>Time when started</Form.Label>
          <Form.Control
            name='start'
            onChange={onChangeHandler}
            value={formData.startTime}
            type='time'
          />
        </Form.Group>
        <Form.Group controlId='formEndTime'>
          <Form.Label>Time when finished</Form.Label>
          <Form.Control
            value={formData.endTime}
            name='end'
            onChange={onChangeHandler}
            type='time'
            placeholder='11:00PM'
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddActivity;
