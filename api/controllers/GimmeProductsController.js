/**
 * GimmeProductsController
 *
 * @description :: Server-side logic for managing gimmeproducts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
	OutputStoreInfoWithLocations: function (req, res) {
		//Create a database lookup, inside the query embed another callback, when the 2nd callback executes you know both database
		//lookups have been successful.
		var ReturnValue = Product.find().exec(function (err, ProductModel)
		{
			sails.log.error(err + "<-- this is the ProductModel DB read error");
			var ProductModelCache = ProductModel;

			Location.find().exec(function (err, LocationModel)
			{
				sails.log.error(err + "<-- this is the LocationModel read error");
				sails.log.error(ProductModelCache.length + "<-- this is the ProductModelCache.length");
				sails.log.error(LocationModel.length + "<-- this is location models length");

				//Recreate the products object so that the LocationName is printed under location.
				var ResultsArray = [];
				for(var i = 0; i<ProductModelCache.length; ++i)
				{
					ResultsArray.push({});
					ResultsArray[i].location = ProductModelCache[i].location;
					try{
						ResultsArray[i].LocationName = LocationModel[ProductModelCache[i].location].name;
					}
					catch(err){
						ResultsArray[i].LocationName = "Product model problem! The location is out of bounds! Check product models location attribute for numbers larger than Locations.length!";
					}
					ResultsArray[i].price = ProductModelCache[i].price;
					ResultsArray[i].quantity = ProductModelCache[i].quantity;
					ResultsArray[i].displayThreshold = ProductModelCache[i].displayThreshold;
					ResultsArray[i].warningThreshold = ProductModelCache[i].warningThreshold;
					ResultsArray[i].groupId = ProductModelCache[i].groupId;
					ResultsArray[i].plu = ProductModelCache[i].plu;
					ResultsArray[i].createdAt = ProductModelCache[i].createdAt;
					ResultsArray[i].updatedAt = ProductModelCache[i].updatedAt;
					ResultsArray[i].id = ProductModelCache[i].id;
					
				}
				return res.send(ResultsArray);
			});
		});
	}
};