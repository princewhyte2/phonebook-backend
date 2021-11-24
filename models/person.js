/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
// const url = `mongodb+srv://Princewhyte2:${password}@cluster0.8jxlg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const url = process.env.MONGODB_URI;

console.log('connecting to', url);

mongoose.connect(url)
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  });

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    unique: true,
    required: true,
    uniqueCaseInsensitive: true,
  },
  number: {
    type: String,
    minlength: 8,

  },
});

personSchema.plugin(uniqueValidator);

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Person', personSchema);
