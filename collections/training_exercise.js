// collection training exercise

TrainingExercise = new Mongo.Collection('training_exercise', {
  transform: function(doc){
    doc.exerciseObj = Exercise.findOne({
      _id: doc.exercise
    });

    return doc;
  },

  transform: function(doc){
    doc.trainingObj = Training.findOne({
      _id: doc.training
    });

    return doc;
  }
});

var Schemas = {};

Schemas.TrainingExercise = new SimpleSchema({
  exercise: {
    type: String,
    label: 'Referência ao exercício',
    optional: false
  },

  training: {
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
  }
});

TrainingExercise.attachSchema(Schemas.TrainingExercise);
