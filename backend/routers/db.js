const Client = require('pg').Client;

const client = new Client("postgres://thcfgtop:UKWXC5CxtP3owJY3el-VLRdTL2Be3QXQ@motty.db.elephantsql.com/thcfgtop");

module.exports = client