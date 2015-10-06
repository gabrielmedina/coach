// collection gym

Gym = new Mongo.Collection('gyms', {
  transform: function(doc){
    doc.cityObj = City.findOne({
      _id: doc.city
    });

    return doc;
  }
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

Gym.attachSchema(Schemas.Gym);
