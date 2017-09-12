const express = require('express');
const bodyParser = require('body-parser');
const messagesController = require('./controllers/messages_controllers.js')

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'));
const baseUrl = '/api/messages';

app.post(baseUrl, messagesController.create);
app.get(baseUrl, messagesController.read);
app.put(`${baseUrl}/:id`, messagesController.update);
app.delete(`${baseUrl}/:id`, messagesController.delete);


const port = 3000;
app.listen( port, () => {console.log('I am listening');});
