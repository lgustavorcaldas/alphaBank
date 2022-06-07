const express = require('express');
const router = express.Router();
const client =  require( "../db" );

const executeTransaction = async ( callback ) => {
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
        console.error("🚀 ~ file: transaction.js ~ line 22 ~ router.put ~ error", error );   
    }
};

router.put("/transation", async ( req, res ) => {
    try {
        // Pegar o valor do body.
        const { account_num_sender } = req.body;
        const { account_num_reciver } = req.body;
        const { value_send } = req.body;
        
        executeTransaction( async ( client ) => {
        // Dados dos clientes (Sender e Reciver)
            // Sender
            let { rows } = await client.query(`
                SELECT "id", "account_balence" 
                FROM "accounts" 
                WHERE "account_num" = ($1)`
                , [ account_num_sender ] );
            const rows_sender  = rows[0];
            // Reciver
            rows  = await client.query(`
                SELECT "id", "account_balence" 
                FROM "accounts" 
                WHERE "account_num" = ($1)`
                , [ account_num_reciver ] );
            const rows_reciver  = rows.rows[0];
        //
            // Teste para ver se o "Sender" tem o valor transferido
            if ( rows_sender.account_balence >= value_send ) {
                // Subitrair o valor da conta do "Sender"
                await client.query(`
                    UPDATE "accounts" 
                    SET "account_balence" = "account_balence" - ($1) 
                    WHERE "account_num" = ($2)`
                    , [ value_send, account_num_sender ] );
                // Somar o valor na conta do "Reciver"
                await client.query(`
                    UPDATE "accounts" 
                    SET "account_balence" = "account_balence" + ($1) 
                    WHERE "account_num" = ($2)`
                    , [ value_send, account_num_reciver ] );
                //
                // Alimentando a tabela transfer, com a transferencia feita.
                await client.query(`
                        INSERT INTO transfer ( account_id_sender, balence_of_the_moment_sender, account_id_reciver, balence_of_the_moment_reciver, transfer_type, transfer_value, date_and_time )
                        VALUES ( $1, $2, $3, $4, $5, $6, CURRENT_TIMESTAMP(0) )`
                    , [ rows_sender.id, rows_sender.account_balence, rows_reciver.id, rows_reciver.account_balence,"TED", value_send ] );
            } else {
                console.log("Pobre");
            }
        }); 
        res.json( `${ value_send } was send to ${ account_num_reciver } by ${ account_num_sender }` );
    } catch ( error ) {
        res.json( error );
        console.log("🚀 ~ file: transaction.js ~ line 74 ~ router.put ~ error", error);
    }
})

module.exports = router;