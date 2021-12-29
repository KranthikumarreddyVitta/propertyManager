const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController')

router.route('/').get(propertyController.getAllProperty).post(propertyController.addProperty)
router.route('/addAll').post(propertyController.addAllProperty)
router.route('/:id').patch(propertyController.updateProperty).get(propertyController.getPropertyById)


module.exports = router;