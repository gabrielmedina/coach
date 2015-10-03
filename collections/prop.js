// collection prop

Prop = new Mongo.Collection('props');

var Schemas = {};

Schemas.Prop = new SimpleSchema({
  name: {
    type: String,
    label: 'Nome do adereço/equipamento',
    optional: false
  }
});

Prop.attachSchema(Schemas.Prop);
