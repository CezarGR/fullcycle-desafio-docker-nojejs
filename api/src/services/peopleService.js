const { insert, getAll } = require("../repositories/peopleRepository")
const { faker } = require('@faker-js/faker');

async function createRandomPeople() {
    await insert(
        faker.person.lastName()
    );
}

async function getPeople() {
    return await getAll();
}

module.exports = {
    createRandomPeople, 
    getPeople
}