const factory = require('factory-girl').factory
const conn_data = require('../database/connect_db')()

factory.define('message', conn_data[0], {
    'id': factory.sequence((n) => `${n}`),
    'date': factory.sequence((n) => `${n}`),
    'path': factory.sequence((n) => `${n}`),
    'user_agent': factory.sequence((n) => `${n}`),
});


async function createRecords(amount){
    await factory.createMany('message', amount).then(postsArray => {
        // postsArray is an array of 5 Post saved instances
        
    }).catch(err =>{
        
        console.log(err);
    });
}

function closeFactory(){
    conn_data[1].close();
}

module.exports = {createRecords, closeFactory};