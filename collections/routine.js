// collection routine

Routine = new Mongo.Collection('routines', {
  transform: function(doc){
    doc.exercisesObj = RoutineExercise.find(
      { _id: { $in: doc.exercises } },
      { sort: { createdAt: 1 } }
    );

    return doc;
  }
});


Routine.before.insert(function(id, doc){
  doc.createdAt = new Date();
});

Routine.before.update(function(id, doc, fields, modifier, options){
  modifier.$set = modifier.$set || {};
  modifier.$set.modifiedAt = new Date();
});


var Schemas = {};

Schemas.Routine = new SimpleSchema({
  'description': {
    type: String,
    label: 'Descrição da rotina',
    optional: false
  },

  'exercises': {
    type: [String],
    label: 'Referência aos exercícios para esta rotina',
    optional: true
  },

  'training': {
    type: String,
    label: 'Referência ao treinamento',
    optional: false
  },

  'execution': {
    type: Number,
    label: 'Status da rotina',
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

Routine.attachSchema(Schemas.Routine);
