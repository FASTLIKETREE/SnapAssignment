/**
* Product.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {


    location: {
      model: 'Location',
      required: true
    },

    price: {
      type: 'float',
      required: true
    },

    // how many are currently in stock
    quantity: {
      type: 'integer',
      defaultsTo: 0
    },

    // if quantity drops below `displayThreshold`, don't allow sell
    // any more of the product
    displayThreshold: {
      type: 'integer'
    },

    // when finding productofferings, throw a boolean flag on all productofferings
    // whose quantity is below this `warningThreshold`
    warningThreshold: {
      type: 'integer'
    },
    groupId: {
      type: 'integer'
    },
    plu: {
      type: 'integer'
    }

  }
};

