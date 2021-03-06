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
  doc.createdAt = new Date();
});

RoutineExercise.before.update(function(id, doc, fields, modifier, options){
  modifier.$set = modifier.$set || {};
  modifier.$set.modifiedAt = new Date();
});


var Schemas = {};

Schemas.RoutineExercise = new SimpleSchema({
  'exercise': {
    type: String,
    label: 'Referência ao exercício',
    optional: false
  },

  'sets': {
    type: Number,
    label: 'Séries',
    optional: false
  },

  'reps': {
    type: Number,
    label: 'Repetições',
    optional: false
  },

  'routine': {
    type: String,
    label: 'Referência a rotina',
    optional: false
  },

  'interval': {
    type: String,
    label: 'Intervalo',
    optional: false
  },

  'speed': {
    type: String,
    label: 'Velocidade de execução',
    optional: false
  },

  'weight': {
    type: Number,
    label: 'Carga recomandada',
    optional: false
  },

  'execution': {
    type: Number,
    label: 'Execução',
    optional: true
  },

  'done': {
    type: Boolean,
    label: 'Feito',
    optional: true
  },

  'status': {
    type: Boolean,
    label: 'Status',
    optional: false
  }
});

RoutineExercise.attachSchema(Schemas.RoutineExercise);
