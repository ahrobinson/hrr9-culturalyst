///////////////////////
//   Requirements    //
///////////////////////

//Database schema
//var db = require('db/schema.js');


///////////////////////
// Request-Handlers  //
///////////////////////
exports.getPayment = function(req,res){
  console.log('token', req.body.stripeToken)
}

//Query all artists
exports.getArtists = function(req, res) {
  //pull data from requests
  db.getArtists(function(err, artists) {
    if (err) {
      res.status(401).send(err);
    } else {
      res.status(200).send(artists);
    }
  });
};
