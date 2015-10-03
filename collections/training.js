// collection training

Training = new Mongo.Collection('trainings');

var Schemas = {};

Schemas.Training = new SimpleSchema({
  routine: {
    type: String,
    label: 'Rotina',
    optional: false
  },

  practitioner_id: {
    type: String,
    label: 'Praticante',
    optional: false
  },

  instructor_id: {
    type: String,
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
