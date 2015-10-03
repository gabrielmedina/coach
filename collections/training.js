// collection training

Training = new Mongo.Collection('trainings');

var Schemas = {};

Schemas.Training = new SimpleSchema({
  routine: {
    type: String,
    label: 'Rotina',
    optional: false
  },

  trainingExercise: {
    type: [Object],
    label: 'Exercícios',
    optional: false
  },

  practitioner: {
    type: Object,
    label: 'Praticante',
    optional: false
  },

  instructor: {
    type: Object,
    label: 'Instrutor',
    optional: false
  },

  createAt: {
    type: Date,
    label: 'Criado em',
    optional: false
  },

  status: {
    type: Boolean,
    label: 'Status',
    optional: false
  }
});

Training.attachSchema(Schemas.Training);
