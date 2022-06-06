const EXPRESS = require( "express" );
const router = EXPRESS.Router();
const client =  require( "../db" );

client.connect( ( err ) => { if ( err ) return console.log("🚀 ~ file: createNewAccount.js ~ line 6 ~ err", err) } );

router.post('/createNewUser', async ( req, res ) => {
    try {
        
    } 
    catch ( error ) {
        console.log("🚀 ~ file: createNewUser.js ~ line 10 ~ router.post ~ error", error);
    }
});

module.exports = router;