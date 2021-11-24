const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const cors = require('cors');
const Person = require('./models/person');

// configure morgan to stringyfy post requests body
app.use(cors());
app.use(express.static('build'));
app.use(express.json());

morgan.token('data', (req) => JSON.stringify(req.body));

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'));

const errorHandler = (error, request, response, next) => {
  // console.error(error.message);

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' });
  } if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message });
  }

  next(error);
  return response.status(500).json({ error: 'something went wrong' });
};

app.get('/api/persons', (request, response, next) => {
  Person.find({}).then((persons) => {
    response.json(persons);
  }).catch((error) => next(error));
});

app.get('/info', (request, response) => {
  Person.countDocuments({}).then((count) => {
    response.send(`<p>Phonebook has info for ${count} people</p><p>${new Date()}</p>`);
  });
  // response.send(`<p>Phonebook has info for ${persons.length} people</p> <p>${new Date()}</p>`);
});

// this has to be the last loaded middleware.
app.use(errorHandler);
// get single person
app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id).then((person) => {
    if (person) {
      response.json(person);
    } else {
      response.status(404).end();
    }
  }).catch((error) => next(error));
});

// delete single person
app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id).then(() => {
    response.status(204).end();
  }).catch((error) => next(error));
});

// create new person
app.post('/api/persons', (request, response, next) => {
  const { body } = request;
  // if (!body.name || !body.number) {
  //   return response.status(400).json({
  //     error: 'name or number missing',
  //   });
  // }
  const person = new Person({
    name: body.name,
    number: body.number,
  });
  person.save().then((savedPerson) => {
    response.json(savedPerson);
  }).catch((error) => next(error));
});

// update single person
app.put('/api/persons/:id', (request, response, next) => {
  const { body } = request;
  const person = {
    name: body.name,
    number: body.number,
  };
  Person.findByIdAndUpdate(request.params.id, person, { new: true, runValidators: true, context: 'query' }).then((updatedPerson) => {
    response.json(updatedPerson);
  }).catch((error) => next(error));
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

app.use(unknownEndpoint);
app.use(errorHandler);

const { PORT } = process.env;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}`);
});
