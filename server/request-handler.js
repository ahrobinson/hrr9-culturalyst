///////////////////////
//   Requirements    //
///////////////////////
var stripe = require('stripe')('sk_test_iJGQtNCDSmOSroJKVAlFCdbB');
//Database schema
//var db = require('./db/schema.js');

///////////////////////
// Request-Handlers  //
///////////////////////

//Create new Creative user
exports.newCreative = function(req, res) {
  var creative = req.body;
  db.newCreative(creative.name, creative.picurl, creative.medium, creative.submedium, function(err, creatives) {
    if (err) {
      res.status(422).send(err);
    } else {
      res.status(200);
    }
  });
};

//Query all creatives from db
exports.getCreatives = function(req, res) {
  //pull data from requests
  db.getCreatives(function(err, creatives) {
    if (err) {
      res.status(401).send(err);
    } else {
      res.status(200).send(creatives);
    }
  });
};

//charge them suckas!
exports.charge = function (req, res, next) {
  var stripeToken = req.body.stripeToken;
  var amount = req.body.amount
  console.log(amount)
  var charge = stripe.charges.create({
    amount: amount, // amount was in cents, but is converted on client side
    currency: "usd",
    source: stripeToken,
    description: "Example charge"
  }, function(err, charge) {
    if (err && err.type === 'StripeCardError') {
      // The card has been declined
      console.log('declined bruh')
    }
    console.log(charge)
  })
}
