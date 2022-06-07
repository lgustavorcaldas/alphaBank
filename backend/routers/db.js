const Pool = require('pg').Pool;

const client = new Pool( { connectionString: "postgres://thcfgtop:UKWXC5CxtP3owJY3el-VLRdTL2Be3QXQ@motty.db.elephantsql.com/thcfgtop" } );

client.connect( ( err ) => { if ( err ) return console.log("🚀 ~ file: transation.js ~ line 6 ~ err", err) } );

module.exports = client;