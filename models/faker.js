const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");

const userSchema = new mongoose.Schema({
  prenom: { type: String, required: true },
  nom: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: String, required: true },
  rue: { type: String, required: true },
  ville: { type: String, required: true },
  pays: { type: String, required: true },
  avatar: { type: String, required: true },
});

const createUser = () => ({
  prenom: faker.lorem.lines(2),
  nom : faker.lorem.lines(2),
  age : faker.lorem.lines(2),
  email : faker.lorem.lines(2),
  rue : faker.lorem.lines(2),
  ville : faker.lorem.lines(2),
  pays : faker.lorem.lines(2),
});

const generateUsers = (nombre) => Array.from({ length: nombre }, createUser);

async function remplirBasedeDonnee(nombre = 10) {
  const UserFaker = mongoose.model("UserFaker", userSchema);
  try {
    const notes = generateUsers(nombre);
    await UserFaker.insertMany(users);
    return true;
  } catch(error) {
    console.error('Erreur pour remplir la base de donnée: ', error);
    throw error;
  }
}

remplirBasedeDonnee();
// module.exports=mongoose.model = mongoose.model('User', userSchema);
module.exports = {
  UserFaker : mongoose.model('UserFaker', userSchema),
  remplirBasedeDonnee
};