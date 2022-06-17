const Pool = require('pg').Pool;

const client = new Pool( { connectionString: "postgres://thcfgtop:yD2dojFZunFMnAoJeq-zf3SbhtRJTs9n@motty.db.elephantsql.com/thcfgtop" } );

client.connect( ( err ) => { if ( err ) return console.log("🚀 ~ file: transation.js ~ line 6 ~ err", err) } );

module.exports = client;