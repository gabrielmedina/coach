// collection gym

Gym = new Mongo.Collection('gyms');

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

  users: {
    type: [Object],
    label: 'Usuários',
    optional: false
  },

  city: {
    type: Object,
    label: 'Cidade',
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