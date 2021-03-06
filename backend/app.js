const express = require( "express" )
const app = express();
const port = 4000;
const cors = require( 'cors' );

app.use( cors() );
app.use( express.urlencoded( { extended: true } ) );
app.use( express.json() );

const PUT_ROUTER = require( "./routers/httpReq/transaction" );
const GET_ROUTER = require( "./routers/httpReq/search" );
const POST_ROUTER = require( "./routers/httpReq/createNewUser" );
const LOGIN_ROUTER = require( "./routers/httpReq/login" );
const TRANSACTION_ROTER = require( "./routers/httpReq/transaction" );

app.use( "/", PUT_ROUTER, POST_ROUTER, LOGIN_ROUTER, GET_ROUTER, TRANSACTION_ROTER );

app.listen( port, console.log("To on na pota " + port) );