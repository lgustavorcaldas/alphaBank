const express = require("express")
const app = express();
const client =  require("./client")

client.connect( function(err) {
  if( err ) {
    return console.error('could not connect to postgres', err);
  }
});

app.get("/test", async (req, res) => {  
  client.query('SELECT * FROM exemplo', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].desc);
// client.end();
  });

})

app.listen(4000, console.log("To on"));