const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hey! Hello Appsody!");
});
 
module.exports.app = app;
