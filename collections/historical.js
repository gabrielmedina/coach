// collection historical

Historical = new Mongo.Collection('historicals', {
  transform: function(doc){
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
  training: {
    type: String,
    label: 'Referência ao treinamento',
    optional: false
  },

  exercises: {
    type: [String],
    label: 'Referências aos exercícios',
    optional: true
  }

  date: {
    type: Date,
    label: 'Data',
    optional: false
  }
});

Historical.attachSchema(Schemas.Historical);
