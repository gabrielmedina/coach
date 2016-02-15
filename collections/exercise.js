// collection exercise

Exercise = new Mongo.Collection('exercises', {
  transform: function(doc){
    doc.musclesObj = Muscle.find({
      _id: { $in: doc.muscles }
    });

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

  images: {
    type: [String],
    label: 'Imagens',
    optional: true
  },

  prop: {
    type: String,
    label: 'Referência ao adereço/equipamento',
    optional: false
  },

  muscles: {
    type: [String],
    label: 'Referência aos músculos deste treinamento',
    optional: true
  },

  status: {
    type: Boolean,
    label: 'Status',
    optional: false
  }
});

Exercise.attachSchema(Schemas.Exercise);


exerciseImages = new FS.Collection('exerciseImages', {
  stores: [
    new FS.Store.FileSystem('exerciseThumbs', {
      transformWrite: function(fileObj, readStream, writeStream) {
        gm(readStream, fileObj.name()).resize('500').stream().pipe(writeStream);
      }
    }),
    new FS.Store.FileSystem('exerciseImages'),
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
