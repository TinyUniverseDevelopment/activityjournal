import React from 'react';

const ShowActivity = ({ activity }) => {
  let style = {
    card_container: {
      margin: 20,
      padding: 0,
      borderRadius: '5px',
      boxShadow: '0px 2px 5px rgba(12,12,12,0.7)',
      width: '100%'
    },
    card_top: {
      borderTopLeftRadius: '5px',
      borderTopRightRadius: 5,
      background: 'linear-gradient(120deg, #f7b733, #EEAA7B)',
      height: '100px',
      margin: 0,
      padding: 5,
      color: 'black'
    }
  };
  style.card_top.color = activity.color;
  return (
    <div style={style.card_container} className='card_container'>
      <div style={style.card_top} className='card_top'>
        <div className='card_activity-type-logo'>{activity.color}</div>
        <div className='card_activity-type'>
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
        </div>
      </div>
    </div>
  );
};

export default ShowActivity;
