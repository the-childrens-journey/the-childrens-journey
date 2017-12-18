const express = require('express')
const app = express()

app.get( '/', [], function( req, res ) {
  res.redirect( 'index.html' );
});

app.use(express.static('dist/'))

app.listen(3300, function () {
  console.log('Example app listening on port 3300!')
});
