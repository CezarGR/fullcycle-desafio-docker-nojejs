const { createRandomPeople, getPeople } = require("../services/peopleService");

async function listPeople(req, res) {
    let content = '<h1>Full Cycle Rocks!</h1>';
    
    await createRandomPeople();
    const users = await getPeople();

    content += '<ul>';

    users.forEach(user => {
        content += `<li>Nome: ${user.name}</li>`;
    });

    content += '</ul>';

    res.send(content);
}

module.exports = {
    listPeople
}