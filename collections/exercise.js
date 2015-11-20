// collection exercise

Exercise = new Mongo.Collection('exercises', {
  transform: function(doc){
    doc.muscleObj = Muscle.findOne({
      _id: doc.muscle
    });

    return doc;
  },

  transform: function(doc){
    doc.propObj = Prop.findOne({
      _id: doc.prop
    });

    return doc;
  }
});


Exercise.before.insert(function(id, doc){
  doc.createdAt = Date.now();
});

Exercise.before.update(function(id, doc, fields, modifier, options){
  modifier.$set = modifier.$set || {};
  modifier.$set.modifiedAt = Date.now();
});


var Schemas = {};

Schemas.Exercise = new SimpleSchema({
  name: {
    type: String,
    label: 'Nome',
    optional: false
  },

  prop: {
    type: String,
    label: 'Referência ao adereço/equipamento',
    optional: false
  },

  muscle: {
    type: String,
    label: 'Referência ao músculo',
    optional: false
  },

  status: {
    type: Boolean,
    label: 'Status',
    optional: false
  }
});

Exercise.attachSchema(Schemas.Exercise);
