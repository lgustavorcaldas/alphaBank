const Pool = require('pg').Pool;

const client = new Pool( { connectionString: "postgres://thcfgtop:UKWXC5CxtP3owJY3el-VLRdTL2Be3QXQ@motty.db.elephantsql.com/thcfgtop" } );

module.exports = client;