const { query } = require('../db');
const migrates = [
    createUsersToTable = require('./02_create_users_to_table'),
];

(
    async () => {
        console.log('initial migration...');

        migrates.forEach(async (migrate) => {        
            const queryScript = migrate(); 
            await query(queryScript);
        })
    
        console.log('finish migration...');
    }
)();
