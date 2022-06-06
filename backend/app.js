const express = require( "express" )
const app = express();
const port = 4000;

const cors = require( 'cors' );

app.use( cors() );
app.use( express.urlencoded( { extended: true } ) );
app.use( express.json() );

// const POST_ROUTER = require( "./routers/httpReq/postRouter" );
// app.use( "/", POST_ROUTER );

app.listen( port, console.log("To on na pota " + port) );