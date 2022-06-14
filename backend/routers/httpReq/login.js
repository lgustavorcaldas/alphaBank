const EXPRESS = require( "express" );
const router = EXPRESS.Router();
const client =  require( "../db" );
const jwt = require("jsonwebtoken");

const { comparePwd } = require("../hashPwd")

router.post("/login", async(req, res) => {
    try {        
        const cpf = req.body.cpf;
        const password = req.body.password;

        const usuario = await client.query(`SELECT * FROM users WHERE cpf = ($1)`, [ cpf ]);

        if ( comparePwd(password, usuario.rows[0].password) ) {
            const id = usuario.rows[0].id;

            const token = jwt.sign({ id }, "process.env.SECRET");

            res.json({ auth: true, token});
        } else {
            res.json("Wrong Password");
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;