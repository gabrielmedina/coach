// collection training

Training = new Mongo.Collection('trainings', {
  transform: function(doc){
    doc.parctitionerObj = Meteor.users.findOne({
      _id: doc.parctitioner
    });

    return doc;
  },

  transform: function(doc){
    doc.instructorObj = Meteor.users.findOne({
      _id: doc.instructor
    });

    return doc;
  },

  transform: function(doc){
    doc.exercisesObj = TrainingExercise.find({
      _id: { $in: doc.exercises }
    });

    return doc;
  }
});


Training.before.insert(function(id, doc){
  doc.createdAt = Date.now();
});

Training.before.update(function(id, doc, fields, modifier, options){
  modifier.$set = modifier.$set || {};
  modifier.$set.modifiedAt = Date.now();
});


var Schemas = {};

Schemas.Training = new SimpleSchema({
  routine: {
    type: String,
    label: 'Rotina',
    optional: false
  },

  practitioner: {
    type: String,
    label: 'Referência ao praticante',
    optional: false
  },

  instructor: {
    type: String,
    label: 'Referência ao instrutor',
    optional: false
  },

  exercises: {
    type: [String],
    label: 'Referência aos exercícios deste treinamento',
    optional: false
  },

  status: {
    type: Boolean,
    label: 'Status',
    optional: false
  }
});

Training.attachSchema(Schemas.Training);
