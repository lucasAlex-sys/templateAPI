const axios = require('axios');
const knex = require('../databaseKnex/index')

module.exports = {
    
     simpleMessage (req , res ){
        res.status(200).json({ message: 'hello world !!' })
    }
    

}
