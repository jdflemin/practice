import * as express from 'express'
import weightClass from '../model/weightclass';

let router = express.Router()

router.post('/', (req, res) => {
  let wClass = new weightClass()
  wClass.pounds = req.body.pounds;
  wClass.save().then((savedPounds) => res.json(savedPounds))
});

router.get('/', (req, res) => {
  weightClass.find().then((foundWeightClass) => res.json(foundWeightClass))
});

export default router
