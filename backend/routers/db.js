const Pool = require('pg').Pool;

const client = new Pool( { connectionString: "postgres://thcfgtop:3dRV4luvgGTOPoOzRr7V2qrqy2XzhgZk@motty.db.elephantsql.com/thcfgtop" } );

client.connect( ( err ) => { if ( err ) return console.log("🚀 ~ file: transation.js ~ line 6 ~ err", err) } );

module.exports = client;