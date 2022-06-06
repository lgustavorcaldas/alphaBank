const EXPRESS = require("express");
const router = EXPRESS.Router();
const client =  require("./routers/db")

client.connect( function(err) {
    if( err ) {
    return console.error('could not connect to postgres', err);
    }
});

router.post("/accounts", async (req, res) => { 
    try {
        res.send("Test")
        const arr = await require('./arquivosDoBancoDeDados/pgDataAccounts');
        arr.forEach( async (element, index) => {
        try {
            await client.query(
            `insert into accounts (accout_id, card_num, due_date, security_code, blocked, create_at, update_at) values ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP(0), CURRENT_TIMESTAMP(0));`
            , [element.accout_id, element.card_num, element.due_date, element.security_code, element.blocked]);
        } 
        catch (error) {
            console.log("🚀 ~ file: app.js ~ line 44 ~ arr.forEach ~ error", error, index)
        }
        })
    } catch (error) {
        console.log("🚀 ~ file: app.js ~ line 51 ~ app.get ~ error", error)
    } 
})

module.exports = router;