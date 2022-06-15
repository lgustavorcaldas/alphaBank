const EXPRESS = require( "express" );
const router = EXPRESS.Router();
const client =  require( "../db" );
const jwt = require("jsonwebtoken");

require("dotenv-safe").config();

const { comparePwd } = require("../hashPwd")

router.post("/login", async(req, res) => {
    console.log("🚀 ~ file: login.js ~ line 13 ~ router.post ~ req.body", req.body)
    try {        
        const cpf = req.body.cpf;
        const password = req.body.password;

        const usuario = await client.query(`SELECT * FROM users WHERE cpf = ($1)`, [ cpf ]);
        console.log("🚀 ~ file: login.js ~ line 17 ~ router.post ~ usuario", usuario.rows)

        if ( comparePwd(password, usuario.rows[0].password) ) {
            const id = usuario.rows[0].id;
            console.log("🚀 ~ file: login.js ~ line 19 ~ router.post ~ id", id)

            const token = jwt.sign( { id }, process.env.SECRET);

            res.json( {auth: true, token} );
        } else {
            res.json("Wrong Password");
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;