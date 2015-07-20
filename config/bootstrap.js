/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)

var locationRecords = require(process.cwd()+'/tests/fixtures/locations.js');
var productRecords = require(process.cwd()+'/tests/fixtures/products.js');

  var throwCheekyError = function(stack){
    var cheekyError = new Error('Bad Happenings');
    cheekyError.message = 'Things are clearly broken';
    cheekyError.stack = stack;
    sails.log('ERROR!!!',cheekyError.message);
    throw cheekyError;
  };
  sails.after('hook:orm:loaded', function() {
    Location.count().exec(function(err,count){
      if (err){ return throwCheekyError(err);}

      if (count < 1){
        Location.destroy({}).exec(function(err,deadLocations){
          if (err){ return throwCheekyError(err);}

          Product.destroy({}).exec(function(err,deadProducts){
            if (err){ return throwCheekyError(err);}

            Location.create(locationRecords).exec(function(err,newLocations){
              if (err){ return throwCheekyError(err);}

              Product.create(productRecords).exec(function(err,newProducts){
                if (err){ return throwCheekyError(err);}
                  return cb();
              });

            });
          });
        });
      } else {
        return cb();
      }
    });
  });

// return cb();

};
