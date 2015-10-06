// collection training

Training = new Mongo.Collection('trainings', {
  // transform: function(doc){
  //   doc.parctitionerObj = User.findOne({
  //     _id: doc.parctitioner
  //   });
  //
  //   return doc;
  // },
  //
  // transform: function(doc){
  //   doc.instructorObj = User.findOne({
  //     _id: doc.instructor
  //   });
  //
  //   return doc;
  // },

  transform: function(doc){
    doc.exercisesObj = Exercise.find({
      _id: { $in: doc.exercises }
    });

    return doc;
  }
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
    label: 'Referência aos exercícios',
    optional: false
  },

  createAt: {
    type: Date,
    label: 'Criado em',
    optional: false
  },

  status: {
    type: Boolean,
    label: 'Status',
    optional: false
  }
});

Training.attachSchema(Schemas.Training);
