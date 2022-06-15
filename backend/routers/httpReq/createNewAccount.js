// const EXPRESS = require( "express" );
// const router = EXPRESS.Router();
// const client =  require( "../db" );
// const { uuid } = require( 'uuidv4' );

// router.post("/createNewAccount", async ( req, res ) => { 
//     console.log("🚀 ~ file: createNewAccount.js ~ line 7 ~ router.post ~ res", req.body)
//     try {
//         const { user_id } = req.body;
//         const account_num = Math.random() * (999999 - 100000) + 100000;
//         const agency_num = 9999;
//         const account_balence = 0;
//         const uuidNum = uuid();

//         res.send("Test");
//         try {
//             await client.query(
//             `insert into accounts ( user_id, account_num, agency_num, account_balence, uuid, create_at, update_at ) values ( $1, $2, $3, $4, $5, CURRENT_TIMESTAMP(0), CURRENT_TIMESTAMP(0) );`
//             , [ user_id, account_num, agency_num, account_balence, uuidNum]);
//         }
//         catch ( error ) {
//             console.log("🚀 ~ file: createNewAccount.js ~ line 18 ~ ARRAY.forEach ~ error", error)
//         }
//     } catch ( error ) {
//         console.log("🚀 ~ file: createNewAccount.js ~ line 22 ~ router.post ~ error", error)
//     } 
// }) 

// module.exports = router;