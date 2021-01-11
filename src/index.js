
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const tasks = [];
let counter = 0;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.put('/task', (req, res) => {
	counter++;
	tasks.push({
		id: counter,
		title: req.body.title
	});
	res.sendStatus(201);
});

app.get('/task', (req, res) => {
	res.json(tasks);
});

app.delete('/task/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const index = tasks.findIndex(t => t.id === id);
	if(index < 0) {
		res.sendStatus(404);
		return;
	}
	tasks.splice(index, 1);
	res.sendStatus(204);
});

app.listen(4000, () => {
	console.log('Listening at http://localhost:4000');
});
