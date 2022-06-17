const EXPRESS = require("express");
const router = EXPRESS.Router();
const client = require("../db");

router.get("/search", async (req, res) => {
  try {
    const { id_user } = req.query;
    console.log(
      "🚀 ~ file: search.js ~ line 8 ~ router.get ~ id_user",
      id_user
    );

    const usuario = await client.query(
      `
        SELECT 
            users.id, users.name, accounts.account_num, accounts.agency_num, accounts.account_balence, cards.card_num, cards.due_date, cards.security_code, cards.blocked
        FROM 
            users 
        INNER JOIN 
            accounts 
        ON 
          accounts.user_id = users.id
        INNER JOIN 
          cards
        ON
          cards.accout_id = accounts.id
        WHERE 
          users.id = ($1)
      `,
      [ id_user ]
    );

    res.send(usuario.rows[0]);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
