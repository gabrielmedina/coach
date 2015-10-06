// collection state

State = new Mongo.Collection('states', {
  transform: function(doc){
    doc.citiesObj = City.find({
      _id: { $in: doc.cities }
    });

    return doc;
  }
});

var Schemas = {};

Schemas.State = new SimpleSchema({
  name: {
    type: String,
    label: 'Nome',
    optional: false
  },

  uf: {
    type: String,
    label: 'UF',
    optional: false
  },

  cities: {
    type: [String],
    label: 'Cidades',
    optional: false
  }
});

State.attachSchema(Schemas.State);
