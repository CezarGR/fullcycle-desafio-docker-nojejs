module.exports = () => {
    return `
        CREATE TABLE IF NOT EXISTS
            peoples (
                id int AUTO_INCREMENT NOT NULL,
                name VARCHAR(50) NOT NULL,
                PRIMARY KEY(id)
            );`;
}