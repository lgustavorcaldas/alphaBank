const EXPRESS = require("express");
const router = EXPRESS.Router();
const client = require("../db");
const { hashPwd } = require("../hashPwd");
const { v4: uuidv4 } = require( 'uuid' );

client.connect((err) => {
  if (err)
    return console.log("🚀 ~ file: createNewAccount.js ~ line 6 ~ err", err);
});

router.post("/createNewUser", async (req, res) => {
  try {
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


    const data = await client.query(`SELECT * FROM users WHERE cpf = ($1)`, [
      cpf,
    ]);
    
    const user_id = data.rows[0].id;
    const account_num = Math.floor( Math.random() * (100000 - 99999) + 99999 );
    const agency_num = 9999;
    const account_balence = 0;

    try {
        await client.query(
        `insert into accounts ( user_id, account_num, agency_num, account_balence, uuid, create_at, update_at ) values ( $1, $2, $3, $4, $5, CURRENT_TIMESTAMP(0), CURRENT_TIMESTAMP(0) );`
        , [ user_id, account_num, agency_num, account_balence,  uuidv4()]);
    }
    catch ( error ) {
        console.log("🚀 ~ file: createNewUser.js ~ line 43 ~ router.post ~ error", error)
    }

  } catch (error) {
    console.log(
      "🚀 ~ file: createNewUser.js ~ line 36 ~ router.post ~ error",
      error
    );
  }
});

module.exports = router;
