const createService = require('feathers-mongodb');
const hooks = require('./apartments.hooks');
const { ObjectID } = require('mongodb')

module.exports = function() {
  const app = this;
  const mongoClient = app.get('mongoClient');

  const apartmentService = createService({});
  app.use('/apartments', apartmentService);

  const service = app.service('apartments');

  mongoClient.then(db => {
    service.Model = db.collection('apartments');
  });

  service.hooks(hooks);
};
