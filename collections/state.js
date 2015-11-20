// collection state

State = new Mongo.Collection('states');


State.before.insert(function(id, doc){
  doc.createdAt = Date.now();
});

State.before.update(function(id, doc, fields, modifier, options){
  modifier.$set = modifier.$set || {};
  modifier.$set.modifiedAt = Date.now();
});


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
