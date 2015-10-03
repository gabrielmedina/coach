// collection exercise

Exercise = new Mongo.Collection('exercises');

var Schemas = {};

Schemas.Exercise = new SimpleSchema({
  name: {
    type: String,
    label: 'Nome',
    optional: false
  },

  prop: {
    type: String,
    label: 'Adereço',
    optional: false
  },

  muscle_id: {
    type: String,
    label: 'Músculo',
    optional: false
  },

  images: {
    type: String,
    label: 'Imagens',
    optional: false
  },

  createdAt: {
    type: Date,
    label: 'Criado em',
    optional: false
  }
});

Exercise.attachSchema(Schemas.Exercise);
