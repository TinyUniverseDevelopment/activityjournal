import React from 'react';

import { Button } from 'react-bootstrap';
import activityservice from '../service/activityservice';

const ShowActivity = ({ activity, pullActivities, setUpdate, update }) => {
  let style = {
    card_container: {
      margin: 10,
      padding: 0,
      borderRadius: '5px',
      boxShadow: '0px 2px 5px rgba(12,12,12,0.7)',
      width: '75%'
    },
    card_top: {
      borderTopLeftRadius: '5px',
      borderTopRightRadius: 5,
      background: 'linear-gradient(120deg, #f7b733, #EEAA7B)',
      height: '100px',
      margin: 0,
      padding: 5,
      color: 'black'
    },
    card_activity_type: {
      textAlign: 'center',
      fontSize: '2vw',
      fontFamily: 'Montserrat',
      fontWeight: 300
    }
  };
  style.card_top.color = activity.color;

  // manip date
  const date = new Date(activity.date);
  const month = date.toDateString();

  const deleteItem = async () => {
    try {
      await activityservice.removeActivity(activity.id);
    } catch (error) {
      console.log(error);
    } finally {
      setUpdate(!update);
    }
  };
  console.log(pullActivities);
  return (
    <div style={style.card_container} className='card_container'>
      <div style={style.card_top} className='card_top'>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 35% 1fr' }}>
          <div className='card_activity-type-logo'>
            <img width='40px' src={activity.icon} alt={activity.activityType} />
          </div>
          <div></div>
          <div style={{ textAlign: 'right' }} className='card_delete'>
            <Button onClick={deleteItem}>X</Button>
          </div>
        </div>

        <div style={style.card_activity_type} className='card_activity_type'>
          <p>{activity.activityType}</p>
        </div>
      </div>
      <div className='card_bottom'>
        <div className='card_activity-body'>
          <p>{activity.activity}</p>
        </div>
        <div className='card_times'>
          <div className='card_start-time'>{activity.startTime}</div>
          <div className='card_end-time'>{activity.endTime}</div>
          <div className='card_total-time'></div>
          <div className='_card-date'>{month}</div>
        </div>
      </div>
    </div>
  );
};

export default ShowActivity;
