
const Sequelize = require("sequelize");
const mess = require("../proxy/models/message");

function start_db(){
  const sequelize = new Sequelize("user", "root", "supersecret", {
    dialect: "mysql",
    host: "10.96.221.140",
    define: {
        timestamps: false
    }
  });
  
  const Message = sequelize.define("message", mess);

  return [Message, sequelize];
}

/*for synchronyzing sequelize and db
sequelize.sync().then(result=>{
  console.log(result);
})
.catch(err=> console.log(err));*/

module.exports = start_db;