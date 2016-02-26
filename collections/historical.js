// collection historical

Historical = new Mongo.Collection('historicals', {
  transform: function(doc){
    doc.practitionerObj = Meteor.users.findOne({
      _id: doc.practitioner
    });

    doc.trainingObj = Training.findOne({
      _id: doc.training
    });

    doc.exercisesObj = RoutineExercise.find(
      { _id: { $in: doc.exercises } }
    );

    return doc;
  }
});


Historical.before.insert(function(id, doc){
  doc.createdAt = Date.now();
});

Historical.before.update(function(id, doc, fields, modifier, options){
  modifier.$set = modifier.$set || {};
  modifier.$set.modifiedAt = Date.now();
});


var Schemas = {};

Schemas.Historical = new SimpleSchema({
  practitioner: {
    type: String,
    label: 'Referência ao praticante',
    optional: false
  },

  training: {
    type: String,
    label: 'Referência ao treinamento',
    optional: false
  },

  routines: {
    type: [String],
    label: 'Referências as rotinas',
    optional: true
  },

  exercises: {
    type: [String],
    label: 'Referências aos exercícios',
    optional: true
  },

  date: {
    type: Date,
    label: 'Data',
    optional: false
  }
});

Historical.attachSchema(Schemas.Historical);
