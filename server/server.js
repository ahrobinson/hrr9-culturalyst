var path = require('path');
var express = require('express');
var stripe = require('stripe')('sk_test_iJGQtNCDSmOSroJKVAlFCdbB');
var logger = require('morgan');
var handler = require('./request-handler');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('client'));
app.set('port', process.envPORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

app.post('/charge', function (req, res, next) {
  var stripeToken = req.body.stripeToken;
  var amount = req.body.amount
  console.log(amount)
  var charge = stripe.charges.create({
    amount: amount * 100, // amount in cents, again
    currency: "usd",
    source: stripeToken,
    description: "Example charge"
  }, function(err, charge) {
    if (err && err.type === 'StripeCardError') {
      // The card has been declined
      console.log('declined bruh')
    }
    console.log(charge)
  });
})

var routes = express.Router();
// routes.get('/getCreatives', handler.getArtists);
routes.post('/payment', handler.getPayment)
