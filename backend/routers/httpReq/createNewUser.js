const EXPRESS = require("express");
const router = EXPRESS.Router();
const client = require("../db");
const { hashPwd } = require("../hashPwd");
const { v4: uuidv4 } = require( 'uuid' );

client.connect( (err) => {
  if (err)
    return console.log("🚀 ~ file: createNewAccount.js ~ line 6 ~ err", err);
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const executeCreation = async ( callback ) => {
  try { 
      // Começo da QUERY
      await client.query( 'BEGIN;' );
      try {
          // Final da QUERY quando der certo
          await callback( client );
          await client.query( 'COMMIT;');
      } catch ( error ) {
          // Final da QUERY quando der erro
          await client.query( 'ROLLBACK;' );
          console.error( error.stack );
      }
  } catch ( error ) {
  console.log("🚀 ~ file: createNewUser.js ~ line 26 ~ executeCreation ~ error", error)
  }
};

router.post("/createNewUser", async (req, res) => {
  try {
    executeCreation ( async () => { 
      const { name } = req.body;
      const { cpf } = req.body;
      const { birth_date } = req.body;
      let { password } = req.body;
      password = hashPwd(password);
      await client.query(
        `insert into users ( name, cpf, password, birth_date, create_at, update_at ) values ( $1, $2, $3, $4, CURRENT_TIMESTAMP(0), CURRENT_TIMESTAMP(0) );`, [
          name, cpf, password, birth_date
      ]);
      console.log("Create new user", name, cpf, birth_date, password);
// //
      let data = await client.query(`SELECT * FROM users WHERE cpf = ($1)`, [
        cpf
      ]);
      const user_id = data.rows[0].id;
      const account_num = getRandomIntInclusive( 999999, 100000 );
      const agency_num = 9999;
      const account_balence = 0;
      try {
          await client.query(
          `insert into accounts ( user_id, account_num, agency_num, account_balence, uuid, create_at, update_at ) values ( $1, $2, $3, $4, $5, CURRENT_TIMESTAMP(0), CURRENT_TIMESTAMP(0) );`
          , [ user_id, account_num, agency_num, account_balence,  uuidv4()]);
      }
      catch ( error ) {
          console.log("🚀 ~ file: createNewUser.js ~ line 43 ~ router.post ~ error", error)
          res.status(401).send(error.mensage)
      }
// //
      data = await client.query(`SELECT * FROM accounts WHERE user_id = ($1)`, [
        user_id
      ]);

      const accout_id = data.rows[0].id;
      const card_num = getRandomIntInclusive( 9999999999999999, 1000000000000000 )
      const due_date = "09/09/2023";
      const security_code = getRandomIntInclusive( 999,100 );
      const blocked = false;
      try {
        await client.query(
        `insert into cards ( accout_id, card_num, due_date, security_code, blocked, create_at, update_at ) values ( $1, $2, $3, $4, $5, CURRENT_TIMESTAMP(0), CURRENT_TIMESTAMP(0) );`
        , [ accout_id, card_num, due_date, security_code,  blocked]);
      }
      catch ( error ) {
          console.log("🚀 ~ file: createNewUser.js ~ line 82 ~ router.post ~ error", error)
          res.status(401).send(error.mensage)
      }
    })
    res.sendStatus(200)
  } catch (error) {
    console.log("🚀 ~ file: createNewUser.js ~ line 88 ~ router.post ~ error", error)
    res.status(401).send(error.mensage)
  }
});

module.exports = router;
