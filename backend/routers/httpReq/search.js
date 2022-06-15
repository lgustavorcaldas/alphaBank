const EXPRESS = require( "express" );
const router = EXPRESS.Router();
const client =  require( "../db" );

router.get("/search", async( req, res ) => {
    try {        
        const { id_user }  = req.query;
        console.log("🚀 ~ file: search.js ~ line 8 ~ router.get ~ id_user", id_user)

        const usuario = await client.query(`SELECT users.id, accounts.user_id, name, cpf, account_balence, account_num, agency_num FROM users INNER JOIN accounts ON users.id = accounts.user_id AND users.id = ($1)`, [ id_user ]);
        
        res.send(usuario.rows[0]);
        console.log("🚀 ~ file: search.js ~ line 13 ~ router.get ~ usuario.rows[0]", usuario.rows[0])
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;