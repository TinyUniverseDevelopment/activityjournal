const activitiesRouter = require('express').Router();
const Activity = require('../models/Activities');

console.log('has been brought in');

activitiesRouter.get('/', async (req, res) => {
  CredentialsContainer.send('Get works');
  try {
    const activites = await Activity.find({});
    res.json(activites.map(activity => activity.toJSON()));
  } catch (error) {
    res.status(400).send(error.message);
  }
});

activitiesRouter.get('/:type', async (req, res) => {
  try {
    const activitiesByType = await Activity.find(req.params.type);
    res.json(activites.map(activity => activity.toJSON()));
  } catch (error) {
    res.status(400).send(error.message);
  }
});

activitiesRouter.post('/', async (req, res) => {
  const body = req.body;

  const activity = new Activity({
    activity: body.activity,
    startTime: body.StartTime,
    endTime: body.endTime,
    date: date()
  });
  try {
    await activity.save();
    res.json(activity);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = activitiesRouter;
