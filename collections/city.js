// collection city

City = new Mongo.Collection('cities');

var Schemas = {};

Schemas.City = new SimpleSchema({
  name: {
    type: String,
    label: 'Nome',
    optional: false
  },

  state_id: {
    type: String,
    label: 'Referência ao estado',
    optional: false
  }
});

City.attachSchema(Schemas.City);
