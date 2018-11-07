const createService = require('feathers-mongodb');
const { Service } = require('feathers-mongodb')
const hooks = require('./locations.hooks');
const { ObjectID } = require('mongodb')
const common = require('feathers-hooks-common')

module.exports = function () {
  const app = this;
  const mongoClient = app.get('mongoClient');

  app.use('/locations', createService({}));
  const service = app.service('locations');

  mongoClient.then(db => {
    service.Model = db.collection('locations');
  });

  service.hooks(hooks);
};
