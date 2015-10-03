// collection training exercise

TrainingExercise = new Mongo.Collection('training_exercise');

var Schemas = {};

Schemas.TrainingExercise = new SimpleSchema({
  exercise_id: {
    type: String,
    label: 'Referência ao exercício',
    optional: false
  },

  training_id: {
    type: String,
    label: 'Referência ao treinamento',
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
  },

  createAt: {
    type: Date,
    label: 'Criado em',
    optional: false
  }
});

TrainingExercise.attachSchema(Schemas.TrainingExercise);
