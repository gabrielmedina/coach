// collection exercise

Exercise = new Mongo.Collection('exercises', {
  transform: function(doc){
    doc.musclesObj = Muscle.find({
      _id: { $in: doc.muscles }
    });

    doc.propsObj = Prop.find({
      _id: { $in: doc.props }
    });

    return doc;
  }
});


Exercise.before.insert(function(id, doc){
  doc.createdAt = new Date();
});

Exercise.before.update(function(id, doc, fields, modifier, options){
  modifier.$set = modifier.$set || {};
  modifier.$set.modifiedAt = new Date();
});


var Schemas = {};

Schemas.Exercise = new SimpleSchema({
  'name': {
    type: String,
    label: 'Nome',
    optional: false
  },

  'images': {
    type: [String],
    label: 'Imagens',
    optional: true
  },

  'props': {
    type: [String],
    label: 'Referência aos equipamentos deste treinamento',
    optional: false
  },

  'muscles': {
    type: [String],
    label: 'Referência aos músculos deste treinamento',
    optional: true
  },

  'status': {
    type: Boolean,
    label: 'Status',
    optional: false
  }
});

Exercise.attachSchema(Schemas.Exercise);


exerciseImages = new FS.Collection('exerciseImages', {
  stores: [
    new FS.Store.FileSystem('exerciseImages')
  ]
});

exerciseImages.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  },
  download: function () {
    return true;
  }
});
