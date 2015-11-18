// collection muscle

Muscle = new Mongo.Collection('muscles');

var Schemas = {};

Schemas.Muscle = new SimpleSchema({
  name: {
    type: String,
    label: 'Nome',
    optional: false
  },

  status: {
    type: Boolean,
    label: 'Status',
    optional: false
  }
});

Muscle.attachSchema(Schemas.Muscle);
