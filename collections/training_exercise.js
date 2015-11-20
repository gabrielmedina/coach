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


TrainingExercise.before.insert(function(id, doc){
  doc.createdAt = Date.now();
});

TrainingExercise.before.update(function(id, doc, fields, modifier, options){
  modifier.$set = modifier.$set || {};
  modifier.$set.modifiedAt = Date.now();
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
