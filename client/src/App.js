import React, { useEffect, useState } from 'react';

import ShowActivity from './components/ShowActivity';
import Header from './components/Header';

import activityService from './service/activityservice';

import './App.css';

const App = () => {
  const [activities, setActivities] = useState([]);
  //const [typeColor, setTypeColor] = useState('');

  const getLogoAndColor = type => {
    switch (type) {
      case 'coding':
        return 'green';

      case 'work':
        return 'blue';
      case 'exercise':
        return 'red';

      default:
        return 'white';
    }
  };

  useEffect(() => {
    activityService
      .getAll()
      .then(activity => setActivities(activity))
      .catch(error => console.log(error));
  }, []);
  return (
    <div>
      <Header />
      <div className='show-activities'>
        {activities.map(activity => {
          activity.color = getLogoAndColor(activity.activityType);

          return <ShowActivity key={activity.id} activity={activity} />;
        })}
      </div>
    </div>
  );
};

export default App;
