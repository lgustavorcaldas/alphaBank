const Client = require('pg').Client;
//or native libpq bindings
//var pg = require('pg').native

const client = new Client("postgres://thcfgtop:UKWXC5CxtP3owJY3el-VLRdTL2Be3QXQ@motty.db.elephantsql.com/thcfgtop");

module.exports = client