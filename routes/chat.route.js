const chatRouter = require("express").Router();
const { newMesseges, getMesseges,} = require('../controllers/integration_controllers');

chatRouter.get('/:stuID/:insID', getMesseges)
chatRouter.post('/messeges', newMesseges)

module.exports = chatRouter;
