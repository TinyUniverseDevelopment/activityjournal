import React from 'react';
import { Form } from 'react-bootstrap';
import activityService from '../service/activityservice';

const SortSelect = ({ setLength, setActivitiesPage }) => {
  const filterHandler = async e => {
    try {
      const res = await activityService.getPage(1, e.target.value);
      setActivitiesPage(res);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  return (
    <div>
      <Form.Control as='select' onChange={filterHandler}>
        <option value='all'>Show All</option>
        <option value='game'>Games</option>
        <option value='code'>Code</option>
        <option value='work'>Work</option>
        <option value='cook'>Cook</option>
        <option value='exercise'>Exercise</option>
      </Form.Control>
    </div>
  );
};

export default SortSelect;
