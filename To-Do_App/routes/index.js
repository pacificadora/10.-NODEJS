const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log("routes loaded");

//displaying the all the task present in the database
router.get('/', homeController.home);

//adding task in the db
router.post('/add-task', homeController.add);

//deleting task from the database;
router.get('/delete-task', homeController.delete);

module.exports = router;