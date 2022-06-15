const EXPRESS = require( "express" );
const router = EXPRESS.Router();
const client =  require( "../db" );

client.connect( ( err ) => { if ( err ) return console.log("🚀 ~ file: createNewAccount.js ~ line 6 ~ err", err) } );

router.post('/createNewUser', async ( req, res ) => {
    try {
        await client.query(
        `insert into user ( name, cpf, password, birth_date, create_at, update_at ) values ( $1, $2, $3, $4, CURRENT_TIMESTAMP(0), CURRENT_TIMESTAMP(0) );`
        , [ element.name, element.cpf, element.password, element.birth_date ]);
    } 
    catch ( error ) {
        console.log("🚀 ~ file: createNewUser.js ~ line 10 ~ router.post ~ error", error);
    }
});

module.exports = router;