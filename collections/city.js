// collection city

City = new Mongo.Collection('cities', {
  transform: function(doc){
    doc.stateObj = State.findOne({
      _id: doc.state
    });

    return doc;
  }
});

var Schemas = {};

Schemas.City = new SimpleSchema({
  name: {
    type: String,
    label: 'Nome',
    optional: false
  },

  state: {
    type: String,
    label: 'Referência ao estado',
    optional: true
  },

  status: {
    type: Boolean,
    label: 'Status',
    optional: false
  }
});

City.attachSchema(Schemas.City);
