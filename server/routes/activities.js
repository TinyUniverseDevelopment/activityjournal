var express = require('express');
var router = express.Router();
const Activities = require('../models/Activities')
const getTypeTotals = require('../actions/totalTypes')



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

router.get('/length', async (req, res, next) => {
  try {
    const activityLength = await Activities.find({})
    res.json(activityLength.length)
  } catch (error) {
    next(error)
  }
})

/*@Get
  @Get all activities by page with mongoose-paginate
  @Public
*/
router.get('/paginate', async (req, res, next) => {
  if (req.query.page && req.query.type) {
    try {
      if (req.query.type === 'all') {
        const pageOfActivities = await Activities.paginate({}, {
          page: req.query.page,
          limit: 8,
          sort: {
            date: -1
          }
        }).then(result => result.docs)
        res.json(pageOfActivities.map(activity => activity.toJSON()))
      } else {
        const pageOfActivities = await Activities.paginate({
          activityType: req.query.type
        }, {
          page: req.query.page,
          limit: 8,
          sort: {
            date: -1
          }
        }).then(result => result.docs)
        res.json(pageOfActivities.map(activity => activity.toJSON()))
      }
    } catch (error) {
      console.log(error)

    }
  } else if (req.query.page) {
    try {
      const pageOfActivities = await Activities.paginate({}, {
        page: req.query.page,
        limit: 8,
        sort: {
          date: -1
        }
      }).then(result => result.docs)
      res.json(pageOfActivities.map(activity => activity.toJSON()))
    } catch (error) {
      console.log(error)

    }
  } else {
    res.send('page wasnt sent')
  }
})

router.post('/', async (req, res, next) => {
  const body = req.body

  try {
    const count = await getTypeTotals()
    console.log(count)
    const activity = new Activities({
      activity: body.activity,
      activityType: body.activityType,
      startTime: body.startTime,
      endTime: body.endTime,
      countOfTypes: count
    })

    await activity.save()
    res.send('activity added')
  } catch (error) {
    next(error)

  }
})

router.delete('/:id', async (req, res, next) => {
  console.log(req.params.id)
  const id = req.params.id
  try {
    await Activities.findByIdAndDelete(id)
    res.json(`Activity with id: ${id} has been deleted`)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

module.exports = router;