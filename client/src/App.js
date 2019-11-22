import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//Bootstrap components
import { Pagination } from 'react-bootstrap';

//Custom components
import ShowActivity from './components/ShowActivity';
import Header from './components/Header';
import AddActivity from './components/AddActivity';
import SortSelect from './components/SortSelect';
import Chart from './components/Chart';
import activityService from './service/activityservice';

//Images
import gameLogo from './images/video-game-transparent-4.png';
import codeLogo from './images/coding.png';
import cookLogo from './images/cook.png';
import workLogo from './images/work.png';
import exerciseLogo from './images/exercise.png';

import './App.css';

// Self host typefaces
require('typeface-montserrat');

const App = () => {
  // States

  const [activitiesPage, setActivitiesPage] = useState([]);
  const [activityLength, setLength] = useState(0);
  const [update, setUpdate] = useState(false);
  const [page, setPage] = useState(1);

  // get a logo and color from ActivityType in DB
  const getLogoAndColor = type => {
    switch (type) {
      case 'code':
        return { color: 'green', icon: codeLogo };

      case 'work':
        return { color: 'blue', icon: workLogo };
      case 'exercise':
        return { color: 'red', icon: exerciseLogo };
      case 'cook':
        return { color: 'yellow', icon: cookLogo };
      case 'game':
        return { color: 'grey', icon: gameLogo };

      default:
        return { color: 'white', icon: '' };
    }
  };

  useEffect(() => {
    activityService
      .getLength()
      .then(activity => setLength(activity))
      .catch(error => console.log(error));
    activityService
      .getPage(page)
      .then(activity => setActivitiesPage(activity))
      .catch(error => console.log(error));
  }, [update, page]);

  const displayPageNumbers = () => {
    const numberOfPages = Math.ceil(activityLength / 8);
    let items = [];
    for (let number = 1; number <= numberOfPages; number++) {
      items.push(
        <Pagination.Item
          onClick={pageClickHandler}
          name={number}
          key={number}
          active={number === page}
        >
          {number}
        </Pagination.Item>
      );
    }
    if (activityLength !== 0) {
      return <Pagination>{items}</Pagination>;
    } else {
      return;
    }
  };
  const pageClickHandler = e => {
    setPage(Number(e.target.name));
  };

  const displayActivities = () => {
    if (activitiesPage === []) {
      return <div>Loading</div>;
    } else {
      return activitiesPage.map(activity => {
        const logoColor = getLogoAndColor(activity.activityType);
        activity.color = logoColor.color;
        activity.icon = logoColor.icon;

        return (
          <ShowActivity
            setUpdate={setUpdate}
            update={update}
            key={activity.id}
            activity={activity}
          />
        );
      });
    }
  };

  return (
    <div>
      <Header />
      <SortSelect setLength={setLength} setActivitiesPage={setActivitiesPage} />
      <div className='show-activities'>{displayActivities()}</div>
      <div>{displayPageNumbers()}</div>
      <div>
        <Chart />
      </div>

      <AddActivity setUpdate={setUpdate} update={update} />
    </div>
  );
};

export default App;
