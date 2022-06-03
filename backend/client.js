const Client = require('pg').Client;
//or native libpq bindings
//var pg = require('pg').native

const client = new Client("postgres://urhprhsn:q6pj5GwwWK4L8ypxcB9x0wV3h9C7sbGE@motty.db.elephantsql.com/urhprhsn");

module.exports = client