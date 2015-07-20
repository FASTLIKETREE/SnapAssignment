/**
* Location.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    name: {
      type: 'string'
    },
    latitude: {
      type: 'float'
    },
    longitude: {
      type: 'float'
    },
    hoursMonday: {
      type: 'json'
    },
    hoursTuesday: {
      type: 'json'
    },
    hoursWednesday: {
      type: 'json'
    },
    hoursThursday: {
      type: 'json'
    },
    hoursFriday: {
      type: 'json'
    },
    hoursSaturday: {
      type: 'json'
    },
    hoursSunday: {
      type: 'json'
    },
    address: {
      type: 'string'
    },
    city: {
      type: 'string'
    },
    state: {
      type: 'string'
    },
    zip: {
      type: 'string'
    },
    phoneNumber: {
      type: 'string'
    },
    faxNumber: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    photos: {
      type: 'json'
    },
    region: {
      type: 'text'
    },
    accessibility: {
      type: 'text'
    },
    isStoreActive: {
      type: 'boolean'
    },
    isOpenForBusiness: {
      type: 'boolean'
    },
    isOnlineOrderActive: {
      type: 'boolean'
    },
    isDeliveryActive: {
      type: 'boolean'
    },
    remoteID: {
      type: 'string'
    },
    products: {
      collection: 'Product',
      via: 'location'
    }

  }
};
