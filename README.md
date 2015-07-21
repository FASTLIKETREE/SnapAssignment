#  snappy-backend-trial

This app was created to evaluate the problem solving skills of developer applicants.  There are many valid solutions.  We are looking for the most simple and clean with consideration of the features and conventions of the framework (Sails.js).

The app has been pre-populated with an in-memory database containing instances of two models (Location, Products).

### Instructions

Add an endpoint to the app that returns all products in the database.  The product records should contain an additional field.  That field is the string name of the location to which that product belongs. See the example below.

### Example

`http://localhost:1337/gimmeProducts`

```js

    [{
        "location": 2,
        "hereIsThatLocationName": "Upper Kirby District",
        "price": 5.5,
        "quantity": 27,
        "displayThreshold": 3,
        "warningThreshold": 5,
        "groupId": 305,
        "plu": 305
    },
    {
        "location": 5,
        "hereIsThatLocationName": "Arboretum",
        "price": 6.75,
        "quantity": 18,
        "displayThreshold": 3,
        "warningThreshold": 5,
        "groupId": 305,
        "plu": 306
    },
    ...
    ]

```


### Submitting Code

Please host your solution as a fork of this repo on your own private Github account. When you are finished, send Jon Carter a link to your copy of the repo.  Do not submit your solution as a pull request.  Thanks!

