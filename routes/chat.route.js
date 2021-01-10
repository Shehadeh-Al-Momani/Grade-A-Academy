const chatRouter = require("express").Router();
const { newMesseges, getMesseges, getUsers } = require('../controllers/main-controller');

chatRouter.post('/messeges', newMesseges)

chatRouter.get('/:stuID/:insID', getMesseges)

chatRouter.get('/users/:id', getUsers)

module.exports = chatRouter;

