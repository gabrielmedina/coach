// collection state

State = new Mongo.Collection('states');

var Schemas = {};

Schemas.State = new SimpleSchema({
  name: {
    type: String,
    label: 'Nome',
    optional: false
  },

  uf: {
    type: String,
    label: 'UF',
    optional: false
  }
});

State.attachSchema(Schemas.State);
