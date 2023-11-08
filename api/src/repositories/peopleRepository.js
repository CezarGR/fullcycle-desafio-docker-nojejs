const { query } = require('../database/db');

async function insert(peopleName) {
    await query(
        `INSERT INTO peoples (name) values ('${peopleName}');`
    );
}

async function getAll() {
    return await query(
        `SELECT * FROM peoples;`
    );
}

module.exports = {
    insert,
    getAll
}