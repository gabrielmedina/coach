// collection exercise

Exercise = new Mongo.Collection('exercises');

var Schemas = {};

Schemas.Exercise = new SimpleSchema({
  name: {
    type: String,
    label: 'Nome',
    optional: false
  },

  prop_id: {
    type: String,
    label: 'Referência ao adereço/equipamento',
    optional: false
  },

  muscle_id: {
    type: String,
    label: 'Referência ao músculo',
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
