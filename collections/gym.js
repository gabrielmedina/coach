// collection gym

Gym = new Mongo.Collection('gyms', {
  transform: function(doc){
    doc.cityObj = City.findOne({
      _id: doc.city
    });

    return doc;
  }
});


Gym.before.insert(function(id, doc){
  doc.createdAt = Date.now();
});

Gym.before.update(function(id, doc, fields, modifier, options){
  modifier.$set = modifier.$set || {};
  modifier.$set.modifiedAt = Date.now();
});


var Schemas = {};

Schemas.Gym = new SimpleSchema({
  name: {
    type: String,
    label: 'Nome',
    optional: false
  },

  phone: {
    type: String,
    label: 'Telefone',
    optional: false
  },

  email: {
    type: String,
    label: 'E-mail',
    optional: false
  },

  city: {
    type: String,
    label: 'Referência a cidade',
    optional: false
  },

  status: {
    type: Boolean,
    label: 'Status',
    optional: false
  }
});

Gym.attachSchema(Schemas.Gym);
