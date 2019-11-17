var express = require('express');
var router = express.Router();
const Activities = require('../models/Activities')

/*@GET 
  @get all activities from DB.
  @Public */
router.get('/', async (req, res, next) => {
  try {
    const activities = await Activities.find({})

    res.json(activities.map(activity => activity.toJSON()))
  } catch (error) {
    next(error)
  }

});

router.post('/', async (req, res, next) => {
  const body = req.body
  try {
    const activity = new Activities({
      activity: body.activity,
      activityType: body.activityType,
      startTime: body.startTime,
      endTime: body.endTime
    })
    await activity.save()
    res.send('activity added')
  } catch (error) {
    next(error)

  }
})

module.exports = router;