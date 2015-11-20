// collection prop

Prop = new Mongo.Collection('props');


Prop.before.insert(function(id, doc){
  doc.createdAt = Date.now();
});

Prop.before.update(function(id, doc, fields, modifier, options){
  modifier.$set = modifier.$set || {};
  modifier.$set.modifiedAt = Date.now();
});


var Schemas = {};

Schemas.Prop = new SimpleSchema({
  name: {
    type: String,
    label: 'Nome do adereço/equipamento',
    optional: false
  },

  status: {
    type: Boolean,
    label: 'Status',
    optional: false
  }
});

Prop.attachSchema(Schemas.Prop);
