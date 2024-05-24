const personName = "Joe";
const personAge = 25;

const obj = {
  personName: personName,
  personAge: personAge,
};

const obj1 = { personName, personAge };

const createPerson = (personName, personAge) => {
  console.log({ personName, personAge });
};

createPerson(personName, personAge);
