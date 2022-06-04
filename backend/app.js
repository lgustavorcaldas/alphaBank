const express = require("express")
const app = express();
const client =  require("./client")

const bcrypt = require('bcrypt');
const hash = {
    hashPwd: function (password) {
        const saltRounds = 10;
        return bcrypt.hashSync(password, saltRounds);
    },

    comparePwd: function(password, hash) {
        return bcrypt.compareSync(password, hash);
    }
};

// async function hashSenhas() {
//   const arr = await require('./pgData.js');
//   await arr.forEach( (element) => {
//     const senha = element.password;

//     element.password = hash.hashPwd(senha);
//   })

//   return arr
// }

client.connect( function(err) {
  if( err ) {
    return console.error('could not connect to postgres', err);
  }
});

app.get("/test", async (req, res) => { 
  try {
    res.send("Test")
    const arr = await require('./pgDataAccounts');
    arr.forEach( async (element, index) => {
      try {
        await client.query(
          `insert into accounts (user_id, account_num, agency_num, account_balence, create_at, update_at) values ($1, $2, $3, $4, CURRENT_TIMESTAMP(0), CURRENT_TIMESTAMP(0));
          `, [element.user_id, element.account_num, element.agency_num, element.account_balence]);        
      } catch (error) {
      console.log("🚀 ~ file: app.js ~ line 44 ~ arr.forEach ~ error", error, index)
      }
    })
  } catch (error) {
    console.log("🚀 ~ file: app.js ~ line 51 ~ app.get ~ error", error)
  } 
})

app.listen(4000, console.log("To on"));