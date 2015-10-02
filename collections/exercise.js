// collection exercise

Exercise = new Mongo.Collection('exercises');

var Schemas = {};

Schemas.Exercise = new SimpleSchema({
  name: {
    type: String,
    label: 'Nome',
    optional: false
  },

  muscle: {
    type: String,
    label: 'Músculo',
    optional: false
  },

  sets: {
    type: Number,
    label: 'Séries',
    optional: false
  },

  reps: {
    type: Number,
    label: 'Repetições',
    optional: false
  }
});

Exercise.attachSchema(Schemas.Exercise);
