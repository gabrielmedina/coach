// collection routine exercise

RoutineExercise = new Mongo.Collection('routine_exercise', {
  transform: function(doc){
    doc.exerciseObj = Exercise.findOne({
      _id: doc.exercise
    });

    return doc;
  }
});


RoutineExercise.before.insert(function(id, doc){
  doc.createdAt = Date.now();
});

RoutineExercise.before.update(function(id, doc, fields, modifier, options){
  modifier.$set = modifier.$set || {};
  modifier.$set.modifiedAt = Date.now();
});


var Schemas = {};

Schemas.RoutineExercise = new SimpleSchema({
  exercise: {
    type: String,
    label: 'Referência ao exercício',
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

RoutineExercise.attachSchema(Schemas.RoutineExercise);
