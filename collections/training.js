// collection training

Training = new Mongo.Collection('trainings', {
  transform: function(doc){
    doc.practitionerObj = Meteor.users.findOne({
      _id: doc.practitioner
    });

    doc.instructorObj = Meteor.users.findOne({
      _id: doc.instructor
    });

    doc.routinesObj = Routine.find(
      { _id: { $in: doc.routines }},
      { sort: {description: 1} }
    );

    return doc;
  }
});


Training.before.insert(function(id, doc){
  doc.createdAt = Date.now();
  doc.modifiedAt = Date.now();
});

Training.before.update(function(id, doc, fields, modifier, options){
  modifier.$set = modifier.$set || {};
  modifier.$set.modifiedAt = Date.now();
});


var Schemas = {};

Schemas.Training = new SimpleSchema({
  description: {
    type: String,
    label: 'Descrição do treinamento',
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

  routines: {
    type: [String],
    label: 'Referência as rotinas do treinamento',
    optional: true
  },

  historical: {
    type: [Date],
    label: 'Histórico de treinamentos',
    optional: true
  },

  execution: {
    type: Number,
    label: 'Status do treinamento',
    optional: true
  },

  status: {
    type: Boolean,
    label: 'Status',
    optional: false
  }
});

Training.attachSchema(Schemas.Training);
