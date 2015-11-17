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
  },

  status: {
    type: Boolean,
    label: 'Status',
    optional: false
  }
});

State.attachSchema(Schemas.State);
