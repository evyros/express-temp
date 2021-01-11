
const express = require('express');
const Tasks = require('../controllers/tasks');
const routes = express.Router();

routes.get('/task', Tasks.getAll);
routes.put('/task', Tasks.create);
routes.delete('/task/:id', Tasks.delete);
routes.post('/task/:id', Tasks.edit);


module.exports = routes;
