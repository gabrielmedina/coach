// collection muscle

Muscle = new Mongo.Collection('muscles');


Muscle.before.insert(function(id, doc){
  doc.createdAt = new Date();
});

Muscle.before.update(function(id, doc, fields, modifier, options){
  modifier.$set = modifier.$set || {};
  modifier.$set.modifiedAt = new Date();
});


var Schemas = {};

Schemas.Muscle = new SimpleSchema({
  'name': {
    type: String,
    label: 'Nome',
    optional: false
  },

  'status': {
    type: Boolean,
    label: 'Status',
    optional: false
  }
});

Muscle.attachSchema(Schemas.Muscle);
