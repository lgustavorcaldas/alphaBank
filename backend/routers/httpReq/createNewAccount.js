const EXPRESS = require( "express" );
const router = EXPRESS.Router();
const client =  require( "../db" );
const { uuid } = require( 'uuidv4' );

client.connect( ( err ) => { if ( err ) return console.log("🚀 ~ file: createNewAccount.js ~ line 6 ~ err", err) } );

router.post("/createNewAccount", async ( req, res ) => { 
    try {
        res.send("Test");
        ARRAY.forEach( async ( element ) => {
            try {
                await client.query(
                `insert into accounts ( accout_id, uuid, card_num, due_date, security_code, blocked, create_at, update_at ) values ( $1, $2, $3, $4, $5, $6, CURRENT_TIMESTAMP(0), CURRENT_TIMESTAMP(0) );`
                , [ element.accout_id, uuid(), element.card_num, element.due_date, element.security_code, element.blocked]);
            } 
            catch ( error ) {
                console.log("🚀 ~ file: createNewAccount.js ~ line 18 ~ ARRAY.forEach ~ error", error)
            }
        })
    } catch ( error ) {
        console.log("🚀 ~ file: createNewAccount.js ~ line 22 ~ router.post ~ error", error)
    } 
}) 

module.exports = router;