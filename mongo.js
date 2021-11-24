// import mongoose
const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1);
}
const password = process.argv[2];

// HdkceiB4xowEahor
const url = `mongodb+srv://Princewhyte2:${password}@cluster0.8jxlg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(url);

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model('Person', personSchema);

if (process.argv.length === 3) {
  // get all persons from mongoose
  Person.find({}).then((result) => {
    console.log('phonebook:');
    result.forEach((person) => {
      console.log(person.name, person.number);
    });
    mongoose.connection.close();
    process.exit(0);
  }).catch((error) => {
    console.log(error);
    mongoose.connection.close();
    process.exit(1);
  });
}

const name = process.argv[3];
const number = process.argv[4];
const person = new Person({
  name,
  number,
});

person.save().then((response) => {
  console.log(`added ${name} number ${number} to phonebook`);
  mongoose.connection.close();
});
