const createPerson = (name, age) => {
  const person = {
    name: name,
    age: age
  };
  return person;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  //
};

const hasProperty = (property, object) => {
  //
};

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  }
};

const getAges = people => {
  //
};

const findByName = (name, people) => {
  //
};

const findHondas = cars => {
  // your code here
};

const averageAge = people => {
  // your code here
};

const createTalkingPerson = (name, age) => {
  // your code here
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
