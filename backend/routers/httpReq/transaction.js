const express = require('express');
const router = express.Router();
const client =  require( "../db" );

client.connect( ( err ) => { if ( err ) return console.log("🚀 ~ file: transaction.js ~ line 5 ~ err", err) } );

router.put("/transation", async ( req, res ) => {
    try {
        const { account_num_sender } = req.body;
        const { account_num_reciver } = req.body;
        const { value_send } = req.body;
        
        const transation = await client.query(`
                BEGIN;
                    UPDATE accounts SET account_balence = account_balence - ($3) WHERE account_num = ($1);
                    UPDATE accounts SET account_balence = account_balence + ($3) WHERE account_num = ($2);
                END;
            `,
            [ account_num_sender, account_num_reciver, value_send ]);
        
        res.json(`${value_send} was send to ${account_num_reciver} by ${account_num_sender}`)
    } catch (error) {
        console.log("🚀 ~ file: transaction.js ~ line 8 ~ router.put ~ error", error)
    }
})

module.exports = router;